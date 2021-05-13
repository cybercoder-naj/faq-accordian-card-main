const accordians = document.querySelectorAll<HTMLDivElement>(".accordian");

accordians.forEach(accordian => {
    accordian.addEventListener("click", function() {
        accordians.forEach(element => {
            element.classList.remove('active')
        })

        this.classList.add('active')
    })
})