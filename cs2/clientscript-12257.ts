//
function script12257(int0: number): void {
    var int1 = IF_GETTRANS(int0);
    if ((int1 < 255)) {
        IF_SETTRANS(MIN(255, (int1 + 6)), int0);
    } else {
        IF_SETHIDE(0, 112984072);
        IF_SETONTIMER(callback(script12255, 112984072), 112984072);
        IF_SETHIDE(1, 112984071);
    };
    return;
}