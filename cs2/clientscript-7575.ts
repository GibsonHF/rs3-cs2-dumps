//
function script7575(): void {
    var int0 = IF_GETTRANS(comp(163, 1));
    if ((int0 >= 225)) {
        IF_SETTRANS(235, comp(163, 1));
        IF_SETONTIMER(callback(), comp(163, 2));
    } else {
        IF_SETTRANS(++int0, comp(163, 1));
    };
    return;
}