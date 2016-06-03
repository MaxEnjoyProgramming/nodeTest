var exec = require("child_process").exec;

function start(response,postData) {
    // body...
    console.log("Request handler 'start' was called");

    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" method="post">' +
        '<textarea name="text" rows="20" cols="60"></textarea>' +
        '<input type="submit" value="Submit text" />' +
        '</form>' +
        '</body>' +
        '</html>';
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(body);
    response.end();

    // exec("ls-lah",function (error,stdout,stderr) {
    // 	// body...
    // 	// content=stdout;
    // 	response.writeHead(200,{"Content-Type":"text/plain"});
    // 	response.write(stdout);
    // 	response.end();
    // });
}


// function start () {
// 	// body...
// 	console.log("Request handler 'start' was called");

// 	function sleep (milliSeconds) {
// 		// body...
// 		var startTime=new Date().getTime();
// 		while(new Date().getTime()<startTime+milliSeconds);
// 	}

// 	sleep(10000);

// 	return "hello start";
// }

function upload(response,postData) {
    // body...
    console.log("Request handler 'upload' was called");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("you've sent:"+postData);
    response.end();
}

exports.start = start;
exports.upload = upload;
