const accordians = document.querySelectorAll<HTMLDivElement>(".accordian");

accordians.forEach((accordian: HTMLDivElement) => {
    accordian.addEventListener("click", function() {
        if (this.classList.contains('active')) {
            this.classList.remove('active')
            return
        }
        
        accordians.forEach((element: HTMLDivElement) => {
            element.classList.remove('active')
        })
        this.classList.add('active')
    })
})