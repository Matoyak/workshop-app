import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';

@Component({
	selector: 'wa-stat-filters',
	templateUrl: './stat-filters.component.html',
	styleUrls: ['./stat-filters.component.scss'],
})
export class StatFiltersComponent implements OnInit {
	// 	statFormGroup: FormGroup = this.fb.group({
	// 		name: ['Nathan', [Validators.required, Validators.minLength(2)]],
	// 		region: ['', Validators.required],
	// 	});

	// nameControl: FormControl = this.statFormGroup.get('name') as FormControl;

	nameFilterControl: FormControl = this.fb.control('');

	controlValue$: Observable<string>;

	@Output() filterChange = new EventEmitter<string>();

	constructor(private fb: FormBuilder) {
		this.controlValue$ = this.nameFilterControl.valueChanges.pipe(
			tap((nameValue) => console.log('Before', { nameValue })),
			debounceTime(300),
			tap((nameValue) => {
				this.filterChange.emit(nameValue);
			})
		);
	}

	ngOnInit(): void {}

	// handleFormSubmit(form: FormGroup): void {
	// 	if (this.statFormGroup.valid) {
	// 		console.log('Submit form!');
	// 	} else {
	// 		console.log('Invalid Form');
	// 	}
	// 	console.log('form: ', this.statFormGroup);
}
