//[proc,fairyrings_rotate_component]
function script966(int0: component, int1: component, int2: int, int3: int): void {
    var int4 = (IF_GETX(int0) + (IF_GETWIDTH(int0) / 2));
    var int5 = (IF_GETY(int0) + (IF_GETHEIGHT(int0) / 2));
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    if ((IF_FIND(int1) == 1)) {
        int6 = cc_getparam(679);
        int7 = cc_getparam(678);
        int10 = MODULO((int6 + int2), 360);
        if ((int7 == int10)) {
            return;
        };
        int7 = (int7 + (5 * int3));
        if ((int7 >= 360)) {
            int7 = (int7 - 360);
        };
        if ((int7 < 0)) {
            int7 = (int7 + 360);
        };
        [int8, int9] = script2106(int4, int5, varclient_6879, int7);
        int8 = (int8 - (CC_GETWIDTH() / 2));
        int9 = (int9 - (CC_GETHEIGHT() / 2));
        CC_SETPOSITION(int8, int9, 0, 0);
        cc_setparam(678, int7);
    };
    return;
}