//
function script16876(int0: unknown_int, int1: component, int2: component): void {
    var int3 = script16828(script12477());
    if ((int0 == 0)) {
        int3 = (int3 + 1);
    };
    CC_DELETEALL(int1);
    var int4 = enum_getvalue(0, 0, 14153 as cs2enum, int3);
    if ((int4 == -1)) {
        script2995(int1, 0, 0, 0, 1, 1, 20, 20, 1, 1, -1 as dbrow, "Fresh Start Worlds is over!");
        CC_SETTEXTALIGN(1, 1, 0);
        return;
    };
    stack(315504);
    stack(int4);
    DB_FIND(0);
    dbrow_findnext();
    var int5 = stack();
    if ((int5 == -1)) {
        script2995(int1, 0, 0, 0, 1, 1, 20, 20, 1, 1, -1 as dbrow, "Fresh Start Worlds is over!");
        CC_SETTEXTALIGN(1, 1, 0);
        return;
    };
    script10026(int1, 0, 0, 0, 1, 0, 0, 5, 1, 0, 1, 5);
    var int6 = DB_GETFIELDCOUNT(int5, 315552);
    var int7 = -1;
    var int8 = -1;
    var int9 = 0;
    var string0 = "";
    var int10 = 21651 as graphic;
    if ((int0 == 0)) {
        int10 = 21652 as graphic;
    };
    if ((CC_FIND[1](int1, 0) == 1)) {
        while ((++int7 < int6)) {
            int8 = dbrow_getfield(int5, 315552, int7);
            if ((enum_hasoutput(0, 14156 as cs2enum, int8) == 0)) {
                string0 = script16830(int3, int8, int0);
                if ((STRING_LENGTH(string0) > 0)) {
                    int9 = script15891(string0, (CC_GETWIDTH[1]() - 60), 30 as fontmetrics, -1);
                    CC_SETSIZE[1](0, ((CC_GETHEIGHT[1]() + int9) + 5), 1, 0);
                    script15939(int1, 1, int7, 0, 0, 0, 0, 1, 1, 0, int9, 1, 0);
                    script7920(int1, 2, IF_GETNEXTCATEGORYSUBID(2, int1), 1, int7, 10, 6, 0, 0, 15, 15, 0, 0, int10);
                    script10507(int1, 2, IF_GETNEXTCATEGORYSUBID(2, int1), 1, int7, 50, 0, 0, 1, 60, 0, 1, 1, -1 as dbrow, string0);
                    CC_SETTEXTFONT(30 as fontmetrics);
                    CC_SETCOLOUR(script10495(3));
                    CC_SETTEXTALIGN(0, 1, 0);
                };
            };
        };
        IF_SETSCROLLSIZE(IF_GETWIDTH(int1), MAX(IF_GETHEIGHT(int1), CC_GETHEIGHT[1]()), int1);
        if ((IF_GETHEIGHT(int1) < CC_GETHEIGHT[1]())) {
            script7791(int2, int1);
        };
    };
    return;
}