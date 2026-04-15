//
function script12760(int0: int): void {
    var int1 = (int0 / 50);
    var int2 = (int1 / 60);
    int1 = MODULO(int1, 60);
    if ((int1 > 9)) {
        IF_SETTEXT(`${inttostring(int2, 10)}:${inttostring(int1, 10)}`, comp(1787, 18));
    } else {
        IF_SETTEXT(`${inttostring(int2, 10)}:0${inttostring(int1, 10)}`, comp(1787, 18));
    };
    if (((int2 == 0) && (int1 <= 5))) {
        if ((MODULO((int0 / 20), 2) > 0)) {
            IF_SETHIDE(true, comp(1787, 18));
        } else {
            IF_SETHIDE(false, comp(1787, 18));
        };
    };
    if ((--int0 <= 0)) {
        IF_SETONTIMER(callback(), comp(1787, 29));
    } else {
        IF_SETONTIMER(callback(script12760, int0), comp(1787, 29));
    };
    return;
}