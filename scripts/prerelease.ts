import glob from 'fast-glob';
import * as fs from 'fs-extra';
import * as path from 'path';

const packagesPath = path.resolve(__dirname, '../packages');

(async function prerelease() {
    const changelog = await fs.readFile(path.resolve(__dirname, '../CHANGELOG.md'), 'utf-8');

    const changelogFiles = await glob(path.resolve(packagesPath, '*/CHANGELOG.md'));

    for await (const file of changelogFiles) {
        await fs.writeFile(file, changelog, 'utf-8');
    }

    const packageJsonFiles = await glob(path.resolve(packagesPath, '*/package.json'));

    const { version } = await fs.readJSON(path.resolve(__dirname, '../package.json'), 'utf-8');

    console.log(version);

    for await (const file of packageJsonFiles) {
        const json = await fs.readJSON(file, 'utf-8');

        await fs.writeJSON(file, { ...json, version }, { encoding: 'utf-8', spaces: 4 });
    }
})();
