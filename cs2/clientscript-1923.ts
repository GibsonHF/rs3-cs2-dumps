//
function script1923(): void {
    var int0 = varclient_550;
    var int1 = varclient_554;
    var int2 = varclient_555;
    var int3 = 0;
    if ((int0 == 0)) {
        int1 = MAX(0, MIN((5 - int1), 5));
        int2 = MAX(0, MIN((5 - int2), 5));
        IF_SETTEXT(inttostring(int1, 10), 52690958);
        IF_SETTEXT(inttostring(int2, 10), 52690957);
        IF_SETHIDE(0, 52690947);
        IF_SETHIDE(1, 52690946);
    } else {
        IF_SETHIDE(1, 52690947);
        if ((MODULO(int0, 100) != 0)) {
            int3 = 1;
        };
        int0 = (((int0 * 60) / 100) / 60);
        if ((int3 == 1)) {
            int0 = (int0 + 1);
        };
        IF_SETTEXT(`Game start : ${inttostring(int0, 10)} mins`, 52690946);
        IF_SETHIDE(0, 52690946);
    };
    return;
}