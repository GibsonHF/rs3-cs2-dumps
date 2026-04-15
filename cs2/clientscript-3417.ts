//
function script3417(int0: component, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int, int9: int, int10: int, int11: unknown_int, int12: unknown_int, int13: unknown_int, int14: unknown_int): void {
    var int15 = 0;
    var int16 = 0;
    [int15, int16] = script6727(int10);
    if ((int15 == 0)) {
        return;
    };
    var int17 = 0;
    if ((int11 == 1)) {
        int17 = script3544(int0, int1, int6, int16);
        if (((int12 == 0) && (script3842(int17, int5, int3, 1) == 1))) {
            var int12 = 1;
        };
        if ((int17 > int5)) {
            script2391(int0, int1, int6, int4, int5, 1, 0);
            var int11 = 0;
        };
    };
    if ((int12 == 1)) {
        int17 = script3832(int0, int1, int7, int16);
        if (((int13 == 0) && (script3845(int17, int4, int3, 1) == 1))) {
            var int14 = 1;
        };
        if ((int17 > int4)) {
            script2391(int0, int1, int7, int4, int5, 2, 1);
            int12 = 0;
        };
    };
    if ((int14 == 1)) {
        int17 = script3544(int0, int1, int9, (0 - int16));
        if (((int13 == 0) && (script3842(int17, int5, int3, 0) == 1))) {
            var int13 = 1;
        };
        if (((int17 + int3) <= 0)) {
            script2391(int0, int1, int9, int4, int5, 3, 2);
            int14 = 0;
        };
    };
    if ((int13 == 1)) {
        int17 = script3832(int0, int1, int8, (0 - int16));
        if (((int11 == 0) && (script3845(int17, int4, int3, 0) == 1))) {
            int11 = 1;
        };
        if (((int17 + int3) <= 0)) {
            script2391(int0, int1, int8, int4, int3, 0, 3);
            int13 = 0;
        };
    };
    if ((CC_FINDBYCATEGORY(int0, int1, int2) == 1)) {
        CC_SETONTIMER(callback(script3417, int0, int1, int2, int3, int4, int5, int6, int7, int8, int9, int10, int11, int12, int13, int14));
    };
    return;
}