//
function script2001(int0: number): void {
    var int1 = script2119();
    var int2 = 0;
    CC_DELETEALL(17498188);
    IF_SETSIZE((20 + (110 * int1)), 0, 0, 1, 17498188);
    IF_SETSCROLLSIZE((20 + (110 * int1)), 0, 17498187);
    IF_SETHIDE(0, 17498189);
    script1706(17498189, 17498187, IF_GETSCROLLX(17498187));
    if (((int1 == 0) || (int0 == 0))) {
        IF_SETTEXT("You have no more rewards to claim at the minute. Gain more quest points to unlock further rewards.", 17498190);
        IF_SETHIDE(1, 17498189);
        script13971(17498193, 17498194, 28553, "Claim now", 1);
    } else {
        int2 = script2116();
        script2118(int2);
        if ((int1 < 3)) {
            IF_SETHIDE(1, 17498189);
        };
        if ((int0 == -1)) {
            IF_SETTEXT("Not enough inventory space", 17498191);
        };
    };
    return;
}