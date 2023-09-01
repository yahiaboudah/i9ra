const { execSync } = require('child_process');

try {
  execSync('node organize.js && git add . && git commit -m "Update notes" && git push', {
    stdio: 'inherit',
    shell: true,
  });
  console.log('Commands executed successfully.');
} catch (error) {
  console.error('Error executing commands:', error.message);
}
