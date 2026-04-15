//
function script17222(int0: component, int1: int, int2: unknown_int, int3: component, int4: component): void {
    if ((int2 == -1)) {
        IF_SETSCROLLPOS(0, MAX(0, (IF_GETSCROLLY(int0) - int1)), int0);
    } else {
        IF_SETSCROLLPOS(0, MIN(IF_GETSCROLLHEIGHT(int0), (IF_GETSCROLLY(int0) + int1)), int0);
    };
    var int5 = ((IF_GETSCROLLY(int0) / MAX(1, int1)) * 2);
    IF_SETTEXT(inttostring((1 + int5), 10), int3);
    IF_SETTEXT(inttostring((2 + int5), 10), int4);
    if ((int5 == 0)) {
        IF_SETHIDE(true, comp(1030, 20));
    } else {
        IF_SETHIDE(false, comp(1030, 20));
    };
    if ((((int5 > 0) && (int1 > 0)) && (int1 == (IF_GETSCROLLHEIGHT(int0) - IF_GETSCROLLY(int0))))) {
        IF_SETHIDE(true, comp(1030, 21));
    } else {
        IF_SETHIDE(false, comp(1030, 21));
    };
    return;
}