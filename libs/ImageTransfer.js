export default {
  upload : function(id_file){
    console.log("#upload");
    var files = window.document.getElementById(id_file).files;
    var fileObject = files[0];
    if (typeof fileObject === "undefined") {
      return;
    }
    console.log("Name: " + fileObject.name);
    console.log("Size: " + fileObject.size);
    console.log("Type: " + fileObject.type);
    console.log("Date: " + fileObject.lastModified);
    console.log("Date: " + fileObject.lastModifiedDate);
    if (fileObject.type.match(/^image\/(jpeg|png)$/) === null) {
      alert("Error, 画像ファイル種類はjpeg/png以外は登録できません")
      return;
    }
    var max_fileSize = 1000 * 1000;
    if(fileObject.size > max_fileSize){
      alert("Error, ファイルサイズ最大値を超えました。")
      return;
    }
    var formData = new FormData();
    formData.append(id_file, fileObject );
    var xhr = new XMLHttpRequest();
    var self = this
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.response)
            console.log("OK, up");
            console.log(data);
            self.upload_cb();
        } else {
            console.log("NG, up");
        }
      }
    }
    xhr.open("POST", "/api/file_upload");
    xhr.send(formData);    
  },  
  upload_cb :function(){
console.log("#upload_cb");
    alert("complete, upload")
  },
}
