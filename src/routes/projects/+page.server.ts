import type { PageServerLoad } from './$types';
import { parse } from 'yaml';

import fs from 'fs';
import path from 'path';

const projectsFolder = path.resolve('./static/projects');

const files = fs.readdirSync(projectsFolder).map(file => {
	if (fs.statSync(path.join(projectsFolder, file)).isDirectory()) {
		return null;
	}

	const content = fs.readFileSync(path.join(projectsFolder, file), 'utf-8');
	const data = parse(content);
	return {
		imgSrc: '/projects/images/' + data.image,
		imgStyling: data['img-styling-override'],
		title: data.title,
		caption: data.caption,
		link: data.link,
	};
}).filter(Boolean);



export const load: PageServerLoad = async () => {
	return {
		projects: files
	}
};