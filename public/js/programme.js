// const sectionProgramme = document.querySelector('section.programme');
// const backgroundProgramme = sectionProgramme.querySelector('.background');

// window.addEventListener('scroll', function() {
//     const marginTop = (window.getComputedStyle(sectionProgramme).marginTop).replace('px', '');
//     if(sectionProgramme.getBoundingClientRect().top <= marginTop) {
//         if((sectionProgramme.offsetTop + sectionProgramme.clientHeight - backgroundProgramme.clientHeight + parseInt(marginTop)) < window.scrollY) {
//             sectionProgramme.querySelector('.background').classList.remove('fixed');
//             sectionProgramme.querySelector('.background').classList.add('bottom');
//         }
//         else {
//             sectionProgramme.querySelector('.background').classList.add('fixed');
//             sectionProgramme.querySelector('.background').classList.remove('bottom');
//         }
//     }
//     else {
//         sectionProgramme.querySelector('.background').classList.remove('fixed');
//         sectionProgramme.querySelector('.background').classList.remove('bottom');
//     }
// });