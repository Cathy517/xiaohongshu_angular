import { Injectable } from '@angular/core';
import { Headers, URLSearchParams } from '@angular/http';
import axios from 'axios';


@Injectable()
export class XiaohongshuService {
  private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' })
  private profileUrl = "http://localhost:3002";
  constructor() { }
  //NoteList
  getNoteList(page_size,oid,page) {
    return new Promise((resolve, reject) => {
      axios.get(this.profileUrl + '/note_list', {
        params: {
          'page_size': page_size,
          'oid': oid,
          'page': page
        }
      })
        .then(response => {
          resolve(response.data)
        }).catch(err => {
          console.log(err);
        })
    })
  };

  //getNoteItem
  getNoteItem(id) {
    return new Promise((resolve, reject) => {
      axios.get(this.profileUrl + '/note_item/'+id)
        .then(response => {
          resolve(response.data)
        }).catch(err => {
          console.log(err);
        })
    })
  };

  //comment
  getNoteComment(id,type,page_size){
    return new Promise((resolve, reject) => {
      axios.get(this.profileUrl + '/note_comment/'+id,{
        params:{
          'type':type,
          'page_size':page_size
        }
      })
        .then(response => {
          resolve(response.data)
        }).catch(err => {
          console.log(err);
        })
    })
  }


}
