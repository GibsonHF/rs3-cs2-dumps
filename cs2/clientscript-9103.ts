//
function script9103(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number, int12: number, int13: number, int14: number, int15: number): void {
    var int16 = 0;
    while ((int16 < 31)) {
        CC_CREATE(int0, 4, int16);
        CC_SETSIZE(46, 20, 0, 0);
        CC_SETPOSITION(4, (int16 * 20), 0, 0);
        CC_SETTEXTFONT(69 as fontmetrics);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETTEXT(inttostring((int16 + 1), 10));
        CC_SETCOLOUR(16777215);
        CC_SETOP(1, "Select");
        CC_SETONOP(callback(script2316, int16, int15));
        CC_SETONMOUSEOVER(callback(script1356, -2147483645, -2147483643, 65280));
        CC_SETONMOUSELEAVE(callback(script1356, -2147483645, -2147483643, 16777215));
        int16 = (int16 + 1);
    };
    IF_SETSCROLLSIZE(0, (int16 * 20), int0);
    script31(int1, int0, 792, 789, 790, 791, 773, 788);
    int16 = 0;
    while ((int16 < 12)) {
        CC_CREATE(int5, 4, int16);
        CC_SETSIZE(158, 20, 0, 0);
        CC_SETPOSITION(4, (int16 * 20), 0, 0);
        CC_SETTEXTFONT(69 as fontmetrics);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETTEXT(enum_getvalue(0, 36, 950 as cs2enum, int16));
        CC_SETCOLOUR(16777215);
        CC_SETOP(1, "Select");
        CC_SETONOP(callback(script2334, int16, int15));
        CC_SETONMOUSEOVER(callback(script1356, -2147483645, -2147483643, 65280));
        CC_SETONMOUSELEAVE(callback(script1356, -2147483645, -2147483643, 16777215));
        int16 = (int16 + 1);
    };
    IF_SETSCROLLSIZE(0, (int16 * 20), int5);
    script31(int6, int5, 792, 789, 790, 791, 773, 788);
    IF_SETHIDE(true, int0);
    IF_SETHIDE(true, int2);
    IF_SETHIDE(true, int1);
    IF_SETHIDE(true, int5);
    IF_SETHIDE(true, int7);
    IF_SETHIDE(true, int6);
    IF_SETHIDE(true, int10);
    IF_SETHIDE(true, int11);
    IF_SETHIDE(true, int12);
    IF_SETHIDE(true, int3);
    IF_SETHIDE(true, int8);
    IF_SETHIDE(true, int13);
    IF_SETHIDE(false, int4);
    IF_SETHIDE(false, int9);
    IF_SETHIDE(false, int14);
    return;
}