import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../../models/user.model';

/*
Generated class for the UserProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class UserService {

  constructor(
    public http: HttpClient,
    public angularFireDatabase: AngularFireDatabase,) {
    }

    create(user : User): Promise<void>{
      return this.angularFireDatabase.object(`./users`)
      .set(user);
    }

  }
