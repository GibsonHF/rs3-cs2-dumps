//[clientscript,scrollbar_vertical_text]
function script3283(int0: component, int1: component, int2: fontmetrics, int3: int): void {
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
        script31(int0, int1, 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
    };
    return;
}