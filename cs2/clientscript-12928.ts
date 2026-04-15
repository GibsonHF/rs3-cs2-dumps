//
function script12928(int0: int): void {
    var int1 = 8;
    var string0 = "Collapse";
    var string1 = "Expand";
    if ((int0 == 0)) {
        script14093(comp(662, 7), -1, 0, 1, 114, 0, int1, 2);
        script14093(comp(662, 2), -1, 0, 1, 114, 1, int1, 2);
        IF_SETVFLIP(0, 43384846);
        IF_SETONMOUSEREPEAT(callback(script8799, string0, 43384843, -1), 43384843);
        IF_SETOP(1, string0, 43384845);
        IF_SETPOSITION(0, 4, 1, 0, 43384843);
        IF_SETPOSITION(-80, 42, 1, 0, 43384847);
        IF_SETPOSITION(-40, 42, 1, 0, 43384848);
        IF_SETPOSITION(0, 42, 1, 0, 43384849);
        IF_SETPOSITION(40, 42, 1, 0, 43384850);
        IF_SETPOSITION(80, 42, 1, 0, 43384851);
        IF_SETPOSITION(-80, 78, 1, 0, 43384852);
        IF_SETPOSITION(-40, 78, 1, 0, 43384853);
        IF_SETPOSITION(0, 78, 1, 0, 43384854);
        IF_SETPOSITION(40, 78, 1, 0, 43384855);
        IF_SETPOSITION(80, 78, 1, 0, 43384862);
        IF_SETHIDE(0, 43384849);
        IF_SETHIDE(0, 43384852);
        IF_SETHIDE(0, 43384854);
        IF_SETHIDE(0, 43384855);
        IF_SETHIDE(0, 43384862);
        IF_SETHIDE(0, 43384851);
        IF_SETPOSITION(0, 8, 0, 0, 43384841);
        IF_SETPOSITION(0, 8, 2, 0, 43384840);
        IF_SETPOSITION(0, 13, 1, 0, 43384842);
        IF_SETSIZE(8192, 26, 2, 0, 43384841);
        IF_SETSIZE(8192, 26, 2, 0, 43384840);
    } else {
        script14093(comp(662, 7), -1, 0, 1, 64, 0, int1, 2);
        script14093(comp(662, 2), -1, 0, 1, 64, 1, int1, 2);
        IF_SETVFLIP(1, 43384846);
        IF_SETONMOUSEREPEAT(callback(script8799, string1, 43384843, -1), 43384843);
        IF_SETOP(1, string1, 43384845);
        IF_SETPOSITION(0, 8, 1, 0, 43384843);
        IF_SETPOSITION(-80, 8, 1, 0, 43384847);
        IF_SETPOSITION(-40, 8, 1, 0, 43384848);
        IF_SETPOSITION(40, 8, 1, 0, 43384850);
        IF_SETPOSITION(80, 8, 1, 0, 43384853);
        IF_SETHIDE(1, 43384849);
        IF_SETHIDE(1, 43384852);
        IF_SETHIDE(1, 43384854);
        IF_SETHIDE(1, 43384855);
        IF_SETHIDE(1, 43384862);
        IF_SETHIDE(1, 43384851);
        IF_SETPOSITION(0, 48, 0, 0, 43384841);
        IF_SETPOSITION(0, 48, 2, 0, 43384840);
        IF_SETPOSITION(0, 35, 1, 0, 43384842);
        IF_SETSIZE(8192, 8, 2, 0, 43384841);
        IF_SETSIZE(8192, 8, 2, 0, 43384840);
    };
    script11688();
    return;
}