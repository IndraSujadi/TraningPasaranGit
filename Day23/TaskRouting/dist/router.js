"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Router = /** @class */ (function () {
    function Router() {
        this._routeList = [];
    }
    Router.prototype.addRoute = function (pattern, handler) {
        this._routeList.push({ pattern: pattern, handler: handler });
    };
    Router.prototype.handleRequest = function (path, context) {
        for (var _i = 0, _a = this._routeList; _i < _a.length; _i++) {
            var _b = _a[_i], pattern = _b.pattern, handler = _b.handler;
            if (pattern.includes(':')) {
                var pathData = tryMatchPattern(pattern, path);
                if (pathData != null) {
                    handler(context, pathData);
                }
            }
            else {
                if (path === pattern) {
                    handler(context, []);
                    return;
                }
            }
        }
    };
    return Router;
}());
function tryMatchPattern(pattern, path) {
    var patternParts = pattern.slice(1).split('/');
    var pathParts = path.slice(1).split('/');
    // cek sama panjang gk
    if (patternParts.length !== pathParts.length) {
        return null;
    }
    var pathData = [];
    for (var i = 0; i < patternParts.length; i++) {
        var patternPart = patternParts[i];
        if (patternPart.startsWith(':')) {
            pathData.push(pathParts[i]);
        }
        else {
            var isMatch = pathParts[i] === patternPart;
            if (!isMatch) {
                return null;
            }
        }
    }
    return pathData;
}
exports.default = Router;
//# sourceMappingURL=router.js.map