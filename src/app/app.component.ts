import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CaseGeneratorService } from './services/CaseGeneratorService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'request-test';

  private exampleValue = 
`{
  "numberFieldName": ["number", isRequired, min, max],
  "stringFieldName": ["string", isRequired],
  "booleanFieldName": ["boolean", isRequired],
  "dateFieldName": ["date", isRequired, "format"],
  "enumFieldName": ["enum", isRequired, ["option1", "option2", "option3"]]
}`;

  testForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _caseGenerator: CaseGeneratorService) {}

  ngOnInit(): void {
    this.testForm = this._formBuilder.group({
      uri: '',
      method: '',
      requestBody: this.exampleValue
    });
  }


  run() {
    this._caseGenerator.generate(this.testForm.value);
  }
}
