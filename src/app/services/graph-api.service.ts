import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class GraphApiService {

  user_mutaion = gql`mutation{
    createUser(name:$name,email:"test@test.com",password:"12345",phone:"1234",address:"123"){
      id
      name
      email
    }
  }`

  constructor(private apollo: Apollo) { 

  }

  createUser = (name)=> {
   return this.apollo.mutate({
     mutation:this.user_mutaion,
     variables:{
      name:name
     }
   })
  }
}
