//  Select element function
const selectElement = (function(element) {
    return document.querySelector(element);
});

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
    header.classList.toggle('open');
});
// document.addEventListener('DOMContentLoaded', function () {
    
// })

 //document.addEventListener('DOMContentLoaded', function () {
//     var elements = document.querySelectorAll('nav-list');
//     var instances = M.List.init(elements, this.options);
//   });
// }

    


    
