import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { XiaohongshuService } from '../../xiaohongshu.service';
import { noteDetailDataModel, noteDetailModel, noteCommentDataModel, noteCommentModel } from '../../model'
import { OnsenModule, CUSTOM_ELEMENTS_SCHEMA } from 'ngx-onsenui';
@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss'],
  providers: [XiaohongshuService]
})
export class NoteItemComponent implements OnInit {
  private noteDetail: noteDetailModel;
  private noteContentArray: Array<string>;
  private noteComment: noteCommentModel;

  @ViewChild('carousel') carousel;

  constructor(private HTTP: XiaohongshuService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    let verify = {
      tag: /^\#/
    };

    //笔记
    this.HTTP.getNoteItem(id).then((result: noteDetailDataModel) => {
      this.noteDetail = result.data;
      console.log(this.noteDetail);
      this.noteContentArray = this.noteDetail.desc.split('\n');
      // this.noteContentArray.map(p => {
      // })
    });
    //评论
    this.HTTP.getNoteComment(id, "summary", 20).then((result: noteCommentDataModel) => {
      this.noteComment = result.data;
      console.log(this.noteComment);
    })
  }

  slideChanged(e) {
    console.log(e);
    console.log(e.carousel);
    console.log(e.activeIndex);
    console.log(e.srcElement.clientHeight);
  }

}
