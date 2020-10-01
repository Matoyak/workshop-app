import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'wa-stat-filters',
	templateUrl: './stat-filters.component.html',
	styleUrls: ['./stat-filters.component.scss'],
})
export class StatFiltersComponent implements OnInit {
	statFormGroup: FormGroup = this.fb.group({
		name: ['Nathan', [Validators.required, Validators.minLength(2)]],
		region: ['', Validators.required],
	});

	constructor(fb: FormBuilder) {}

	ngOnInit(): void {}

	handleFormSubmit(form: FormGroup): void {
		if (this.statFormGroup.valid) {
			console.log('Submit form!');
		} else {
			console.log('Invalid Form');
		}
		console.log('form: ', this.statFormGroup);
	}
}
