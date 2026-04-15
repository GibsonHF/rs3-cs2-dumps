//
function script676(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = -1 as struct;
    var int4 = 20;
    var int5 = 4;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = -1 as obj;
    while ((int1 < ENUM_GETOUTPUTCOUNT(8285 as cs2enum))) {
        int3 = enum_getvalue(0, 73, 8285 as cs2enum, int1);
        int7 = struct_getparam(int3, 4001);
        int9 = struct_getparam(int3, 4002);
        if (((((int3 != -1 as struct) && (int9 != -1 as obj)) && (int7 > 0)) && (int9 == enum_getvalue(0, 33, 1087 as cs2enum, int0)))) {
            CC_CREATE(comp(1719, 5), 4, int1);
            CC_SETSIZE(10, int4, 1, 0);
            CC_SETPOSITION(4, int5, 0, 0);
            CC_SETTEXT(struct_getparam(int3, 4000));
            CC_SETTEXTFONT(29 as fontmetrics);
            CC_SETCOLOUR(15777401);
            int8 = (int7 + int0);
            int5 = (int5 + int4);
            while (((int0 < ENUM_GETOUTPUTCOUNT(1087 as cs2enum)) && (int0 < int8))) {
                CC_CREATE(comp(1719, 6), 5, int0);
                CC_SETSIZE(36, 32, 0, 0);
                CC_SETPOSITION((4 + (42 * int6)), int5, 0, 0);
                CC_SETOBJECT(enum_getvalue(0, 33, 1087 as cs2enum, int0), -1);
                CC_SETOPBASE(`<col=FF981F>${OC_NAME(enum_getvalue(0, 33, 1087 as cs2enum, int0))}`);
                CC_SETOP(1, "Components");
                CC_SETOP(2, "Exchange");
                CC_SETOP(3, "Exchange-x");
                CC_SETOP(4, "Examine");
                CC_SETOUTLINE(1);
                CC_SETONMOUSEREPEAT(callback(script8799, OC_NAME(enum_getvalue(0, 33, 1087 as cs2enum, int0)), -2147483645, -2147483643));
                CC_CREATE[1](112656391, 5, int0);
                CC_SETSIZE[1](12, 6, 0, 0);
                CC_SETPOSITION[1]((4 + (42 * int6)), int5, 0, 0);
                CC_SETGRAPHIC[1](1066);
                if ((int6 < 11)) {
                    int6 = (int6 + 1);
                } else {
                    int6 = 0;
                    if ((((int0 + 1) < ENUM_GETOUTPUTCOUNT(1087 as cs2enum)) && ((int0 + 1) < int8))) {
                        int5 = (int5 + 36);
                    };
                };
                int0 = (int0 + 1);
            };
        };
        int5 = ((int5 + 36) + 8);
        int6 = 0;
        int7 = 0;
        int9 = -1 as obj;
        int1 = (int1 + 1);
    };
    int5 = (int5 - 4);
    IF_SETSCROLLSIZE(0, int5, comp(1719, 4));
    script7791(comp(1719, 8), comp(1719, 4));
    return;
}