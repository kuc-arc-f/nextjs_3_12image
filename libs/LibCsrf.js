// LibCsrf
var csrf = require('csrf');
var tokens = new csrf();

//
export default {
  get_token:async function(secret){
    try{
      var token = tokens.create(secret);
      var ret ={
        token: token,
      }
      return ret
    } catch (e) {
      console.log(e);
      throw new Error('error, get_token');
    }
  },
  get_token_db:async function(user_id){
  },  

}