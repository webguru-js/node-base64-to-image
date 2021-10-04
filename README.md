# NgxAdvancePagination

Convert and save base64 image data to file.

## Installation

```sh
$ npm i node-base64-to-image --save
``` 

## Usage

```javascript
const SaveBase64 = require('node-base64-to-image');
// or
import { SaveBase64 } from 'node-base64-to-image';
```

```javascript
app.use((req, res, next) => {
  const base64Data = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAABOCAYAAAApW1S...`;
  const imageNameWithPath = `${__dirname}/public/images/sample-image.jpeg`;
  SaveBase64(base64Data, imageNameWithPath, 'jpeg')
  .then(success => {
    res.send(success);
  }, err => {
    throw err;
  });
});
```

## Parameters
Key                     | Description
------------------------|------------
base64DataToSave        | Base64 image data to save into file.
imagePathToSaveWithName | Absolute path where image need to save with the name of the image to save.
imageExtension          | Extension of the Base64 image data.

## License

Licensed under MIT. See [LICENSE](https://github.com/webguru-js/NgxAdvancePagination/blob/main/LICENSE) for more information.

## Issues

Report a bug in [ISSUES](https://github.com/webguru-js/NgxAdvancePagination/issues).
