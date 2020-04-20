var homePage = document.getElementsByClassName('home-about');
homePage = homePage[0];
var resumePage = document.getElementsByClassName('Resume');
resumePage = resumePage[0];
var projectsPage = document.getElementsByClassName('Projects');
projectsPage = projectsPage[0];

var homeNav = document.getElementById("homeNav");
var resumeNav = document.getElementById('resumeNav');
var projectsNav = document.getElementById('projectsNav');
var contactNav = document.getElementById('contactNav');
var navigation = [homeNav, resumeNav, projectsNav, contactNav];

// Home function
function goHome(){
  // Display of the Home section
  resumePage.style.display="none";
  projectsPage.style.display="none";
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
function goResume() {
  // Display of the Resume section
  homePage.style.display="none";
  resumePage.style.display="grid";
  projectsPage.style.display="none";

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
function goProjects(){
  homePage.style.display="none";
  resumePage.style.display="none";
  projectsPage.style.display="grid";

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
function goContact(){

}
