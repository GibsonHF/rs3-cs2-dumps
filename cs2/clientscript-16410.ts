//
function script16410(): void {
    var int0 = IF_GETTRANS(comp(955, 19));  // uitutorial:flashy_icon
    if ((int0 == 255)) {
        IF_SETONTIMER(callback(), comp(955, 6));  // uitutorial:main_container
    } else {
        script16416(MIN((int0 + 10), 255));
    };
    return;
}