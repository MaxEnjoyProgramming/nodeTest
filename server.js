// 惯例：给本地变量起一个和模块名称一样的名字是一种惯例

var http = require("http");
var url=require("url");

function start(route,handle) {

    function onRequest(request, response) {
    	var postData="";
        var pathname=url.parse(request.url).pathname;

        console.log("Request for"+pathname+" received.");

        request.setEncoding("utf8");

        request.addListener("data",function (postDataChunk) {
            // body...
            postData+=postDataChunk;
            console.log("received POST data chunk '"+postDataChunk+"'.");
        });

        request.addListener("end",function(){
            route(handle,pathname,response,postData);
        });
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started");
}

exports.start = start;
