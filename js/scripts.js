$(document).ready(function() {

    $('.form-contact__input').on('change', function() {
        if ($(this).val().length > 0) {
            $(this).addClass('filled');
        }
    })

    $('.slider').slick({
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 1000,
        fade: true
    });

    
    
})
    // let inputs = document.querySelectorAll('.form-contact__input');
    //     inputs.forEach(function(input) {
    //         input.addEventListener('change', function() {
    //             console.log(this.value);
    //             if (this.value.length > 0) {
    //                 this.classList.add('filled');
    //             }
    //         })
    // });