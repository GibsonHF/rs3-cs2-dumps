//
function script9355(int0: component, int1: struct, int2: struct): void {
    if ((((int0 == comp(-1, 65535)) || (int1 == -1 as struct)) || (int2 == -1 as struct))) {
        return;
    };
    if ((int2 == 28690 as struct)) {
        if ((IF_FIND(IF_GETLAYER(int0)) == 1)) {
            var int2 = cc_getparam(4425);
        };
        if ((int2 == -1 as struct)) {
            return;
        };
    } else if ((int2 == 35536 as struct)) {
        if ((IF_FIND(IF_GETLAYER(int0)) == 1)) {
            if ((cc_getparam(4425) != -1 as struct)) {
                int2 = cc_getparam(4425);
            } else {
                cc_setparam(4425, int2);
            };
        };
    } else if ((IF_FIND(IF_GETLAYER(int0)) == 1)) {
        cc_setparam(4425, int2);
    };
    var int3 = struct_getparam(int1, 3797);
    if ((struct_getparam(int2, 4405) != -1 as struct)) {
        var int1 = script9926(struct_getparam(int2, 4405), int3);
    };
    IF_SETONVARTRANSMIT(callback(script9991, int0, int1, 28690, 3814, 1), int0);
    var int4 = MIN(IF_GETWIDTH(int0), IF_GETHEIGHT(int0));
    if (((struct_getparam(int2, 4405) == -1) && (int4 >= 32))) {
        switch (int3) {
            case 1: {
                int1 = 28756 as struct;
                break;
            }
            case 2: {
                int1 = 28757 as struct;
                break;
            }
            case 3: {
                int1 = 28758 as struct;
                break;
            }
            case 4: {
                int1 = 28759 as struct;
                break;
            }
            case 5: {
                int1 = 28760 as struct;
                break;
            }
        };
    };
    var int5 = struct_getparam(int1, 4405);
    if ((int5 != -1 as struct)) {
        int1 = int5;
    };
    int1 = script9984(int1, int3);
    var int6 = struct_getparam(int1, 3909);
    var int7 = struct_getparam(int1, 3808);
    if ((int7 == 0)) {
        int7 = IF_GETWIDTH(int0);
    };
    var int8 = struct_getparam(int1, 3807);
    if ((int8 == 0)) {
        int8 = IF_GETHEIGHT(int0);
    };
    var int9 = struct_getparam(int2, 3910);
    var int10 = struct_getparam(int2, 3915);
    var int11 = struct_getparam(int2, 3916);
    var int12 = false;
    var int13 = false;
    switch (int3) {
        case 2: {
            IF_SETONMOUSEOVER(callback(script8087, 0, -2147483645), int0);
            IF_SETONMOUSELEAVE(callback(script8087, 1, -2147483645), int0);
            int12 = 1;
            int9 = struct_getparam(int2, 3911);
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
            int12 = 1;
            stack(int2);
            stack(3912);
            struct_getparam();
            int9 = stack();
            break;
        }
        case 4: {
            int13 = true;
            int9 = struct_getparam(int2, 3913);
            break;
        }
        case 5: {
            IF_SETNOCLICKTHROUGH(1, int0);
            int13 = true;
            int9 = struct_getparam(int2, 3914);
            break;
        }
    };
    CC_DELETEALL(int0);
    var int14 = script12611(int0);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETSIZE(int7, int8, 0, 0);
    CC_SETGRAPHIC(int6);
    CC_SETHIDE(int12);
    script12591(6, int14);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETSIZE(int10, int11, 0, 0);
    CC_SETGRAPHIC(int9);
    CC_SETHIDE(int12);
    IF_SETHIDE(int13, int0);
    return;
}