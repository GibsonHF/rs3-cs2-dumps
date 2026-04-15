//
function script5856(): void {
    var int0 = comp(1043, 2);
    var int1 = comp(1043, 1);
    var int2 = comp(1043, 0);
    var int3 = comp(1043, 166);
    var int4 = comp(1043, 167);
    var int5 = 0;
    var int6 = 0;
    var int7 = ENUM_GETOUTPUTCOUNT(8678 as cs2enum);
    var int8 = 5;
    var int9 = 25;
    var int10 = 0;
    var int11 = IF_GETWIDTH(int0);
    var int12 = -1 as struct;
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    while ((int5 < int7)) {
        script7924(int0, int5, 32, 32, 0, 0, -1 as graphic, false, false, false, 0);
        CC_SETHIDE(true);
        int5 = (int5 + 1);
    };
    script10629(int1, 0, int11, 17, 0, 0, "Passive abilities", 15777401, 28 as fontmetrics, 1, 1, 11, false);
    script2993(9, int1, 1, int11, 0, 0, 17);
    CC_SETCOLOUR(15777401);
    int5 = 0;
    while ((int5 < int7)) {
        int6 = enum_getvalue(0, 0, 8678 as cs2enum, int5);
        int12 = enum_getvalue(0, 73, 8677 as cs2enum, int6);
        if ((((script5857(int12) == 1) && (struct_getparam(int12, 4219) == 0)) && (CC_FIND(int0, int5) == 1))) {
            if (((int8 + 35) > int11)) {
                [int8, int9] = [5, (int9 + 40)];
            };
            CC_SETPOSITION(int8, int9, 0, 0);
            CC_SETHIDE(false);
            if ((script5858(int12) == 1)) {
                CC_SETGRAPHIC(struct_getparam(int12, 4209));
            } else {
                CC_SETGRAPHIC(struct_getparam(int12, 4208));
            };
            CC_SETONDRAG(callback(script5859));
            CC_SETONDRAGCOMPLETE(callback(script5911));
            CC_SETONMOUSEOVER(callback(script6005, int5, int12));
            CC_SETONMOUSELEAVE(callback(script6025, int5, int12));
            CC_SETOP(1, "Select");
            CC_SETONOP(callback(script6227, int5));
            int8 = (int8 + 40);
        };
        int5 = (int5 + 1);
    };
    script10629(int1, 2, int11, 17, 0, (int9 + 40), "Active abilities", 15777401, 28 as fontmetrics, 1, 1, 11, false);
    script2993(9, int1, 3, int11, 0, 0, (int9 + 57));
    CC_SETCOLOUR(15777401);
    int5 = 0;
    int9 = (int9 + 65);
    int8 = 5;
    while ((int5 < int7)) {
        int6 = enum_getvalue(0, 0, 8678 as cs2enum, int5);
        int12 = enum_getvalue(0, 73, 8677 as cs2enum, int6);
        if ((((script5857(int12) == 1) && (struct_getparam(int12, 4219) != 0)) && (CC_FIND(int0, int5) == 1))) {
            if (((int8 + 35) > int11)) {
                [int8, int9] = [5, (int9 + 40)];
            };
            CC_SETPOSITION(int8, int9, 0, 0);
            CC_SETHIDE(false);
            if ((script5858(int12) == 1)) {
                CC_SETGRAPHIC(struct_getparam(int12, 4209));
            } else {
                CC_SETGRAPHIC(struct_getparam(int12, 4208));
            };
            CC_SETONDRAG(callback(script5859));
            CC_SETONDRAGCOMPLETE(callback(script5911));
            CC_SETONMOUSEOVER(callback(script6005, int5, int12));
            CC_SETONMOUSELEAVE(callback(script6025, int5, int12));
            CC_SETOP(1, "Select");
            CC_SETONOP(callback(script6227, int5));
            int8 = (int8 + 40);
        };
        int5 = (int5 + 1);
    };
    if ((++int9 > IF_GETHEIGHT(int0))) {
        IF_SETSCROLLSIZE(0, int9, int0);
        IF_SETSCROLLSIZE(0, int9, int2);
        IF_SETSCROLLSIZE(0, int9, int1);
    };
    script7791(int3, int4);
    script6228(varplayer_4381);
    return;
}