
const multer = require('multer');
const path = require('path');

const multiDiskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = path.resolve(__dirname, '../../public/img/users');
        cb(null, folder);
    },
    filename: (req, file, cb) => {
        let imgName = 'imagenUsers' + Date.now() + path.extname(file.originalname);
        cb(null, imgName);
    }
});

const userUpload = multer({ storage: multiDiskStorage });

module.exports = userUpload;