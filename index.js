var schedule = require('node-schedule')
var Nightmare = require('nightmare')

var j = schedule.scheduleJob('0 * * * *', function(){
  var filename = new Date().valueOf().toString() + '.html'
  var win = new Nightmare()
      .viewport(1024, 768)
      .useragent("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36")
      .on('did-finish-load', function(err,d){
        console.log(err,d)
      })
      .goto('http://drudgereport.com')
      .end()
      .html('./output/'+filename,'HTMLOnly')
      .then(function(a,b){
          console.log(a,b,'done')
      })
})
