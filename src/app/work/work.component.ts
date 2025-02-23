import { Component } from '@angular/core';

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss']
})
export class WorkComponent {
    workData: WorkData = {
        graphicDesign: {
            name: "Graphic Design",
            data: [
                {imgURL: "../../assets/images/img-1-C4nS0eD8.jpg", link: "", title: "graphic design", views: 100, loves: 50, shareLink: ""},
                {imgURL: "../../assets/images/img-2-D-4H1m4L.jpg", link: "", title: "graphic design", views: 100, loves: 50, shareLink: ""},
                {imgURL: "../../assets/images/img-3-pR2ZEVY9.jpg", link: "", title: "graphic design", views: 100, loves: 50, shareLink: ""},
                {imgURL: "../../assets/images/img-4-tHccITd-.jpg", link: "", title: "graphic design", views: 100, loves: 50, shareLink: ""},
                {imgURL: "../../assets/images/img-5-lAucr__a.jpg", link: "", title: "graphic design", views: 100, loves: 50, shareLink: ""},
                {imgURL: "../../assets/images/img-6-DFW03AZ3.jpg", link: "", title: "graphic design", views: 100, loves: 50, shareLink: ""},
            ]
        },
        apps: {
            name: "Apps",
            data: [
                {imgURL: "../../assets/images/img-6-DFW03AZ3.jpg", link: "", title: "Apps", views: 200, loves: 157, shareLink: ""},
                {imgURL: "../../assets/images/img-3-pR2ZEVY9.jpg", link: "", title: "Apps", views: 200, loves: 157, shareLink: ""},
                {imgURL: "../../assets/images/img-4-tHccITd-.jpg", link: "", title: "Apps", views: 200, loves: 157, shareLink: ""},
                {imgURL: "../../assets/images/img-2-D-4H1m4L.jpg", link: "", title: "Apps", views: 200, loves: 157, shareLink: ""},
                {imgURL: "../../assets/images/img-5-lAucr__a.jpg", link: "", title: "Apps", views: 200, loves: 157, shareLink: ""},
                {imgURL: "../../assets/images/img-1-C4nS0eD8.jpg", link: "", title: "Apps", views: 200, loves: 157, shareLink: ""},
            ]
        },
        software: {
            name: "Software",
            data: [
                {imgURL: "../../assets/images/img-3-pR2ZEVY9.jpg", link: "", title: "Software", views: 348, loves: 249, shareLink: ""},
                {imgURL: "../../assets/images/img-5-lAucr__a.jpg", link: "", title: "Software", views: 348, loves: 249, shareLink: ""},
                {imgURL: "../../assets/images/img-6-DFW03AZ3.jpg", link: "", title: "Software", views: 348, loves: 249, shareLink: ""},
                {imgURL: "../../assets/images/img-2-D-4H1m4L.jpg", link: "", title: "Software", views: 348, loves: 249, shareLink: ""},
                {imgURL: "../../assets/images/img-1-C4nS0eD8.jpg", link: "", title: "Software", views: 348, loves: 249, shareLink: ""},
                {imgURL: "../../assets/images/img-4-tHccITd-.jpg", link: "", title: "Software", views: 348, loves: 249, shareLink: ""},
            ]
        },
    };
    displayedItems: workDataItem[] = this.workData.apps.data;
    btnSelceted: number = 0;
    itemsDisplayedNum: number = 4;
};

interface workDataItem {
    imgURL: string;
    link: string;
    title: string;
    views: number;
    loves: number;
    shareLink: string;
};

interface WorkData {
    graphicDesign: { name: string, data: workDataItem[] };
    apps: { name: string, data: workDataItem[] };
    software: { name: string, data: workDataItem[] };
};
