//
function script5954(int0: component): void {
    var int1 = MIN((IF_GETTRANS(int0) + 10), 255);
    IF_SETTRANS(int1, int0);
    if ((int1 == 255)) {
        IF_SETONTIMER(callback(), comp(906, 21));
    };
    return;
}