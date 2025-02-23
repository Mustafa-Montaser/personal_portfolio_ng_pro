import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    pContent: string = `100% html5 bootstrap templates Made By <br><a href="https://colorlib.com/" target="_blank">Colorlib.com</a>`;
    contentStyle: string = "content d-flex align-items-center justify-content-center justify-content-md-start position-absolute";
    btnStyle: string = "text-uppercase py-0 px-3 fw-normal bg-transparent";
}
