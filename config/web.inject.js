const paths = require('./paths');
const getClientEnvironment = require('./env');
const env = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1));

function createHtmlTag(tagName, attr) {
  let tag = `<${tagName}`;
  for (const [attrKey, value] of Object.entries(attr)) {
    tag += ` ${attrKey}="${value}"`
  }
  if (!['link', 'meta'].includes(tagName)) {
    tag += ` ${tagName} />`
  } else {
    tag += ` >`
  }
  return tag
}

const prefetches = [
  {rel: 'dns-prefetch', href: 'https://meeting.tencent.com/'},
  {rel: 'preconnect', href: 'https://meeting.tencent.com/'},
  {rel: 'dns-prefetch', href: 'https://cdn.bootcdn.net/'},
  {rel: 'preconnect', href: 'https://cdn.bootcdn.net/', crossorigin: true},
];

function injectPrefetchTag(tags) {
  let res = '';
  for (const tag of tags) {
    res += createHtmlTag('link', tag);
  }
  return res;
}


module.exports = {
  prefetches,
  injectPrefetchTag
}