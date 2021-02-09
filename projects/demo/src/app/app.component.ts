import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor() {
  }
  settings = {
    type :'banner',
    onlineTitle:'Seems good',
    offlineTitle:'Connection error',
    onlineText:'Hurray! You are back online',
    offlineText:'Oops! Looks like you are offline',
  }
}