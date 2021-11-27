import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: "./upload",
    filename: (req, file, cb) => {
      cb(null, Date.now().valueOf() + "_" + path.extname(file.originalname));
    }
  })
  
  const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 }
  }).array("image");
  

//   router.post(
//     "/",
//     multer({ storage: storage }).array("image"),
//     (req, res) => {
//     }
//   );

export default multer({ storage: storage }).array("image");
// export const contentUpload = multer({ fieldname: 'images', storage: contentStorage, fileSize: 5 * 1024 * 1024 });
