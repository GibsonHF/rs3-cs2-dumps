//
function script9103(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component, int6: component, int7: component, int8: component, int9: component, int10: component, int11: component, int12: component, int13: component, int14: component, int15: int): void {
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
    script31(int1, int0, 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
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
    script31(int6, int5, 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
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