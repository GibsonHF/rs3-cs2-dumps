//
function script4544(int0: component, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: int, int5: int, int6: unknown_int, int7: unknown_int): void {
    var int8 = IF_GETLAYER(int0);
    if ((int8 == comp(-1, 65535))) {
        return;
    };
    if (((int6 == 0) || (int6 == 1))) {
        if ((IF_GETWIDTH(int8) == int4)) {
            IF_SETONTIMER(callback(script4545, -2147483645, int5, int6, int1, int2, int7), int8);
        } else if ((IF_GETWIDTH(int8) == int5)) {
            IF_SETONTIMER(callback(script4546, -2147483645, int4, int6, int1, int3, int7), int8);
        };
    } else if (((int6 == 2) || (int6 == 3))) {
        if ((IF_GETHEIGHT(int8) == int4)) {
            IF_SETONTIMER(callback(script4545, -2147483645, int5, int6, int1, int2, int7), int8);
        } else if ((IF_GETHEIGHT(int8) == int5)) {
            IF_SETONTIMER(callback(script4546, -2147483645, int4, int6, int1, int3, int7), int8);
        };
    };
    return;
}