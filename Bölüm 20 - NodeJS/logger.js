var url = "http//logger.io/logger";
var name = "Barış Karakaya"


function log(message){
    console.log(message);
    console.log(__filename);
    console.log(__dirname);
}

module.exports = {
    name : name,
    log : log
}
