import { Component, OnInit } from '@angular/core';
import { GraphApiService } from '../../services/graph-api.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['../shop-creation/shop-creation.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private graphApiService:GraphApiService) { }

  ngOnInit() {
  }

  login=()=> {
    this.graphApiService.createUser('Ajay').subscribe( data => {
      console.log(data)
    }, err => {
      console.log(err)
    })
  }

}
