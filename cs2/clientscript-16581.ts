//
function script16581(int0: component, int1: component, int2: component, int3: unknown_int): void {
    var int4 = 0;
    if ((IF_FIND(int0) == 1)) {
        int4 = cc_getparam(8236);
    };
    var int5 = (script14(varbitplayer_27175) + (int4 * (6 - 1)));
    var int6 = (5 * 3);
    var int7 = (int5 / int6);
    var int8 = MODULO(int5, int6);
    if ((int8 > 0)) {
        int8 = (((int8 - 1) / 3) + 1);
        int5 = ((int7 * 5) + int8);
    } else {
        int5 = (int7 * 5);
    };
    var int9 = IF_GETSCROLLX(int0);
    if ((int3 == 1)) {
        int9 = 0;
    };
    script16217(int0, int1, int2, int5, 0, int9, 132, 100);
    return;
}