
export default {
  get_image_size : function(fname){
    try{
      var image = new Image();
      image.src = fname;    
      return image
    } catch (err) {
      console.log(err);
      throw new Error("Error, get_image_size ");
    }
  },

}
