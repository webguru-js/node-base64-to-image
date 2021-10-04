SaveBase64 = (base64DataToSave, imagePathToSaveWithName, imageExtension = 'jpeg') => {
  return new Promise((resolve, reject) => {
	  let base64Data = base64DataToSave.replace(`data:image/${imageExtension};base64,`, "");

	  require("fs").writeFile(imagePathToSaveWithName, base64Data, {encoding: 'base64'}, err => {
	    if(err) {
	    	reject(err);
	    }
      else {
	      resolve({
          status: 200,
          imagePath: imagePathToSaveWithName
        });
      }
	  });
	});
};

module.exports = SaveBase64;