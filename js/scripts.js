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

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://gorest.co.in/public-api/users?_format=json&access-token=-34ReKlppEw1MZRMAgqVd6lCpexuwljAnD_A');   

    xhr.responseType = 'json';


    xhr.onreadystatechange = function() {
        if (xhr.readyState !=4) return;

        if (xhr.status != 200) {
        console.log( xhr.status + ': ' + xhr.statusText ); 
      } else {
        let people = xhr.response.result;
        let target = document.getElementById('juryUsers');
      
            let i=0;
            while (i <3) {
        // for (let i = 0; i < 3; i++) {
            let person = people[i];
        }

            if (person.status == 'active') {

                let html = document.createElement('div');
                html.classList.add('user');
                html.classList.add('user--round');


                html.innerHTML = `
                <div class="user__wrap"><img class="user__img" src="https://picsum.photos/seed/picsum/200/300" alt="${person.first_name} ${person.last_name}"></div>
                <div class="user__name">${person.first_name} ${person.last_name}</div>
                <div class="user__position">${person.address}</div>
                `;

                target.append(html);
            }
    }
    }

      xhr.send();