//
function script16219(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void {
    var int7 = 0;
    var int8 = (int3 * int4);
    var int9 = IF_GETSCROLLX(int0);
    if ((IF_FIND(int0) == 1)) {
        if ((int5 == 0)) {
            int7 = int3;
            if ((int8 == cc_getparam(5946))) {
                return;
            };
            cc_setparam(5946, int8);
        } else {
            int8 = (MAX(cc_getparam(5946), 0) + int8);
            if ((MODULO(int9, int4) != 0)) {
                if ((MODULO(int8, int4) <= (int4 / 2))) {
                    int8 = (int8 - MODULO(int8, int4));
                } else {
                    int8 = (int8 + (int4 - MODULO(int8, int4)));
                };
            };
            int8 = MIN((IF_GETSCROLLWIDTH(int0) - IF_GETWIDTH(int0)), int8);
            int8 = MAX(int8, 0);
            if ((int8 == cc_getparam(5946))) {
                return;
            };
            int7 = (int8 / int4);
            cc_setparam(5946, int8);
        };
    } else {
        return;
    };
    IF_SETONTIMER(callback(script16221, int0, int2, int8, int4, int6), int0);
    return;
}