import { Environment } from '@random/environment';

export const url = 'https://someurl/somepath';
export const apiEndPoint = '/api/otherpath';

export const environment: Environment = {
	production: false,
	name: 'First sef',
	mainColor: '#d2a3a9',
	apiUrl: 'http://inside-app',
	projectApiUrl: url + apiEndPoint + '/micro',
};
