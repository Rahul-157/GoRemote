const fs = require("fs");
const http = require('http');
const requestListener = function (req, res) {
	if(req.url=="/post"){
	var content=req.headers.address
		fs.writeFile('./addr', content, err => {
		  if (err) {
		    res.end(err)
		  }
		})
		res.end("Address Updated Successfully")
	}
	else if(req.url=="/"){
	try{
		const content = fs.readFileSync('./addr',function(err, data) {
		    if(err)
		       return err;
		    else
		        return data;
		        });
		res.end(content.toString());	
		}
	catch(err){
		res.end(err.toString())
	}
    }
}

const server = http.createServer(requestListener);
server.listen(8080);
