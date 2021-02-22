type RouteHandler = (context: any, pathData: Array<string>) => void;

type Route = {
  pattern: string;
  handler: RouteHandler;
};

type RouteList = Array<Route>;

class Router {
  _routeList: RouteList = [];
  addRoute(pattern: string, handler: RouteHandler) {
    this._routeList.push({ pattern, handler });
  }

  handleRequest(path: string, context: any) {
    for (let { pattern, handler } of this._routeList) {
      if (pattern.includes(':')) {
        let pathData = tryMatchPattern(pattern, path);
        if (pathData != null) {
          handler(context, pathData);
        }
      } else {
        if (path === pattern) {
          handler(context, []);
          return;
        }
      }
    }
  }
}

function tryMatchPattern(pattern: string, path: string) {
  let patternParts = pattern.slice(1).split('/');
  let pathParts = path.slice(1).split('/');
  // cek sama panjang gk
  if (patternParts.length !== pathParts.length) {
    return null;
  }

  let pathData = [];
  for (let i = 0; i < patternParts.length; i++) {
    let patternPart = patternParts[i];
    if (patternPart.startsWith(':')) {
      pathData.push(pathParts[i]);
    } else {
      let isMatch = pathParts[i] === patternPart;
      if (!isMatch) {
        return null;
      }
    }
  }
  return pathData;
}

export default Router;
