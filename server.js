const fs = require("fs");
const http = require('http');
const requestListener = function (req, res) {
	if(req.url=="/post"){
	var content=req.headers.address
	let vals= content.split("\"")[1].split(":")
	let host = vals[1].substr(2)
	let port=vals[2]
		fs.writeFile('./addr', "ssh <user>@"+host+" -p"+port, err => {
		  if (err) {
		    res.end(err)
		  }
		})
		res.end("Address Updated Successfully for Acer-Home")
	}
	else if(req.url=="/home"){
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
    else if(req.url=="/post2"){
    	var content=req.headers.address
    	let vals= content.split("\"")[1].split(":")
	let host = vals[1].substr(2)
	let port=vals[2]
    		fs.writeFile('./addr2',  "ssh <user>@"+host+" -p"+port, err => {
    		  if (err) {
    		    res.end(err)
    		  }
    		})
    		res.end("Address Updated Successfully for Mi-Personal")
    	}
    	else if(req.url=="/work"){
    	try{
    		const content = fs.readFileSync('./addr2',function(err, data) {
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
server.listen(process.env.PORT || 8080);
