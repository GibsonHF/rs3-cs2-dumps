//
function script12257(int0: component): void {
    var int1 = IF_GETTRANS(int0);
    if ((int1 < 255)) {
        IF_SETTRANS(MIN(255, (int1 + 6)), int0);
    } else {
        IF_SETHIDE(false, comp(1724, 8));
        IF_SETONTIMER(callback(script12255, 112984072), comp(1724, 8));
        IF_SETHIDE(1, 112984071);
    };
    return;
}