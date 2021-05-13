"use strict";
const accordians = document.querySelectorAll(".accordian");
accordians.forEach(accordian => {
    accordian.addEventListener("click", function () {
        if (this.classList.contains('active')) {
            this.classList.remove('active')
            return
        }
        
        accordians.forEach(element => {
            element.classList.remove('active')
        });
        this.classList.add('active')
    });
});
