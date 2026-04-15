//
function script9517(int0: component): void {
    var int1 = IF_GETTRANS(int0);
    if ((int1 > 0)) {
        int1 = MAX(0, (int1 - 10));
        IF_SETTRANS(int1, int0);
    } else {
        IF_SETONTIMER(callback(), int0);
    };
    return;
}