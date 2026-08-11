//
function script7575(): void {
    var int0 = IF_GETTRANS(comp(163, 1));  // tsd_sliske_entrance:black
    if ((int0 >= 225)) {
        IF_SETTRANS(235, comp(163, 1));  // tsd_sliske_entrance:black
        IF_SETONTIMER(callback(), comp(163, 2));  // tsd_sliske_entrance:base
    } else {
        int0 = (int0 + 8);
        IF_SETTRANS(int0, comp(163, 1));  // tsd_sliske_entrance:black
    };
    return;
}