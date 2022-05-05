import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Announcements', url: '/announcement', icon: 'megaphone' },
    { title: 'Schedule', url: '/schedule', icon: 'calendar' },
    { title: 'Venues', url: '/venues', icon: 'map' },
    { title: 'Draw', url: '/draw', icon: 'chatbox' },
    { title: 'Result', url: '/result', icon: 'newspaper' },
    { title: 'Info', url: '/info', icon: 'alert' },
  ];

  constructor() { 
    
  }

  initializeApp() {
    /* To make sure we provide the fastest app loading experience
       for our users, hide the splash screen automatically
       when the app is ready to be used:

        https://capacitor.ionicframework.com/docs/apis/splash-screen#hiding-the-splash-screen
    */
    SplashScreen.hide();
  }
}
