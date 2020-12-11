import { ReduxLoggerOptions } from 'redux-logger';
import { Middleware } from 'redux';
import { transformEnum } from './transform-enum';

/**
 * 状态变更log
 * @param logger
 */
export function changeLog(logger: (options?: ReduxLoggerOptions) => Middleware) {
  return logger({
    actionTransformer: (action: any) => Object.assign(action, { type: transformEnum(action.type) }),
  });
}
