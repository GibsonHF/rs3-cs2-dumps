//
function script7994(int0: component, int1: struct, int2: struct): void {
    if (((int0 == comp(-1, 65535)) || (int1 == -1 as struct))) {
        return;
    };
    IF_SETONVARTRANSMIT(callback(script9988, int0, int1, int2, 3814, 1), int0);
    var int3 = struct_getparam(int1, 3797);
    var int4 = struct_getparam(int1, 4405);
    if ((int4 != -1)) {
        var int1 = int4;
    };
    int1 = script9984(int1, int3);
    var int5 = struct_getparam(int1, 3799);
    var int6 = struct_getparam(int1, 3798);
    var int7 = struct_getparam(int1, 3800);
    var int8 = struct_getparam(int1, 3801);
    var int9 = struct_getparam(int1, 3802);
    var int10 = struct_getparam(int1, 3803);
    var int11 = struct_getparam(int1, 3805);
    var int12 = struct_getparam(int1, 3804);
    var int13 = struct_getparam(int1, 3806);
    var int14 = struct_getparam(int1, 3808);
    var int15 = struct_getparam(int1, 3807);
    var int16 = false;
    var int17 = false;
    switch (int3) {
        case 2: {
            IF_SETONMOUSEOVER(callback(script8087, 0, -2147483645), int0);
            IF_SETONMOUSELEAVE(callback(script8087, 1, -2147483645), int0);
            int16 = 1;
            break;
        }
        case 3: {
            IF_SETONCLICK(callback(script10016, -2147483645), int0);
            stack(8087);
            stack(1);
            stack(-2147483645);
            stack("ii");
            stack(int0);
            IF_SETONRELEASE();
            IF_SETONMOUSELEAVE(callback(script8087, 1, -2147483645), int0);
            int16 = 1;
            break;
        }
        case 4: {
            int17 = true;
            break;
        }
        case 5: {
            IF_SETNOCLICKTHROUGH(1, int0);
            int17 = true;
            break;
        }
    };
    var int18 = -1 as graphic;
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    var int23 = 0;
    var int24 = 1;
    if ((int2 != -1 as struct)) {
        int19 = struct_getparam(int2, 3915);
        int20 = struct_getparam(int2, 3916);
        int21 = struct_getparam(int2, 4247);
        int22 = struct_getparam(int2, 4248);
        int23 = struct_getparam(int2, 4426);
        int24 = struct_getparam(int2, 6309);
        switch (int3) {
            case 1: {
                int18 = struct_getparam(int2, 3910);
                break;
            }
            case 2: {
                int18 = struct_getparam(int2, 3911);
                break;
            }
            case 3: {
                int18 = struct_getparam(int2, 3912);
                break;
            }
            case 4: {
                int18 = struct_getparam(int2, 3913);
                break;
            }
            case 5: {
                int18 = struct_getparam(int2, 3914);
                break;
            }
        };
    };
    CC_DELETEALL(int0);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETSIZE(int14, int15, 0, 0);
    CC_SETGRAPHIC(int5);
    CC_SETHIDE(int16);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(0, 0, 1, 0);
    CC_SETSIZE((int14 * 2), int15, 1, 0);
    CC_SETGRAPHIC(int6);
    CC_SETHIDE(int16);
    CC_SETTILING(true);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(0, 0, 2, 0);
    CC_SETSIZE(int14, int15, 0, 0);
    CC_SETGRAPHIC(int7);
    CC_SETHIDE(int16);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(0, 0, 0, 1);
    CC_SETSIZE(int14, (int15 * 2), 0, 1);
    CC_SETGRAPHIC(int8);
    CC_SETHIDE(int16);
    CC_SETTILING(true);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETSIZE((int14 * 2), (2 * int15), 1, 1);
    CC_SETGRAPHIC(int9);
    CC_SETHIDE(int16);
    CC_SETTILING(true);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(0, 0, 2, 1);
    CC_SETSIZE(int14, (int15 * 2), 0, 1);
    CC_SETGRAPHIC(int10);
    CC_SETHIDE(int16);
    CC_SETTILING(true);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(0, 0, 0, 2);
    CC_SETSIZE(int14, int15, 0, 0);
    CC_SETGRAPHIC(int11);
    CC_SETHIDE(int16);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(0, 0, 1, 2);
    CC_SETSIZE((int14 * 2), int15, 1, 0);
    CC_SETGRAPHIC(int12);
    CC_SETHIDE(int16);
    CC_SETTILING(true);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(0, 0, 2, 2);
    CC_SETSIZE(int14, int15, 0, 0);
    CC_SETGRAPHIC(int13);
    CC_SETHIDE(int16);
    if ((int2 != -1 as struct)) {
        CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
        CC_SETPOSITION(int21, int23, int22, int24);
        CC_SETSIZE(int19, int20, 0, 0);
        CC_SETGRAPHIC(int18);
        CC_SETHIDE(int16);
    };
    IF_SETHIDE(int17, int0);
    return;
}