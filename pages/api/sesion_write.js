//
import withSession from '../../libs/session'
//
export default withSession(async function (req, res){
  try{
//console.log(data)
    req.session.set("user", {
      id: 140,
      admin: true,
    });    
    await req.session.save();
    res.json({});
  } catch (err) {
      console.log(err);
      res.status(500).send();    
  }   
})
