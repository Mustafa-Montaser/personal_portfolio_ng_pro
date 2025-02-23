import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-side-navbar',
    templateUrl: './side-navbar.component.html',
    styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent {
    navTabs: string[] = ["home", "about", "skills", "experience", "work"];
    brScreen: number = 992;
    IsBarsBtnActive: boolean = getScreenWidth() >= this.brScreen ? false : true;
    IsNavbarActive: boolean = getScreenWidth() >= this.brScreen ? true : false;
    navBtnSelected: number = 0;
    
    handleNavItemClk = () => {
        if(getScreenWidth() <= this.brScreen) {
            this.IsNavbarActive = false; 
            this.IsBarsBtnActive = true;
        } else {
            // do nothing
        }
    }
}

function getScreenWidth() : number {
    return screen.width;
}