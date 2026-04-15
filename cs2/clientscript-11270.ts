//
function script11270(int0: component, int1: component): void {
    if ((varplayer_5211 <= 0)) {
        return;
    };
    var int2 = 0;
    var int3 = -1 as cs2enum;
    var int4 = 0;
    [int2, int3, int4] = script8941(varplayer_5211, IF_GETWIDTH(int0), 20);
    var int5 = 0;
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    var int6 = 0;
    var int7 = 0;
    while ((int5 <= ENUM_GETOUTPUTCOUNT(9458 as cs2enum))) {
        CC_CREATE(int0, 5, int5);
        if ((TESTBIT(varplayer_5211, int5) == 1)) {
            CC_SETGRAPHIC(enum_getvalue(0, 23, int3, int5));
            CC_SETSIZE(int4, int4, 0, 0);
            CC_SETPOSITION(((20 + (MODULO(int7, int2) * int4)) + (MODULO(int7, int2) * 20)), (int6 * (20 + int4)), 0, 0);
            CC_SETONOP(callback(script11276, int1, -2147483643));
            CC_SETOP(1, `Select ${enum_getvalue(0, 36, 108, int5)}`);
            script11271(int1, (int4 + 4), CC_GETX(), CC_GETY(), 0);
            if ((MODULO(++int7, int2) == 0)) {
                int6 = (int6 + 1);
            };
        } else {
            script11271(int1, (int4 + 4), CC_GETX(), CC_GETY(), true);
        };
        int5 = (int5 + 1);
    };
    IF_SETSIZE(IF_GETWIDTH(int0), ((int6 + 1) * (20 + int4)), 0, 0, int0);
    IF_SETSIZE(IF_GETWIDTH(int0), ((int6 + 1) * (20 + int4)), 0, 0, int1);
    IF_SETPOSITION(4, 4, 1, 1, int0);
    IF_SETPOSITION(0, 0, 1, 1, int1);
    if (((varclient_4777 > 0) && (varclient_4777 <= ENUM_GETOUTPUTCOUNT(9458 as cs2enum)))) {
        IF_SETHIDE(true, comp(1611, 16));
    } else {
        IF_SETHIDE(false, comp(1611, 16));
    };
    return;
}