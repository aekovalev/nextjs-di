import { injectable } from 'inversify';

const API_BASE_URL = 'http://jsonplaceholder.typicode.com';

@injectable()
export default class ApiAdapter {
    async request<T>(url: string, method = 'GET'): Promise<T> {
        try {
            const endpoint = `${API_BASE_URL}${url}`

            const response = await fetch(endpoint, { method });

            const json = await response.json();

            return json;
        } catch (e) {
            return Promise.reject(e)
        }
    }
}