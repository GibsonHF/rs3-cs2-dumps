//
function script19178(int0: unknown_int, int1: obj, int2: int, int3: int): unknown_int {
    var int4 = comp(-1, 65535);
    var int5 = -1;
    var int6 = -1;
    var int7 = comp(-1, 65535);
    [int4, int5, int6, int7] = script19179(int0);
    var int8 = -1 as struct;
    if (((((int4 == comp(-1, 65535)) || (int5 == -1)) || (int6 == -1)) || (int7 == comp(-1, 65535)))) {
        return 0;
    };
    if ((int1 != -1 as obj)) {
        int8 = item_getparam(int1, 4414);
        if ((int8 != -1 as struct)) {
            IF_SETOBJECT_HIGHRES(int1, int4);
            IF_SETSIZE(100, 100, 0, 0, int4);
            stack(-1);
            stack(int5);
            IF_SETGRAPHIC();
            IF_SETTEXT(script19200(int8), int6);
        } else {
            IF_SETOBJECT_ALWAYSNUM(int1, int2, int4);
            IF_SETSIZE(32, 32, 0, 0, int4);
            stack(script8948(int3));
            stack(int5);
            IF_SETGRAPHIC();
            IF_SETTEXT(`${TOSTRING_LOCALISED(int2, 1)} x ${OC_NAME(int1)}`, int6);
        };
        IF_SETHIDE(false, int7);
        return 1;
    };
    IF_SETHIDE(true, int7);
    return 0;
}