const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'blog');
const contentDir = path.join(__dirname, 'content/blog');
const staticDir = path.join(__dirname, 'static');

function copyContentAndImages() {

  const folderNames = fs.readdirSync(sourceDir);

  folderNames.forEach(folderName => {
    
    if(folderName.startsWith('.')) return;

    const mdSourceFile = path.join(sourceDir, folderName, 'index.md');
    const mdTargetFile = path.join(contentDir, `${folderName}.md`);
    const imageSourceDir = path.join(sourceDir, folderName);
    const imageTargetDir = path.join(staticDir, folderName);

    if (fs.existsSync(mdSourceFile)) {
      fs.copyFileSync(mdSourceFile, mdTargetFile);
      console.log(`Copied ${mdSourceFile} to ${mdTargetFile}`);
    } else {
      console.log(`Skipped ${mdSourceFile} as it doesn't exist.`);
    }

    if (fs.existsSync(imageSourceDir) && fs.lstatSync(imageSourceDir).isDirectory()) {

      const imageFileNames = fs.readdirSync(imageSourceDir);
      imageFileNames.forEach(imageFileName => {
        if(imageFileName !== "index.md") {
            const sourceImagePath = path.join(imageSourceDir, imageFileName);
            const targetImagePath = path.join(staticDir, imageFileName);

            if (!fs.existsSync(targetImagePath) && fs) {
            fs.copyFileSync(sourceImagePath, targetImagePath);
            console.log(`Copied ${sourceImagePath} to ${targetImagePath}`);
            }
        }
      });
    }
  });

  console.log('Content and images copied successfully!');
}

copyContentAndImages();
