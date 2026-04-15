//
function script13423(): void {
    var int0 = comp(1873, 1);
    var int1 = IF_GETTRANS(int0);
    if ((int1 == 0)) {
        IF_SETONTIMER(callback(), int0);
    } else {
        IF_SETTRANS(MAX(0, (int1 - 2)), int0);
    };
    return;
}