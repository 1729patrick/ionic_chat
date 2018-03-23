import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../providers/user/user.service';

@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html',
})
export class SignupPage {

    signupForm: FormGroup;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public formBuilder: FormBuilder,
        public userService: UserService
    ) {
        //validação do form signup
        this.signupForm = this.formBuilder.group({
        name: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
        username: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
        email: this.formBuilder.control('', [Validators.required, Validators.email]),
        password: this.formBuilder.control('', [Validators.required, Validators.minLength(3)])
    })
}

onSubmit(): void{
    this.userService.create(this.signupForm.value)
    .then(() =>{
        console.log('submit');
    });

}
}
