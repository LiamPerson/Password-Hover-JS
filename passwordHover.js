/*
Javascript Password Hover
Description: Shows password field contents on hovering a small icon on the right
Made by Liam Pillay
Version 1.0
Creation: 2020, February 5th

Dependencies: jQuery
Optional: font-awesome-4.7
 */

// The vision icon if you want to change it
const VISION_ICON = '<div class="show-password-on-hover-icon-container" style="position: absolute;top: 25.5%;right: 15px;"><i class="fa fa-eye" aria-hidden="true" style="font-size: 1.6rem;color: rgba(0,0,0,.3);"></i></div>'; //FONT AWESOME 4.7 VERSION -- YOU NEED FONT-AWESOME 4.7 FOR THIS TO WORK
// const VISION_ICON = '<div class="show-password-on-hover-icon-container" style="position: absolute;top: 13.5%;right: 15px;"><i aria-hidden="true" style="font-size: 1.6rem;color: rgba(0,0,0,.3);">&#128065;</i></div>'; //Generic VERSION


$('html').find('.showPasswordOnHover[type="password"]').each(function (index) {
    // Get html of input
    // create new, identical input inside a div containing this new input
    // Create children to that new div that control the password
    let newHTML = '<div class="show-password-on-hover-container" style="position: relative;">' +
                      this.outerHTML +
                      VISION_ICON +
                  '</div>';

    $(this).replaceWith(newHTML);
});

$(document).ready(function () {
    $('body').find(".show-password-on-hover-icon-container").hover(function (e) {
        // Change input type and change icon color on enter
        $(this).siblings('input[type="password"]').attr("type", 'text');
        $(e.target).css('color', 'rgba(0,0,0,0.8)')
    }, function (e) {
        // Change input type and change icon color on exit
        $(this).siblings('input[type="text"]').attr("type", 'password');
        $(e.target).css('color', 'rgba(0,0,0,0.3)')
    });
});
