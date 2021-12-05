import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: "./upload",
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);	// 파일 확장자
      const timestamp = new Date().getTime().valueOf();	// 현재 시간
      const filename = path.basename(file.originalname, ext) + timestamp + ext;
      cb(null, filename);
    }
  })
  
export default multer({ storage: storage }).array("image");
