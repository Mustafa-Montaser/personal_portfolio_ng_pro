import { Component } from '@angular/core';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
    progressValues = {
        photoshop: "75%",
        htmls: "85%",
        wordPress: "70%",
        jQuery: "60%",
        css3: "90%",
        seo: "80%"
    };
}
