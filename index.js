// Write your code in this file!
function scuberGreetingForFeet(val) {
    if (val < 400) {
        return 'This one is on me!';
    }
    else if (val > 2500){
        return 'No can do.';
    }
    else {
        return 'I will gladly take your thirty bucks.';
    }   
}

function ternaryCheckCity(str) {
    if (str == 'NYC') {
        return 'Ok, sounds good.'
    }
    else {
        return 'No go.'
    }
}

function switchOnCharmFromTip(tip) {
    if (tip == 'generous'){
        return 'Thank you so much.';
    }
    else if (tip == 'not as generous' ) {
        return 'Thank you.';
    }
    else {
        return 'Bye.';
    }
}
