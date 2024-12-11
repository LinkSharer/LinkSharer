import { select, confirm } from '@inquirer/prompts';
import path from 'path';
import fs from 'fs';

const TEMPLATE_PATH = path.join('user', 'template.css');
const TEMPLATES_URL = 'https://linksharer.github.io/Templates';

const getTemplatesList = async (): Promise<string[]> =>
	(await fetch(`${TEMPLATES_URL}/templates.json`)).json();
const getTemplate = async (template: string) =>
	(await fetch(`${TEMPLATES_URL}/templates/${template}.css`)).text();

let proceed = true;

if (fs.existsSync(TEMPLATE_PATH)) {
	proceed = await confirm({
		message: `This action will override ${TEMPLATE_PATH}`,
	});
}

if (!proceed) {
	console.log('Abort.');
	process.exit(1);
}

const template = await select({
	message: 'Select a template',
	choices: (await getTemplatesList()).map((template) => {
		return { name: template, value: template };
	}),
});

fs.writeFileSync(TEMPLATE_PATH, await getTemplate(template));
