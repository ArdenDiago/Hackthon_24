// Img
import Slider from "../Components/General/Slider";
import department from "../assets/img/logo/dep.png";
import logo from "../assets/img/logo/clg.png";
import other from "../assets/img/logo/other.png";

export const photosLinks = [
  // Top most part of the Page for Clg, dep, etc logo
  // Tag -> Parent Tag if not mentioned then undefined
  //TagStyle -> Parent tag style if not mentioned then undefined
  // link -> address website
  // style -> CSS class
  // content -> image photo
  // altText: -> different text for the image

  {
    key: 2,
    link: "#0",
    style: "user__icon logo-media",
    content: logo,
    altText: "College ID",
  },
];

export const navigationLinks = [
  // links
  {
    text: "Home",
    link: "#0",
  },
  {
    text: "Events",
    link: "#0",
  },
  {
    text: "Register",
    link: "#0",
  },
  {
    text: "Contact Us",
    link: "#0",
  },
];

// Hero Header
import logo1 from "../assets/img/Main/logo1.png";
import logo2 from "../assets/img/Main/logo2.png";

export const images = [
  // TAG1-> Parent Tag
  // style -> Parent Style
  // t1 -> Duration
  // t2 -> Delay
  // imgs -> photo
  // imgsData -> alt text
  //  imgsStyle=undefined -> style
  {
    style: "banner-two__shape-left d-none d-lg-block wow bounceInLeft",
    t1: "1s",
    t2: ".5s",
    imgs: logo1,
    imgData: "shape",
  },
  {
    style: "banner-two__shape-right d-none d-lg-block wow bounceInRight",
    t1: "1s",
    t2: ".1s",
    imgs: logo2,
    imgData: "shape",
    imgStyle: "sway_Y__animation",
  },
];

// Have to use useState in Main.jsx 
import bgHackthon from "../assets/img/PhoneMedia/Hackthon.jpeg"
import bgNFS from "../assets/img/PhoneMedia/NFS.jpeg";
import bgFreeFire from "../assets/img/PhoneMedia/FreeFire.jpeg";
import bgBGMI from "../assets/img/PhoneMedia/BGMI.jpeg";

export const sliderInfo = [
  {
    key: 1,
    parentCSS: "swiper-wrapper myMargin",
    backGround: bgHackthon,
    detailsLink: "#0",
    formLink: "#0",
    eventName: "Hackthon",
    text: "Join us for an exhilarating experience at our Intra Collegiate Techno Fest, presented by the Department of Computer Science! Explore cutting-edge innovations, showcase your talents, and network with like-minded individuals. Get ready for a day filled with coding challenges, project exhibitions, and inspiring tech talks. Don't miss out on this opportunity to dive into the world of technology!"
  },
  {
    key: 3,
    parentCSS: "swiper-wrapper myMargin",
    backGround: bgNFS,
    detailsLink: "#0",
    formLink: "#0",
    eventName: "Need For Speed",
  overlayer: 'back_color',
  text: "Gear up for high-speed thrills at our NFS tournament during the Intra-Collegiate Techno Fest! Compete, conquer, and emerge as the ultimate racing champion!"
  },
  {
    key: 4,
    parentCSS: "swiper-slide myMargin",
    backGround: bgFreeFire,
    detailsLink: "#0",
    formLink: "#0",
    eventName: "Free Fire",
    overlayer: 'back_color',
    text: "Prepare for intense battles in our Free Fire tournament at the Intra-Collegiate Techno Fest! Show off your skills, outlast the competition, and claim victory in the ultimate gaming showdown!"
  },
  {
    key: 5,
    parentCSS: "swiper-slide myMargin",
    backGround: bgBGMI,
    detailsLink: "#0",
    formLink: "#0",
    eventName: "BGMI",
  overlayer: 'back_color',
  text: "Enter the battlegrounds in our BGMI tournament at the Intra-Collegiate Techno Fest! Strategize, survive, and dominate to emerge as the last one standing in this epic gaming battle!"
  }
];

import o1 from "../assets/img/team/01.jpg";
import o2 from "../assets/img/team/02.jpg";
import o3 from "../assets/img/team/03.jpg";
import o4 from "../assets/img/team/04.jpg";
import o5 from "../assets/img/team/get-bg.png";
import o6 from "../assets/img/team/get-image.png";
import o7 from "../assets/img/team/get-image2.png";

// Co-ordinators
export const team = [
  {
    title: "HOD",
    name: "James R",
    image: o1,
  },
  {
    title: "HOD",
    name: "James R",
    image: o2,
  },
  {
    title: "HOD",
    name: "James R",
    image: o3,
  },
  {
    title: "HOD",
    name: "James R",
    image: o4,
  },
  {
    title: "HOD",
    name: "James R",
    image: o5,
  },
  {
    title: "HOD",
    name: "James R",
    image: o6,
  },
  {
    title: "HOD",
    name: "James R",
    image: o7,
  },
];

// Events List
import event1 from "../assets/img/EventsImges/IdeaPresentation.jpeg";
import event2 from "../assets/img/EventsImges/PosterSpoofing.jpeg";
import event3 from "../assets/img/EventsImges/NFS.jpeg";
import event5 from "../assets/img/EventsImges/BGMI.jpeg";
import event4 from "../assets/img/EventsImges/FreeFire.jpeg";


export const eventDataList = [
  {
    key: 1,
    image: event1,
    eventName: "Idea Presentation",
    typeOfEvent: "Mini-Auditorium",
    date: "19/04/20204",
  },
  {
    key: 2,
    image: event2,
    eventName: "Poster spoofing",
    typeOfEvent: "Class Room",
    date: "19/04/20204",
  },
  {
    key: 3,
    image: event3,
    eventName: "NFS",
    typeOfEvent: "Gaming",
    date: "19/04/20204",
  },
  {
    key: 4,
    image: event4,
    eventName: "Free fire",
    typeOfEvent: "Gaming",
    date: "19/04/20204",
  },
  {
    key: 5,
    image: event5,
    eventName: "BGMI",
    typeOfEvent: "Gaming",
    date: "19/04/20204",
  },
];

export const singleEvents = [
  {
    key: 1,
    eventName: "Poster spoofing",
    selected: 'PS'
  },
  {
    key: 2,
    eventName: "NFS",
  },
];

export const multiPlayerEvents = [
  {
    key: 3,
    eventName: "Idea Presentation",
  },
  {
    key: 4,
    eventName: "Free fire",
  },
  {
    key: 5,
    eventName: "BGMI",
  },
];

export const departmentsList = [
  {
    indexValue: 0,
    text: "Select You'r Class",
  },
  {
    indexValue: 1,
    text: "BCA 1",
  },
  {
    indexValue: 2,
    text: "BCA 2",
  },
  {
    indexValue: 3,
    text: "BCA 3",
  },
  {
    indexValue: 4,
    text: "BSC 1",
  },
  {
    indexValue: 5,
    text: "BSC 2",
  },
  {
    indexValue: 6,
    text: "BSC 3",
  },
];