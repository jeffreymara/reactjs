express = require('express')
app = express()

app.set('view engine', 'pug');
app.set('views','./views');
app.use('/lib', express.static('bower_components'));
app.use('/static', express.static('./static'));
app.set('view engine', 'pug');


app.get('/', function(req, res){
    res.render('index')
});

//Start Server
app.listen(8080, function(){
  console.log('ReactJS Server started on 8080')
});
