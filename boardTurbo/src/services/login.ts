// loginService.ts

import axios from 'axios';
import { environment } from '@/environments/environment';

export function loginServices(dataLogin: any) {
    const headers = { 'Content-Type': 'application/json','accept': 'application/json' };
    const url = `${environment.apiUrl}authorize`;

    return new Promise((resolve, reject) => {
        axios.post(url, dataLogin, {
            headers: headers,
        })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
}
