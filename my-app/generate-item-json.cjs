const fs = require('fs');
const path = require('path');

const directories = ['shoes', 'tops', 'bottoms', 'heads', 'hats'];
const staticDir = path.join(__dirname, 'static');

directories.forEach(directory => {
  const dirPath = path.join(staticDir, directory);
  const outputFilePath = path.join(dirPath, 'images.json');

  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error(`Error reading the ${directory} directory:`, err);
      return;
    }

    // Log the files read from the directory for debugging
    console.log(`Files in ${directory} directory:`, files);

    // Filter out non-image files (assuming images have jpg, jpeg, png extensions)
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png)$/i.test(file));

    // Log the filtered image files for debugging
    console.log(`Filtered image files in ${directory} directory:`, imageFiles);

    // Write the image files to images.json
    fs.writeFile(outputFilePath, JSON.stringify(imageFiles, null, 2), err => {
      if (err) {
        console.error(`Error writing ${directory}/images.json:`, err);
        return;
      }

      console.log(`${directory}/images.json generated successfully.`);
    });
  });
});
