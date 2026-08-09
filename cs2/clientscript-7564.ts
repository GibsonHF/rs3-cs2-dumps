//
function script7564(int0: number): void {
    var int1 = IF_GETTRANS(int0);
    if ((int1 < 250)) {
        int1 = (int1 + 5);
        IF_SETTRANS(int1, int0);
    } else {
        int1 = 255;
        IF_SETTRANS(int1, int0);
        IF_SETONTIMER(callback(), int0);
    };
    return;
}