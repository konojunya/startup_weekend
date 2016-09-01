var express = require("express"),
		fs = require("fs"),
		app = express(),
		request = require("request"),
		path = require("path"),
		PORT =  process.env.PORT || 3000

app.use(express.static(path.join(__dirname, "public")));

app.get("/",(req,res) => {
	res.sendfile("index.html")
})
app.get("/route",(req,res) => {
	res.sendfile("main.html")
});

app.get("/getdata",(req,res) => {
	
	var json = fs.readFileSync(__dirname + "/public/javascripts/live_data.json", "utf-8");
	json = JSON.parse(json)
  res.json({
  	data: json
  })

})

app.listen(PORT,() => {
	console.log("app started.")
})