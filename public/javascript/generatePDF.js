var filename = 'filler';
var data = []
var extension= '.pdf'
//GLOBAL i FOR FILE GENERATION
var i = 1
//WRITE FILE, CHECKS IF FILE EXIST, IF IT DOES CALLS FUNCTION AGAIN TO WRITE
function writeToFile(fileName, data) {
    fs.access(`${fileName}(${i++})${extension}`, (err) => {
        if (err) {
            fs.writeFile(`${fileName}(${--i})${extension}`, generateMarkdown(data), function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log(`${fileName}(${i}) successfully generated.`);
            });
        } else {
            return writeToFile(fileName, data)
        }
    })
}