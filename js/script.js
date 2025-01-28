let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')
window.onscroll = () =>{
    sections.forEach(sec =>{
        let top =  window.scrollY;
        let offset =  sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >=offset &&top <offset + height) {
          navLinks.forEach(Links => {
            Links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add  ('active');
          });
        }
    });
  };


  window.onload=function(){
   document.getElementById("name").value="";
   document.getElementById("phone No").value="";
   document.getElementById("email").value="";
   document.getElementById("message").value="";

  }




// progress-percentage



//   window.onload = function() {
//     // Set the width of each progress bar based on the percentage
//     const skills = [
//         { element: '.typing-progress', percent: 50 },
//         { element: '.english-progress', percent: 50 },
//         { element: '.life-skills-progress', percent: 50 },
//         { element: '.html-progress', percent: 50 },
//         { element: '.css-progress', percent: 50 },
//         { element: '.js-progress', percent: 50 },
//         { element: '.mysql-progress', percent: 50 },
//         { element: '.python-progress', percent: 50 }
//     ];

//     // Loop through each skill and set the progress width
//     skills.forEach(skill => {
//         const progressBar = document.querySelector(skill.element);
//         progressBar.style.width = skill.percent + '%';
//     });
// };