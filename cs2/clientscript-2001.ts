//
function script2001(int0: unknown_int): void {
    var int1 = script2119();
    var int2 = 0;
    CC_DELETEALL(comp(267, 76));
    IF_SETSIZE((20 + (110 * int1)), 0, 0, 1, comp(267, 76));
    IF_SETSCROLLSIZE((20 + (110 * int1)), 0, comp(267, 75));
    IF_SETHIDE(false, comp(267, 77));
    script1706(comp(267, 77), comp(267, 75), IF_GETSCROLLX(comp(267, 75)));
    if (((int1 == 0) || (int0 == 0))) {
        IF_SETTEXT("You have no more rewards to claim at the minute. Gain more quest points to unlock further rewards.", comp(267, 78));
        IF_SETHIDE(true, comp(267, 77));
        script13971(comp(267, 81), comp(267, 82), 28553 as struct, "Claim now", true);
    } else {
        int2 = script2116();
        script2118(int2);
        if ((int1 < 3)) {
            IF_SETHIDE(true, comp(267, 77));
        };
        if ((int0 == -1)) {
            IF_SETTEXT("Not enough inventory space", comp(267, 79));
        };
    };
    return;
}