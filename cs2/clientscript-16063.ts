//
function script16063(int0: component, int1: component): void {
    var int2 = 0;
    var int3 = IF_GETWIDTH(int0);
    var int4 = IF_GETHEIGHT(int0);
    var int5 = 5;
    var int6 = (int3 / (36 + int5));
    var int7 = INV_GETOBJ(906 as inv, 0);
    var int8 = INV_GETNUM(906 as inv, 0);
    while ((int8 > 0)) {
        CC_CREATE(int0, 5, int2);
        CC_SETOBJECT(int7, int8);
        cc_setparam(4009, int7);
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETPOSITION(((MODULO(int2, int6) * (36 + int5)) + int5), (((int2 / int6) * (32 + int5)) + int5), 0, 0);
        CC_SETONMOUSEREPEAT(callback(script9564, int7, -2147483645, CC_GETID()));
        if ((int7 == varplayer_10181)) {
            IF_SETPOSITION((CC_GETX() - 2), (CC_GETY() - 2), 0, 0, comp(863, 0));
        };
        int2 = (int2 + 1);
        int7 = INV_GETOBJ(906 as inv, int2);
        int8 = INV_GETNUM(906 as inv, int2);
    };
    if ((int2 > 19)) {
        IF_SETSCROLLSIZE(0, MAX((((int2 / int6) + 1) * (32 + int5)), int4), int0);
        IF_SETPOSITION(0, 31, 0, 0, int0);
    } else {
        IF_SETHIDE(true, int1);
    };
    return;
}