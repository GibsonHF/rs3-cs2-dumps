//
function script1923(): void {
    var int0 = varclient_550;
    var int1 = varclient_554;
    var int2 = varclient_555;
    var int3 = 0;
    if ((int0 == 0)) {
        int1 = MAX(0, MIN((5 - int1), 5));
        int2 = MAX(0, MIN((5 - int2), 5));
        IF_SETTEXT(inttostring(int1, 10), comp(804, 14));
        IF_SETTEXT(inttostring(int2, 10), comp(804, 13));
        IF_SETHIDE(false, comp(804, 3));
        IF_SETHIDE(true, comp(804, 2));
    } else {
        IF_SETHIDE(true, comp(804, 3));
        if ((MODULO(int0, 100) != 0)) {
            int3 = 1;
        };
        int0 = (((int0 * 60) / 100) / 60);
        if ((int3 == 1)) {
            int0 = (int0 + 1);
        };
        IF_SETTEXT(`Game start : ${inttostring(int0, 10)} mins`, comp(804, 2));
        IF_SETHIDE(false, comp(804, 2));
    };
    return;
}