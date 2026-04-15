//
function script10350(): void {
    CC_DELETEALL(comp(1524, 12));
    CC_DELETEALL(comp(1524, 13));
    CC_DELETEALL(comp(1524, 10));
    CC_DELETEALL(comp(1524, 11));
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = IF_GETWIDTH(comp(1524, 12));
    var int5 = script10495(3);
    var int6 = ENUM_GETOUTPUTCOUNT(887 as cs2enum);
    var int7 = 0;
    var int8 = -1 as cs2enum;
    var string0 = "";
    var int9 = 0;
    var int10 = 26 as fontmetrics;
    [int10, int5] = script10432(0);
    while ((int3 < int6)) {
        CC_CREATE(comp(1524, 11), 4, int3);
        CC_SETSIZE(0, 20, 1, 0);
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETOP(1, "Select");
        CC_SETOP(2, "View");
        CC_SETONOP(callback(script10360, int3));
        CC_SETHIDE(1);
        int3 = (int3 + 1);
    };
    int6 = ENUM_GETOUTPUTCOUNT(889 as cs2enum);
    int3 = 0;
    var int11 = 0;
    while ((int3 < int6)) {
        int0 = enum_getvalue(0, 0, 889 as cs2enum, int3);
        int8 = enum_getvalue(0, 26, 9124 as cs2enum, int0);
        if ((int8 != -1 as cs2enum)) {
            int11 = int1;
            int9 = script10357(int0);
            script13980(comp(1524, 12), comp(-1, 65535), 28619 as struct, 0, int1, int4, -1, false, enum_getvalue(0, 36, 9125 as cs2enum, int0));
            int1 = (int1 + (24 + 3));
            CC_CREATE(comp(1524, 13), 4, int3);
            CC_SETSIZE(0, 22, 1, 0);
            CC_SETPOSITION(0, int11, 0, 0);
            if ((int9 == 1)) {
                CC_SETOP(1, "Collapse");
            } else {
                CC_SETOP(1, "Expand");
            };
            CC_SETONOP(callback(script10358, int0));
            if ((int9 == 1)) {
                [int1, int2] = script10354(int8, int1, int4, int2);
            };
        };
        int3 = (int3 + 1);
    };
    if ((int2 != 0)) {
        int2 = MAX(0, (int2 - (IF_GETHEIGHT(comp(1524, 9)) / 2)));
    };
    if ((int1 > IF_GETHEIGHT(comp(1524, 9)))) {
        IF_SETSCROLLSIZE(0, int1, comp(1524, 9));
        IF_SETSCROLLPOS(0, int2, comp(1524, 9));
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(1524, 9));
        IF_SETSCROLLPOS(0, 0, comp(1524, 9));
    };
    script31(comp(1524, 14), comp(1524, 9), 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
    return;
}