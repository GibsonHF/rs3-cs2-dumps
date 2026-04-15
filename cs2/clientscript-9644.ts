//
function script9644(int0: unknown_int, int1: component, int2: int, int3: int, int4: unknown_int, int5: int, int6: int, int7: int, int8: int): void {
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = GET_MOUSEX();
    var int13 = 5;
    var int14 = 2047;
    var int15 = 0;
    if (((CC_FIND(int1, int2) == 1) || ((int2 == -1) && (IF_FIND(int1) == 1)))) {
        int9 = CC_GETMODELANGLE_Z();
        int10 = CC_GETMODELXOF();
        int11 = CC_GETMODELYOF();
        var int7 = CC_GETMODELZOOM();
        if ((int4 == 1)) {
            CC_GETMODELANGLE_X();
            var int5 = stack();
            var int6 = CC_GETMODELANGLE_Y();
            var int8 = GET_MOUSEX();
            IF_SETONMOUSEOVER(callback(), int0);
            var int4 = 0;
        };
        int12 = (int12 - int8);
        int12 = (int12 * int13);
        int12 = (int12 * -1);
        int12 = (int12 + int6);
        if (((cc_getparam(6373) == 1) || (varclient_1968 == 1))) {
            cc_setparam(6373, 1);
            if ((int12 < -512)) {
                int12 = MAX(int12, -512);
            } else {
                int12 = MIN(int12, 512);
            };
        } else {
            int12 = MODULO(int12, int14);
            if ((int12 >= int14)) {
                int12 = (int12 - int14);
            };
        };
        if ((int3 == -1)) {
            CC_SETMODELANGLE(int10, int11, int5, int12, int9, int7);
        } else {
            int15 = 0;
            while ((int15 < int3)) {
                if ((CC_FIND[1](int1, (int2 + int15)) == 1)) {
                    CC_SETMODELANGLE[1](int10, int11, int5, int12, int9, int7);
                };
                int15 = (int15 + 1);
            };
        };
        IF_SETONDRAG(callback(script8482, int0, int1, int2, int3, 0, int5, int6, int7, int8), int0);
    } else {
        script8481(int0, int1, int2, int3);
    };
    return;
}