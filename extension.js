
const vscode = require('vscode');
function activate(context) {
	let disposable = vscode.commands.registerCommand('vuetemplatetocssclass.generateCss', () => {
			const { parse } = require("./compiler-dom.cjs");
				function gen(obj,lv) {
					if (!obj) return;
					let childClass = ``;
					if (obj.children) {
						for (const key in obj.children) {
							childClass += gen(obj.children[key],lv+1);
						}
					}
					if (obj.props) {
						const c = obj.props.find((v) => v.name === "class");
						if (c && c.value && c.value.content) {
							let s=`
${new Array(lv-1).fill('	').join('')}.${c.value.content}{${childClass}
${new Array(lv-1).fill('	').join('')}}`
							return s;
						}
					}
					return childClass;
				}

        const editor = vscode.window.activeTextEditor;
        if (!editor || editor.document.languageId !== 'vue') {
            vscode.window.showErrorMessage('当前未打开vue文件');
            return;
        }

        // 获取当前打开的vue文件的路径和内容
        const filePath = editor.document.uri.fsPath;
        const fileContent = editor.document.getText();

				let ast = parse(fileContent).children[0];
				let newContent = `
<style lang="scss" scoped>${gen(ast,0)}
</style>`;
				// 将生成的样式插入到当前打开的vue文件的最后
				const newPosition = editor.document.positionAt(editor.document.getText().length);
				editor.edit((editBuilder) => {
						editBuilder.insert(newPosition, newContent);
				});

				vscode.window.showInformationMessage('样式已生成并插入到当前页面的style标签中');

    });

    context.subscriptions.push(disposable);
}

function deactivate() {}
module.exports = {
	activate,
	deactivate
}
