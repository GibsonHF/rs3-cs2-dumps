//
function script14814(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if ((int2 == -1)) {
        IF_SETSCROLLPOS(0, MAX(0, (IF_GETSCROLLY(int0) - int1)), int0);
    } else {
        IF_SETSCROLLPOS(0, MIN(IF_GETSCROLLHEIGHT(int0), (IF_GETSCROLLY(int0) + int1)), int0);
    };
    var int5 = (IF_GETSCROLLY(int0) / MAX(1, int1));
    IF_SETTEXT(inttostring((1 + (2 * int5)), 10), int3);
    IF_SETTEXT(inttostring((2 + (2 * int5)), 10), int4);
    return;
}