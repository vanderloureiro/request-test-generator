import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CaseGeneratorService {

    public generate(form) {
        console.log(form);
        const json = JSON.parse(form.requestBody);
    
        console.log('======== json ==========');
        console.log(json);
    }
}