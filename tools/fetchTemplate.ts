import { select, confirm } from '@inquirer/prompts';
import path from 'path';
import fs from 'fs';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const TEMPLATE_PATH = path.join('user', 'template.css');
const TEMPLATES_URL = 'https://templates.linksharer.js.org';

const getTemplatesList = async (): Promise<string[]> => {
	const response = await fetch(`${TEMPLATES_URL}/templates.json`);
	if (!response.ok) throw new Error('Failed to fetch templates list');
	return response.json();
};

const getTemplate = async (template: string): Promise<string> => {
	const response = await fetch(`${TEMPLATES_URL}/templates/${template}.css`);
	if (!response.ok) throw new Error(`Failed to fetch template: ${template}`);
	return response.text();
};

const main = async () => {
	const argv = yargs(hideBin(process.argv))
		.option('yes', {
			alias: 'y',
			type: 'boolean',
			description: 'Skip confirmation if the template already exists',
			default: false,
		})
		.option('template', {
			alias: 't',
			type: 'string',
			description: 'Specify the template to use directly',
		})
		.version(false)
		.help()
		.alias('help', 'h')
		.parseSync();

	// Check if template file already exists
	if (!argv.yes && fs.existsSync(TEMPLATE_PATH)) {
		const proceed = await confirm({
			message: `This action will override ${TEMPLATE_PATH}. Continue?`,
		});
		if (!proceed) {
			console.log('Abort.');
			process.exit(1);
		}
	}

	let selectedTemplate: string;

	// Use provided template or prompt user for selection
	if (argv.template) {
		selectedTemplate = argv.template;
		console.log(`Using template: ${selectedTemplate}`);
	} else {
		const templatesList = await getTemplatesList();
		selectedTemplate = await select({
			message: 'Select a template',
			choices: templatesList.map((template) => ({ name: template, value: template })),
		});
	}

	try {
		const templateContent = await getTemplate(selectedTemplate);
		fs.writeFileSync(TEMPLATE_PATH, templateContent);
		console.log(`Template ${selectedTemplate} has been written to ${TEMPLATE_PATH}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};

main();
