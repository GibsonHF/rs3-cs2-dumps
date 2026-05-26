//
function script4544(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
    var int8 = IF_GETLAYER(int0);
    if ((int8 == -1)) {
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