//
function script7538(int0: struct, int1: int, string0: string, string1: string): void {
    var int2 = struct_getparam(int0, 3250);
    var string2 = `Level ${inttostring(int2, 10)} Slayer`;
    CC_DELETEALL(comp(1394, 13));
    var int3 = 0;
    var int4 = 1;
    var int5 = struct_getparam(int0, 5889);
    var int6 = struct_getparam(int0, 5890);
    if ((STAT_BASE(18 as stat) < int2)) {
        string2 = strconcat("<col=ff0000>", strconcat(string2, "</col>"));
        IF_SETHIDE(false, comp(1394, 23));
        IF_SETONCLICK(callback(script7539, int2), comp(1394, 22));
        int4 = 0;
    };
    if ((int5 != -1 as stat)) {
        if ((STAT_BASE(int5) < int6)) {
            string2 = `${string2}<br><col=ff0000>Level ${inttostring(int6, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int5)}</col>`;
            int4 = 0;
        } else {
            string2 = `${string2}<br>Level ${inttostring(int6, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int5)}`;
        };
    };
    if ((int4 == 1)) {
        int3 = 0;
        while ((int3 < int1)) {
            CC_CREATE(comp(1394, 13), 3, int3);
            CC_SETHIDE(true);
            int3 = (int3 + 1);
        };
        CC_CREATE(comp(1394, 13), 3, int1);
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETPOSITION(0, 0, 1, 1);
        CC_SETTRANS(255);
        CC_SETOP(1, "Confirm");
        CC_SETONOP(callback(script7540, -2147483644));
        IF_SETHIDE(1, 91357207);
        IF_SETONCLICK(callback(), 91357206);
    };
    IF_SETTEXT(strconcat(string0, strconcat(string2, string1)), comp(1394, 12));
    var int7 = ((PARAHEIGHT(IF_GETTEXT(comp(1394, 12)), IF_GETWIDTH(comp(1394, 12)), 26 as fontmetrics) * 13) + 2);
    IF_SETSIZE(IF_GETWIDTH(comp(1394, 6)), MAX((int7 + 44), 130), 0, 0, comp(1394, 6));
    return;
}