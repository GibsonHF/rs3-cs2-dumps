//
function script7575(): void {
    var int0 = IF_GETTRANS(10682369);
    if ((int0 >= 225)) {
        IF_SETTRANS(235, 10682369);
        IF_SETONTIMER(callback(), 10682370);
    } else {
        IF_SETTRANS(++int0, 10682369);
    };
    return;
}