const fs = require('fs');
const path = require('path');
const target = path.resolve(__dirname, '..', '..', 'src','storage');
const writeTarget = path.resolve(__dirname, '..', '..', 'src','storage', 'plugins', 'transform-enum.ts');

let header = ``;
let body = ``;
const functionName = `
/**
* 转换value为枚举
* @param type ActionEnum的值
* @example 此文件的代码通过脚本生成，扫描storage下的 "*.action.ts" 文件自动生成, user-info.action.ts
*/
export function transformEnum(type: unknown): string {
  switch (type) {`
const end = `
    default:
      return 'unknown action';
    }
  }`

function getEnumName(str) {
  const reg = /enum [A-Za-z]+ {/g;
  const code = str.match(reg)[0];
  const action = code.slice(4, code.length - 2);
  return action.trim();
}

function getEnumKeys(str) {
  const reg = /{[\S\s]+}/;
  const code = str.match(reg)[0];
  const enums = code.slice(1, code.length - 1).split(',');
  return enums.map(s => s.trim()).filter(s => s.length > 1);
}

function getHeader(str, filepath) {
  let file = filepath.split('storage')[1];
  if (file.endsWith('.ts')) {
    file = file.slice(0 , file.length - 3);
  }
  return `import {${getEnumName(str)} } from '..${file}';`;
}

function getBody(enumName, enumKeys) {
  let res = '';
  for (const key of enumKeys) {
    res += `
    case ${enumName}.${key}:
      return '${enumName}.${key}';\n`
  }
  return res;
}

function genTransformEnum() {
  loopRead(target);
  const res = `${header}
    ${functionName}
    ${body}${end}
  `;
  fs.writeFileSync(writeTarget, res);
}

function loopRead(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (!file.includes('plugins')) {
      const current = path.resolve(dir, file);
      if (fs.statSync(current).isDirectory()) {
        loopRead(current);
      } else {
        if (current.includes('action.ts')) {
          const str = fs.readFileSync(current).toString();
          const enumName = getEnumName(str);
          const enumKeys = getEnumKeys(str);
          header += `${getHeader(str, current)}\n`;
          body += `${getBody(enumName, enumKeys)}`;
        }
      }
    }
  }
}

genTransformEnum();