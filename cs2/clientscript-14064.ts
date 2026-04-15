//
function script14064(int0: int, int1: component, int2: component): void {
    var int3 = script14070(int0);
    var int4 = 0;
    var int5 = -1;
    var int6 = -1;
    var int7 = 5;
    var int8 = ENUM_GETOUTPUTCOUNT(int3);
    while ((int4 < int8)) {
        int5 = enum_getvalue(0, 0, int3, int4);
        CC_CREATE(int1, 5, IF_GETNEXTSUBID(int1));
        CC_SETSIZE(25, 25, 0, 0);
        CC_SETPOSITION((int7 + (25 * int4)), 5, 0, 0);
        if ((int5 == 27)) {
            if ((script12970(26 as stat) == 1)) {
                CC_SETGRAPHIC(enum_getvalue(0, 23, 371 as cs2enum, int5));
            } else {
                CC_SETGRAPHIC(enum_getvalue(0, 23, 3495 as cs2enum, int5));
                CC_SETTRANS(150);
            };
        } else {
            CC_SETGRAPHIC(enum_getvalue(0, 23, 371 as cs2enum, int5));
        };
        int7 = (int7 + 5);
        int4 = (int4 + 1);
    };
    script14066(int0, int2);
    return;
}