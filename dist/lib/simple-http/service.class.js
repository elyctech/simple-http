"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require("fs");

var fs = _interopRequireWildcard(_fs);

var _http = require("http");

var http = _interopRequireWildcard(_http);

var _path = require("path");

var path = _interopRequireWildcard(_path);

var _url = require("url");

var url = _interopRequireWildcard(_url);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardSimpleHttpService = function () {
    function StandardSimpleHttpService() {
        _classCallCheck(this, StandardSimpleHttpService);
    }

    _createClass(StandardSimpleHttpService, [{
        key: "createServer",
        value: function createServer(documentRoot) {
            if (fs.existsSync(documentRoot) && fs.statSync(documentRoot).isDirectory()) {
                documentRoot = path.normalize(documentRoot);
                if (documentRoot.endsWith("/")) {
                    documentRoot = documentRoot.slice(0, -1);
                }
            } else {
                throw new Error("Invalid document root: '" + documentRoot + "' is not a directory");
            }
            return http.createServer(function (request, response) {
                var file = documentRoot + url.parse(request.url).pathname;
                if (fs.existsSync(file + "/index.html")) {
                    response.end(fs.readFileSync(file + "/index.html"));
                } else if (fs.existsSync(file) && fs.statSync(file).isFile()) {
                    response.end(fs.readFileSync(file));
                } else {
                    response.writeHead(404);
                    response.end();
                }
            });
        }
    }]);

    return StandardSimpleHttpService;
}();

exports.default = StandardSimpleHttpService;