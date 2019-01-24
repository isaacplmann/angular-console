const shell = require('shelljs');

shell.exec('node ./node_modules/vscode/bin/install');
shell.rm('-rf', 'node_modules/cypress/node_modules/@types');
shell.rm('-rf', 'node_modules/@types/sinon-chai/node_modules/@types');

shell.rm('-rf', 'node_modules/@nrwl/azure');

shell.exec(`cp -r nx-azure-support/azure node_modules/@nrwl/azure`);
