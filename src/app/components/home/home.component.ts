import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public title = 'Save The Environment Project Media';
  public title2 = 'STEP Media';
  public description = 'Welcome to STEP Media, a website dedicated to bringing awareness to environmental issues and inspiring action towards creating a sustainable future for our planet.';
  public about = 'Our mission is to provide a platform for individuals and organizations to share their ideas and initiatives on environmental conservation and to foster a community of people who care about the environment.';
  public content1 = 'On our website, you will find a range of content, including articles, videos, and infographics that cover a variety of environmental topics such as climate change, pollution, conservation, and sustainability. We aim to educate and inform our audience on the latest developments in the environmental field and to provide practical tips and resources for living a more sustainable lifestyle.';
  public content2 = 'On our website, you will find a range of content, including articles, videos, and infographics that cover a variety of environmental topics such as climate change, pollution, conservation, and sustainability. We aim to educate and inform our audience on the latest developments in the environmental field and to provide practical tips and resources for living a more sustainable lifestyle.';
  public content3 = 'In addition to our content, we offer a range of resources for those who want to get involved in environmental activism. Whether you are looking for ways to reduce your carbon footprint, volunteer for a local environmental organization, or advocate for policy change, we have resources to help you get started.';
  public lastContent = 'Join us in our mission to save the environment and create a sustainable future for all. Together, we can make a difference.';
  public currentYear = new Date().getFullYear();
  ngOnInit() {
    AOS.init({
      duration: 2000,
    });
  }
}
