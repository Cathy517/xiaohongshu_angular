import { Component, OnInit } from '@angular/core';
import { XiaohongshuService } from '../xiaohongshu.service';
import { noteListModle,noteListDataModel } from '../model';
@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
  providers: [XiaohongshuService]
})
export class NoteListComponent implements OnInit {
  private noteItem:noteListModle[] = [];
  constructor(private HTTP: XiaohongshuService) {
  }

  ngOnInit() {
    let page_size=20;
    let oid='recommend';
    let page=1;
    this.getHttpre(page_size,oid,page);
    
  }

  // click(){
  //   let pagekkk = xxxx;
  //   this.getHttpre(page_size,oid,page);
  // }

  getHttpre(page_size,oid,page){
    this.HTTP.getNoteList(
      page_size,
      oid,
      page)
      .then((result: noteListDataModel) => {
          this.noteItem = result.data;
          console.log(this.noteItem);
      })
  }

}
