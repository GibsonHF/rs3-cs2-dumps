//
function script14721(int0: number, int1: number): void {
    var int2 = IF_GETTRANS(comp(1563, 0));  // border_overlay:border_blur
    if ((int2 == int0)) {
        IF_SETONTIMER(callback(), comp(1563, 0));  // border_overlay:border_blur
    } else if ((int2 < int0)) {
        IF_SETTRANS(MIN(int0, (int2 + int1)), comp(1563, 0));  // border_overlay:border_blur
    } else {
        IF_SETTRANS(MAX(int0, (int2 - int1)), comp(1563, 0));  // border_overlay:border_blur
    };
    return;
}