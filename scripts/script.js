let homePage = document.getElementsByClassName('home-about')[0];
let resumePage = document.getElementsByClassName('Resume')[0];
let projectsPage = document.getElementsByClassName('Projects')[0];
let contactPage = document.getElementsByClassName('Contact')[0];

let homeNav = document.getElementById("homeNav");
let resumeNav = document.getElementById('resumeNav');
let projectsNav = document.getElementById('projectsNav');
let contactNav = document.getElementById('contactNav');
let navigation = [homeNav, resumeNav, projectsNav, contactNav];

// Home function
let goHome =() => {
  // Display of the Home section
  resumePage.style.display="none";
  projectsPage.style.display="none";
  contactPage.style.display="none"
  homePage.style.display="inherit";

  // Change color of the Nav button
  navigation[0].style.fontWeight="600";
  navigation[0].style.color="#094553";

  for(i = 1; i < 4; i++){
      navigation[i].style.color="#434141";
      navigation[i].style.fontWeight="400"
    }
}

// Resume function
let goResume = () => {
  // Display of the Resume section
  contactPage.style.display = "none";
  homePage.style.display="none";
  projectsPage.style.display = "none";
  resumePage.style.display="flex";

  // Change color of the Nav button
  navigation[1].style.fontWeight="600";
  navigation[1].style.color="#094553";

  for(i = 0; i < 4; i++)
  {
      if(i != 1){
        navigation[i].style.color="#434141";
        navigation[i].style.fontWeight="400";
      }
  }
}

// Projects function
let goProjects = () => {
  homePage.style.display="none";
  resumePage.style.display="none";
  projectsPage.style.display="flex";
  contactPage.style.display="none";

  // Change color of the Nav button
  navigation[2].style.fontWeight="600";
  navigation[2].style.color="#094553";

  for(i = 0; i < 4; i++)
  {
      if(i != 2){
        navigation[i].style.color="#434141";
        navigation[i].style.fontWeight="400";
      }
  }
}

// Contact function
let goContact = () => {
  homePage.style.display = "none";
  resumePage.style.display = "none";
  projectsPage.style.display = "none";
  contactPage.style.display = "inherit";

  // Change color of the Nav button
  navigation[3].style.fontWeight = "600";
  navigation[3].style.color = "#094553";

  for (i = 0; i < 3; i++) {
    navigation[i].style.color = "#434141";
    navigation[i].style.fontWeight = "400";
  }
}