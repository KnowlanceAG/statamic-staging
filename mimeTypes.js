const { exec } = require('child_process');
const { promisify } = require('util');
const fs = require('fs');
const path = require('path');

const execAsync = promisify(exec);

const basePath = 'public/assets';

const validImageExtensions = [
  'jpg',
  'jpeg',
  'png',
  'gif',
  'webp'
];

const expectedMimeType = ((ext) => {
  switch (ext) {
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg'
    case 'png':
      return 'image/png'
    case 'gif':
      return 'image/gif'
    case 'webp':
      return 'image/webp'
  }
})

function getFileExtension(filePath) {
  const lastDotIndex = filePath.lastIndexOf('.');
  return lastDotIndex > 0 && lastDotIndex < filePath.length - 1 ? filePath.slice(lastDotIndex + 1) : '';
}

async function validateFile(filePath) {
  // if (!filePath.includes('public/assets/blog/2022/zielgruppenanalyse/ikea-zielgruppenanalyse.png')) {
  //   return true
  // }

  const fileExtension = getFileExtension(filePath).toLowerCase();

  try {
    if (!validImageExtensions.includes(fileExtension)) {
      // Ignoring file because it is not an image
      // console.log('ignoring (not an image extension)', fileExtension, filePath)
      return true
    }


    const { stdout: fileInformation } = await execAsync(`file --mime-type "${filePath}"`)
    const mimeType = fileInformation.match(/image\/[^\s]*/);

    if (!mimeType[0].includes('image/')) {
      // Ignoring file because it is not an image
      console.log('ignoring (not an image mime type)', filePath, mimeType[0])
      return true
    }

    const valid = mimeType[0] === expectedMimeType(fileExtension)
    if (!valid) {
      console.log(`Invalid: ${filePath} - Expected ${expectedMimeType(fileExtension)} but got ${mimeType}`)
    }

    return valid
  } catch (error) {
    console.error(`Error validating file ${filePath}: ${error.message}`);
    return false;
  }
}

function traverseDirectory(directoryPath) {
  fs.readdirSync(directoryPath).forEach((file) => {
    const filePath = path.join(directoryPath, file);

    if (fs.statSync(filePath).isDirectory()) {
      traverseDirectory(filePath);
    } else {
      validateFile(filePath)
        .catch((error) => console.error(`Error processing file ${filePath}: ${error.message}`))
    }
  });
}

traverseDirectory(basePath);