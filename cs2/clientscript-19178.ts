//
function script19178(int0: number, int1: number, int2: number, int3: number): number {
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    [int4, int5, int6, int7] = script19179(int0);
    var int8 = -1 as struct;
    if (((((int4 == -1) || (int5 == -1)) || (int6 == -1)) || (int7 == -1))) {
        return 0;
    };
    if ((int1 != -1)) {
        int8 = item_getparam(int1, 4414);
        if ((int8 != -1 as struct)) {
            IF_SETOBJECT_HIGHRES(int1, int4);
            IF_SETSIZE(100, 100, 0, 0, int4);
            IF_SETGRAPHIC(-1, int5);
            IF_SETTEXT(script19200(int8), int6);
        } else {
            IF_SETOBJECT_ALWAYSNUM(int1, int2, int4);
            IF_SETSIZE(32, 32, 0, 0, int4);
            IF_SETGRAPHIC(script8948(int3), int5);
            IF_SETTEXT(`${TOSTRING_LOCALISED(int2, 1)} x ${OC_NAME(int1)}`, int6);
        };
        IF_SETHIDE(0, int7);
        return 1;
    };
    IF_SETHIDE(1, int7);
    return 0;
}