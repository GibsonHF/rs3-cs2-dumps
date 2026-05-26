//
function script14893(int0: number, int1: number): void {
    var int2 = -1;
    var int3 = -1;
    switch (int0) {
        case 14093: {
            int2 = 45416518;
            int3 = 45416519;
            break;
        }
        case 14094: {
            int2 = 45416522;
            int3 = 45416525;
            break;
        }
    };
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    var int4 = ENUM_GETOUTPUTCOUNT(int0);
    var int5 = -1 as dbrow;
    var int6 = 0;
    var int7 = 0;
    var int8 = -1;
    while ((++int8 < int4)) {
        int5 = enum_getvalue(0, 74, int0, int8);
        if ((script14669(int5) == 1)) {
            int6 = (int6 + 1);
            int7 = script14872(int2, int3, int5, 0, int7, IF_GETWIDTH(int2), int8, script9670(int8, int1));
            script14873(int2, int3, int0, int8);
            if ((int8 < int4)) {
                int7 = (int7 + 1);
            };
        } else {
            CC_CREATE(int3, 4, int8);
        };
    };
    if ((int6 == 0)) {
        script152(int2, IF_GETWIDTH(int2), IF_GETHEIGHT(int2), 0, 0, 26, "No research available.", 16777215);
        CC_SETTEXTALIGN(1, 1, 0);
    };
    IF_SETSCROLLSIZE(0, MAX(IF_GETHEIGHT(IF_GETPARENTLAYER(int2)), int7), IF_GETPARENTLAYER(int2));
    return;
}