//
const bcrypt = require('bcrypt');
import LibCsrf from "../../libs/LibCsrf"
import LibConst from '../../libs/LibConst'
//
export default async (req, res) => {
  try{
    var data = req.body
//    console.log(data)
    var CSRF_SECRET = process.env.CSRF_SECRET
    var csrf = await LibCsrf.get_token( CSRF_SECRET )
    var retArr= {
      ret:1, user_id:0, csrf: csrf
    }
    return res.json(retArr);
  } catch (err) {
    console.log(err);
    res.status(500).send();    
  }  
}
