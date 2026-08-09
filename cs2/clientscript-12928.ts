//
function script12928(int0: number): void {
    var int1 = 8;
    var string0 = "Collapse";
    var string1 = "Expand";
    if ((int0 == 0)) {
        script14093(43384839, -1, 0, 1, 114, 0, int1, 2);
        script14093(43384834, -1, 0, 1, 114, 1, int1, 2);
        IF_SETVFLIP(0, comp(662, 14));
        IF_SETONMOUSEREPEAT(callback(script8799, string0, 43384843, -1), comp(662, 11));
        IF_SETOP(1, string0, comp(662, 13));
        IF_SETPOSITION(0, 4, 1, 0, comp(662, 11));
        IF_SETPOSITION(-80, 42, 1, 0, comp(662, 15));
        IF_SETPOSITION(-40, 42, 1, 0, comp(662, 16));
        IF_SETPOSITION(0, 42, 1, 0, comp(662, 17));
        IF_SETPOSITION(40, 42, 1, 0, comp(662, 18));
        IF_SETPOSITION(80, 42, 1, 0, comp(662, 19));
        IF_SETPOSITION(-80, 78, 1, 0, comp(662, 20));
        IF_SETPOSITION(-40, 78, 1, 0, comp(662, 21));
        IF_SETPOSITION(0, 78, 1, 0, comp(662, 22));
        IF_SETPOSITION(40, 78, 1, 0, comp(662, 23));
        IF_SETPOSITION(80, 78, 1, 0, comp(662, 30));
        IF_SETHIDE(false, comp(662, 17));
        IF_SETHIDE(false, comp(662, 20));
        IF_SETHIDE(false, comp(662, 22));
        IF_SETHIDE(false, comp(662, 23));
        IF_SETHIDE(false, comp(662, 30));
        IF_SETHIDE(false, comp(662, 19));
        IF_SETPOSITION(0, 8, 0, 0, comp(662, 9));
        IF_SETPOSITION(0, 8, 2, 0, comp(662, 8));
        IF_SETPOSITION(0, 13, 1, 0, comp(662, 10));
        IF_SETSIZE(8192, 26, 2, 0, comp(662, 9));
        IF_SETSIZE(8192, 26, 2, 0, comp(662, 8));
    } else {
        script14093(43384839, -1, 0, 1, 64, 0, int1, 2);
        script14093(43384834, -1, 0, 1, 64, 1, int1, 2);
        IF_SETVFLIP(1, comp(662, 14));
        IF_SETONMOUSEREPEAT(callback(script8799, string1, 43384843, -1), comp(662, 11));
        IF_SETOP(1, string1, comp(662, 13));
        IF_SETPOSITION(0, 8, 1, 0, comp(662, 11));
        IF_SETPOSITION(-80, 8, 1, 0, comp(662, 15));
        IF_SETPOSITION(-40, 8, 1, 0, comp(662, 16));
        IF_SETPOSITION(40, 8, 1, 0, comp(662, 18));
        IF_SETPOSITION(80, 8, 1, 0, comp(662, 21));
        IF_SETHIDE(true, comp(662, 17));
        IF_SETHIDE(true, comp(662, 20));
        IF_SETHIDE(true, comp(662, 22));
        IF_SETHIDE(true, comp(662, 23));
        IF_SETHIDE(true, comp(662, 30));
        IF_SETHIDE(true, comp(662, 19));
        IF_SETPOSITION(0, 48, 0, 0, comp(662, 9));
        IF_SETPOSITION(0, 48, 2, 0, comp(662, 8));
        IF_SETPOSITION(0, 35, 1, 0, comp(662, 10));
        IF_SETSIZE(8192, 8, 2, 0, comp(662, 9));
        IF_SETSIZE(8192, 8, 2, 0, comp(662, 8));
    };
    script11688();
    return;
}