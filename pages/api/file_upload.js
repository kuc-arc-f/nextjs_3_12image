// next.js image upload, save Webp format
// pages/api/file_upload.js

import multer from 'multer';
import initMiddleware from '../../libs/init-middleware';
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

const multerAny = initMiddleware(
  upload.any()
);
/*
type NextApiRequestWithFormData = NextApiRequest & {
  files: any[],
}
*/
export const config = {
  api: {
      bodyParser: false,
  },
}
const changeWebpImages = (imgPath, outputDir, outputFilePath) => {
  const fileName = outputFilePath.split('/').reverse()[0]; // 拡張子を含む画像ファイル名
  const imgName = fileName.split('.')[0]; // 拡張子を除く画像ファイル名
  sharp(imgPath)
    .webp({
      quality: 75
    })
    .toFile(`${outputDir}${imgName}.webp`, (err) => {
      if ( err ) console.error(err);
      return;
    });
};

//
export default async function (req, res){
  try{
    await multerAny(req, res);
    if (!req.files?.length || req.files.length > 1) {
      res.statusCode = 400;
      res.end();
      return;
    }
//console.log("len=", req.files.length)
    const blob= req.files[0];
console.log("originalname=", blob.originalname)
    var originalname = blob.originalname
    var dir_base = "/home/naka/work/node/react/nextjs_3_12image/"
    var dir_public = dir_base + "public/uploads/"
    var new_name = "temp_" + originalname
    fs.rename(dir_public+ originalname , dir_public + new_name, (err) => {
      if (err) throw err;
    });    
    changeWebpImages(dir_public + new_name, dir_public, dir_public + new_name)
//console.log(dir_base)
    res.json({});
  } catch (err) {
      console.log(err);
      res.status(500).send(); 
  }   
};

