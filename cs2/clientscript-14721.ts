//
function script14721(int0: int, int1: int): void {
    var int2 = IF_GETTRANS(comp(1563, 0));
    if ((int2 == int0)) {
        IF_SETONTIMER(callback(), comp(1563, 0));
    } else if ((int2 < int0)) {
        IF_SETTRANS(MIN(int0, (int2 + int1)), comp(1563, 0));
    } else {
        IF_SETTRANS(MAX(int0, (int2 - int1)), comp(1563, 0));
    };
    return;
}