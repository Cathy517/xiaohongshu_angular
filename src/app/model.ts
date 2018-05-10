//用户
export class userModel {
    id: string;
    image: string;
    nickname: string;
    banner_image: string;
    official_verified: false;
    level: levelModel;
    desc: string;
    fans: number;
    follows: number;
    gender: number;
    liked: number;
    location: string;
    notes: number;
    boards: number;
}
interface levelModel {
    image: string;
    name: string
}

//笔记列表
export class noteListDataModel {
    data: noteListModle[] = [];
    success: boolean = false;
    errorMsg: object = null;
}
export class noteListModle {
    img: string;
    title: string;
    desc: string;
    type: string;
    user: userModel[];
}

//笔记详情
export class noteDetailDataModel {
    data: noteDetailModel=null;
    success: boolean = false;
    errorMsg: object = null
}
export class noteDetailModel {
    id: string;
    desc: string;
    collects: number;
    comments: number;
    geo: string;
    hash_tags: HashTagModel[] = [];
    image_tag: ImgTagModel[] = [];
    images: Array<string>;
    likes: number;
    time: string;
    title: string;
    type:string;
    user: userModel;
}
interface HashTagModel {
    id: string;
    link: string;
    name: string;
    type: string
}
interface ImgTagModel {
}

//笔记评论
export class noteCommentDataModel{
    data:noteCommentModel=null;
    success:boolean=false;
    errorMsg:object=null;
}
export class noteCommentModel{
    comments:commentArrayModle[];
    comments_total:number;
    page_size:number;
    target_note:noteDetailModel[];
    total:number;
}
export interface commentArrayModle{
    content:string;
    hash_tags:HashTagModel[];
    id:string;
    likes:number;
    sub_comments:subCommentArrayModle[];
    sub_comments_total:number;
    time:string;
    user:userModel;
}
export interface subCommentArrayModle{
    content:string;
    hash_tags:HashTagModel[];
    id:string;
    likes:number;
    target_comment:targetCommentModel;
    time:string;
    user:userModel;//作者
}
export interface targetCommentModel{//楼主
    id:string;
    user:userModel;
}
