import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Aykut';

export const lastName = 'Asil';

export const description =
	'Hi, I'm Aykut.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ 	platform: Platform.GitHub, 
	 	link: 'https://github.com/aykuttasil' 
	},
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/aykuttasil/'
	},
	{
		platform: Platform.Twitter,
		link: 'https://twitter.com/aykuttasil'
	},
	{
		platform: Platform.Email,
		link: 'aykuttasil@gmail.com'
	},
	{
		platform: Platform.Youtube,
		link: 'https://www.youtube.com/kilavuzsuzrota'
	},
	{
		platform: Platform.Facebook,
		link: 'https://www.facebook.com/aykuttasil'
	},
	{
		platform: Platform.Instagram,
		link: 'https://www.instagram.com/kilavuzsuzrota'
	},
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
