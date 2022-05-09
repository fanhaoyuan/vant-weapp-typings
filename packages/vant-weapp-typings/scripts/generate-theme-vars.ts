import postcss from 'postcss';
import syntax from 'postcss-less';

import * as childProcess from 'child_process';
import * as fs from 'fs';

function upperFirst(string: string) {
    const [first, ...rest] = string.split('');

    return first.toUpperCase() + rest.join('');
}

function camelCase(kebabCase: string) {
    const [first, ...rest] = kebabCase.split('-');

    if (!rest.length) {
        return first;
    }

    return [first, ...rest.map(upperFirst)].join('');
}

const content = childProcess
    .execSync(
        'curl https://raw.githubusercontent.com/youzan/vant-weapp/dev/packages/common/style/var.less --connect-timeout 10'
    )
    .toString();

postcss()
    .process(content, { syntax })
    .then(ast => {
        const map: Record<string, string[]> = {};

        let last = '';

        for (const node of ast.root.nodes) {
            if (node.type === 'comment') {
                last = upperFirst(node.text.replace(/\s/g, ''));
                map[last] = [];
                continue;
            }

            if (node.type === 'atrule') {
                map[last].push(camelCase(node.name));
                continue;
            }
        }

        let file = '';

        for (const [key, value] of Object.entries(map)) {
            file += `type ${key}ThemeVars = ${value.map(item => JSON.stringify(item)).join(' | ')}; \n\n`;
        }

        file += `
/**
 * 主题变量
 *
 * @see https://github.com/youzan/vant-weapp/blob/dev/packages/common/style/var.less
 */
export type ThemeVars = Record<${Object.keys(map)
            .map(item => `${item}ThemeVars`)
            .join(' | ')}, string>`;

        fs.writeFileSync('src/config-provider/theme-vars.ts', file, 'utf-8');
    });
