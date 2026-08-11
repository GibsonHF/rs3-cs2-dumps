//
function script2854(int0: number): void {
    var int1 = IF_GETTRANS(comp(1563, 0));  // border_overlay:border_blur
    if ((int1 == int0)) {
        IF_SETONTIMER(callback(), comp(1563, 0));  // border_overlay:border_blur
    } else if ((int1 < int0)) {
        IF_SETTRANS((int1 + 1), comp(1563, 0));  // border_overlay:border_blur
    } else {
        IF_SETTRANS((int1 - 1), comp(1563, 0));  // border_overlay:border_blur
    };
    return;
}