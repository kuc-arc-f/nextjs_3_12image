//
export default (req, res) => {
  var ret ={
    message: "Hello, API!",
    p1: "param1",
  }
  res.json(ret);
};