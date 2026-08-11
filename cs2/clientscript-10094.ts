//
function script10094(int0: number): void {
    if ((int0 == 1)) {
        IF_SETONTIMER(callback(script10095, 255), comp(1515, 13));  // sb_overlay:border_blur
    } else {
        IF_SETONTIMER(callback(script10095, 0), comp(1515, 13));  // sb_overlay:border_blur
    };
    return;
}