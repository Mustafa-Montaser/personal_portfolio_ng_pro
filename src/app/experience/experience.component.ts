import { Component } from '@angular/core';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
    experience: Job[] = [
        {
            jobTitle: "Full Stack Developer",
            dateFrom: "2017", dateTo: "2018",
            brief: "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may."
        }, {
            jobTitle: "Front End Developer at Google Company",
            dateFrom: "2016", dateTo: "2017",
            brief: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
        }, {
            jobTitle: "System Analyst",
            dateFrom: "2015", dateTo: "2016",
            brief: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
        },
    ];
}

interface Job {
    jobTitle: string;
    dateFrom: string,
    dateTo: string,
    brief: string;
};
