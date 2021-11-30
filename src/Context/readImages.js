const fs = require('fs');
const path = require('path');

const wallpaperPath = path.join(__dirname, "../images/wallpapers")
// const iconPath = "../images/icons"
const iconPath = path.join(__dirname, "../images/icons")


const readfile = () => {
    fs.readdir (iconPath, (err, files)=>{
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
    
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            console.log(file); 
        });
    
    })

}