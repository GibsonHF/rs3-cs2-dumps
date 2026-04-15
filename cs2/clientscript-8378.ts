//
function script8378(int0: unknown_int, int1: int): void {
    var int2 = script10405(int1);
    var int3 = struct_getparam(int2, 3509);
    var int4 = struct_getparam(int2, 3508);
    var int5 = struct_getparam(int2, 3504);
    var int6 = struct_getparam(int2, 3506);
    var int7 = script8418(int2, 0);
    if ((script15532(0) == 1)) {
        var int0 = 1;
    };
    var int8 = struct_getparam(int7, 3550);
    var int9 = struct_getparam(int7, 3551);
    var int10 = struct_getparam(int7, 3553);
    var int11 = struct_getparam(int7, 3555);
    var int12 = struct_getparam(int7, 3560);
    var int13 = struct_getparam(int7, 3562);
    var int14 = struct_getparam(int7, 3586);
    var int15 = struct_getparam(int7, 3547);
    var int16 = struct_getparam(int7, 3549);
    var int17 = struct_getparam(int7, 3578);
    var int18 = struct_getparam(int7, 3577);
    var int19 = struct_getparam(int7, 8350);
    var int20 = struct_getparam(int7, 8656);
    var int21 = 0;
    var int22 = 0;
    var int23 = 0;
    if ((int0 == 1)) {
        IF_SETHIDE(true, int3);
        IF_SETHIDE(true, int4);
        if ((struct_getparam(int7, 8094) == 1)) {
            return;
        };
        if ((CC_FIND(int6, 8) == 1)) {
            CC_SETGRAPHIC(struct_getparam(int7, 3621));
            script12591(2, int2);
        };
        if ((CC_FIND(int6, 9) == 1)) {
            CC_SETGRAPHIC(struct_getparam(int7, 3620));
            script12591(2, int2);
        };
        if ((CC_FIND(int6, 10) == 1)) {
            CC_SETGRAPHIC(struct_getparam(int7, 3621));
            script12591(2, int2);
        };
        switch (struct_getparam(int7, 8296)) {
            case 1:
            case 2: {
                IF_SETPOSITION(0, 0, 0, 0, int3);
                IF_SETPOSITION(0, 0, 0, 0, int4);
                IF_SETPOSITION(0, 0, 0, 0, int6);
                IF_SETSIZE(0, 0, 1, 1, int6);
                IF_SETPOSITION(int8, int15, 0, 0, int5);
                IF_SETSIZE((int8 + int9), (int15 + int16), 1, 1, int5);
                break;
            }
            default: {
                if ((CC_FIND(int5, 0) == 1)) {
                    CC_SETPOSITION(0, int14, 0, 0);
                    CC_SETSIZE(0, int14, 1, 1);
                };
                if ((CC_FIND(int6, 6) == 1)) {
                    CC_SETPOSITION(0, (int10 + int14), 0, 0);
                    CC_SETSIZE(int8, ((int12 + int10) + int14), 0, 1);
                };
                if ((CC_FIND(int6, 7) == 1)) {
                    CC_SETPOSITION(0, (int11 + int14), 2, 0);
                    CC_SETSIZE(int9, ((int13 + int11) + int14), 0, 1);
                };
                break;
            }
        };
    } else {
        IF_SETHIDE(false, int3);
        IF_SETHIDE(false, int4);
        if ((struct_getparam(int7, 8094) == 1)) {
            return;
        };
        if ((CC_FIND(int6, 8) == 1)) {
            CC_SETGRAPHIC(struct_getparam(int7, 3736));
            script12591(5, int2);
        };
        if ((CC_FIND(int6, 9) == 1)) {
            CC_SETGRAPHIC(struct_getparam(int7, 3735));
            script12591(5, int2);
        };
        if ((CC_FIND(int6, 10) == 1)) {
            CC_SETGRAPHIC(struct_getparam(int7, 3736));
            script12591(5, int2);
        };
        switch (struct_getparam(int7, 8296)) {
            case 1: {
                IF_SETPOSITION(int19, 0, 0, 0, int3);
                IF_SETSIZE((int19 * 2), int18, 1, 0, int3);
                IF_SETPOSITION(int19, 0, 0, 0, int4);
                IF_SETSIZE((int19 * 2), int18, 1, 0, int3);
                IF_SETPOSITION(0, (int18 - int20), 0, 0, int6);
                IF_SETSIZE(0, (int18 - int20), 1, 1, int6);
                IF_SETPOSITION(int8, ((int18 + int15) - int20), 0, 0, int5);
                IF_SETSIZE((int8 + int9), (((int18 + int15) + int16) - int20), 1, 1, int5);
                break;
            }
            case 2: {
                IF_SETPOSITION((int8 + int19), (int16 + int20), 0, 2, int3);
                IF_SETSIZE(((int8 + int9) + (int19 * 2)), int18, 1, 0, int3);
                int21 = script8374(int3);
                int22 = MAX(1, (IF_GETWIDTH(int3) / int17));
                int23 = MAX(1, ((int21 / int22) + MIN(1, MODULO(int21, int22))));
                script20534(int3, int21, int22, int17, int18, int19);
                int18 = (int23 * int18);
                IF_SETSIZE((int19 * 2), int18, 1, 0, int3);
                IF_SETPOSITION(0, 0, 0, 2, int4);
                IF_SETSIZE(0, (((int16 * 2) + int18) + (int20 * 2)), 1, 0, int4);
                break;
            }
            default: {
                if ((CC_FIND(int5, 0) == 1)) {
                    CC_SETPOSITION(0, int18, 0, 0);
                    CC_SETSIZE(0, int18, 1, 1);
                };
                if ((CC_FIND(int6, 6) == 1)) {
                    CC_SETPOSITION(0, ((int10 + int18) + int14), 0, 0);
                    CC_SETSIZE(int8, (((int12 + int10) + int18) + int14), 0, 1);
                };
                if ((CC_FIND(int6, 7) == 1)) {
                    CC_SETPOSITION(0, ((int11 + int18) + int14), 2, 0);
                    CC_SETSIZE(int9, (((int13 + int11) + int18) + int14), 0, 1);
                };
                break;
            }
        };
    };
    return;
}