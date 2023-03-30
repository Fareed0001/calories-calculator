//CAROUSEL JS 
const sliderMe = () => {
    let currentPosition = 0,
        sliderItem = $('.slider-item'),
        sliderItemWidth = sliderItem.css('flex-basis').match(/\d+\.?\d+/g),
        sliderInner = $('.slider-inner'),
        control = {
            next: $('#next'),
            slideNext() {
                currentPosition += parseFloat(sliderItemWidth);
                if (currentPosition > limitPosition) {
                    currentPosition = 0;
                }
                sliderInner.css('right', currentPosition + '%');
            }
        },
        limitPosition = sliderItemWidth * (sliderItem.length - Math.floor(100 / sliderItemWidth));

    control.next.on('click', control.slideNext)

    $(window).on("resize", function () {
        currentPosition = 0;
        $('.slider-inner').css('right', currentPosition + '%');
    })
}
sliderMe();
$(window).on("resize", sliderMe)
//CAROUSEL JS END

// TODAY'S DATE
let today = new Date();
let options = {
    week: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
}
let day = today.toLocaleString("en-US", options);
$("#todays-date").html(day);
// TODAY'S DATE END


//LEARN MORE 
$(".learn-more-div, .back-to-dashboard, .back-to-details").slideUp();
$(".first-container-text").click(function () {
    $(".first-container-row, .second-container-div").slideUp("slow");
    $(".learn-more-div, .back-to-dashboard").slideDown("slow");
});
// LEARN MORE END


// FRUITS AND VEGETABLES 
$(".fruit-and-veg-div, .fruit-and-veg-text1, .fruit-and-veg-text2").slideUp();
$(".more-food").click(function () {
    $(".fruit-and-veg-div, .back-to-dashboard").slideDown("slow");
    $(".first-container-row, .second-container-div").slideUp("slow");

    $(".fruit-and-veg-col1").hover(function () {
        $(".fruit-and-veg-img1").slideUp("slow");
        $(".fruit-and-veg-text1").slideDown("slow");
    });
    $(".fruit-and-veg-img1").slideDown("slow");
    $(".fruit-and-veg-text1").slideUp("slow");

    $(".fruit-and-veg-col2").hover(function () {
        $(".fruit-and-veg-img2").slideUp("slow");
        $(".fruit-and-veg-text2").slideDown("slow");
    });
    $(".fruit-and-veg-img2").slideDown();
    $(".fruit-and-veg-text2").slideUp();
});
// FRUITS AND VEGETABLES END 


// RAW FRUITS DETAILS
$(".raw-fruits").slideUp();
$(".fruit-and-veg-col1").click(function () {
    $(".fruit-and-veg-div").slideUp("slow");
    $(".raw-fruits, .back-to-details").slideDown("slow");
});
// RAW FRUITS DETAILS


// RAW VEGETABLES DETAILS
$(".raw-vegetables").slideUp();
$(".fruit-and-veg-col2").click(function () {
    $(".fruit-and-veg-div").slideUp("slow");
    $(".raw-vegetables, .back-to-details").slideDown("slow");
});
// RAW VEGETABLES DETAILS


//BACK TO DETAILS BUTTON
$(".back-to-details").click(function () {
    $(".raw-vegetables, .raw-fruits, .back-to-details").slideUp("slow");
    $(".fruit-and-veg-div").slideDown("slow");
});
//BACK TO DETAILS BUTTON


//BACK TO DASHBOARD BUTTON
$(".back-to-dashboard").click(function () {
    $(".first-container-row, .second-container-div").slideDown("slow");
    $(".learn-more-div, .back-to-dashboard, .fruit-and-veg-div, .raw-fruits, .raw-vegetables").slideUp("slow");
});
//BACK TO DASHBOARD BUTTON

if (window.matchMedia("(max-width: 992px)").matches) {
    //LEARN MORE 
    $(".first-container-text, .more-food").click(function () {
        $(".second-col-header, .today-container, .todays-meals").slideUp("slow");
    });
    // LEARN MORE END

    // FRUITS AND VEGETABLES 
    // $(".more-food").click(function () {
        
    // });
    // FRUITS AND VEGETABLES END 






    //BACK TO DASHBOARD BUTTON
    $(".back-to-dashboard").click(function () {
        $(".second-col-header, .today-container, .todays-meals").slideDown("slow");
        $(".back-to-details").slideUp("slow");
    });
    //BACK TO DASHBOARD BUTTON
}
