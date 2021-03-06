import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentsPopupComponent} from './comments-popup/comments-popup.component';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {MdButtonModule, MdDialogModule, MdIconModule, MdInputModule, MdListModule, MdTooltipModule} from '@angular/material';
import {CoreModule} from '../core/core.module';
import {PipesModule} from '../pipe/pipes.module';
import {CommentsButtonComponent} from './comments-button/comments-button.component';
import {CommentsService} from './comments.service';
import { CommentRowComponent } from './comment-row/comment-row.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        AngularFireDatabaseModule,
        MdDialogModule,
        CoreModule,
        PipesModule,
        MdIconModule,
        MdButtonModule,
        MdInputModule,
        MdTooltipModule,
        TranslateModule,
        MdListModule,
        ReactiveFormsModule,
    ],
    declarations: [
        CommentsPopupComponent,
        CommentsButtonComponent,
        CommentRowComponent,
    ],
    exports: [
        CommentsPopupComponent,
        CommentsButtonComponent,
    ],
    providers: [
        CommentsService,
    ],
    entryComponents: [
        CommentsPopupComponent,
    ]
})
export class CommentsModule {
}
