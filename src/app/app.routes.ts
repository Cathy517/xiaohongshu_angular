import { Routes } from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import { NoteListComponent } from './note-list/note-list.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { AttentionComponent } from './attention/attention.component';
import { NoteItemComponent } from './note-list/note-item/note-item.component'
export const rootRouterConfig: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'attention', component: AttentionComponent },
    { path: 'found', component: NoteListComponent },
    { path: 'purchase', component: PurchaseComponent },
    { path: 'item/:id', component: NoteItemComponent }
];
