const multer = require('multer');
const path = require('path');

const multiDiskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = path.resolve(__dirname, '../../public/img');
        cb(null, folder);
    },
    filename: (req, file, cb) => {
        let imgName = Date.now() + path.extname(file.originalname);
        cb(null, imgName);
    }
});

const fileUpload = multer({ storage: multiDiskStorage });

module.exports = fileUpload;