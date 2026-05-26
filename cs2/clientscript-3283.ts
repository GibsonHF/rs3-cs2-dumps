//[clientscript,scrollbar_vertical_text]
function script3283(int0: number, int1: number, int2: number, int3: number): void {
    if ((int3 == 0)) {
        var int3 = 12;
    };
    var int4 = PARAHEIGHT(IF_GETTEXT(int1), (IF_GETWIDTH(int1) + 16), int2);
    int4 = (int4 * int3);
    printmessage(`txt ${inttostring(int4, 10)}, layer ${inttostring(IF_GETHEIGHT(int1), 10)}`);
    if ((IF_GETHEIGHT(int1) >= int4)) {
        printmessage(`No scroll txt ${inttostring(int4, 10)}, layer ${inttostring(IF_GETHEIGHT(int1), 10)}`);
        IF_SETSIZE((IF_GETWIDTH(int1) + 16), IF_GETHEIGHT(int1), 0, 0, int1);
        IF_SETHIDE(true, int0);
    } else {
        int4 = PARAHEIGHT(IF_GETTEXT(int1), IF_GETWIDTH(int1), int2);
        int4 = (int4 * int3);
        IF_SETSCROLLSIZE(0, (int4 + 10), int1);
        printmessage(`Scroll txt ${inttostring(int4, 10)}, layer ${inttostring(IF_GETHEIGHT(int1), 10)}`);
        script31(int0, int1, 792, 789, 790, 791, 773, 788);
    };
    return;
}