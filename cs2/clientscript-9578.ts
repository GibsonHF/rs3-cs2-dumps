//
function script9578(int0: component, int1: struct): void {
    if (((int0 == comp(-1, 65535)) || (int1 == -1 as struct))) {
        return;
    };
    IF_SETONVARTRANSMIT(callback(script9987, int0, int1, 3814, 1), int0);
    var int2 = struct_getparam(int1, 3797);
    var int3 = struct_getparam(int1, 4405);
    if ((int3 != -1)) {
        var int1 = int3;
    };
    int1 = script9984(int1, int2);
    var int4 = struct_getparam(int1, 3808);
    var int5 = struct_getparam(int1, 3807);
    var int6 = false;
    var int7 = false;
    var int8 = struct_getparam(int1, 3801);
    var int9 = struct_getparam(int1, 3802);
    var int10 = struct_getparam(int1, 3803);
    var int11 = struct_getparam(int1, 4034);
    var int12 = struct_getparam(int1, 4035);
    var int13 = struct_getparam(int1, 4036);
    var int14 = int8;
    var int15 = int9;
    var int16 = int10;
    if (((IF_FIND(IF_GETPARENTLAYER(int0)) == 1) && (IF_FIND[1](IF_GETPARENTLAYER(IF_GETPARENTLAYER(int0))) == 1))) {
        if (((cc_getparam(4040) != comp(-1, 65535)) && (IF_GETHIDE(cc_getparam(4040)) == false))) {
            int14 = int11;
            int15 = int12;
            int16 = int13;
        };
        switch (int2) {
            case 1: {
                cc_setparam(4037, int0);
                break;
            }
            case 2: {
                IF_SETONMOUSEOVER(callback(script8087, 0, -2147483645), int0);
                IF_SETONMOUSELEAVE(callback(script8087, 1, -2147483645), int0);
                int6 = 1;
                cc_setparam(4038, int0);
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
                int6 = 1;
                cc_setparam(4039, int0);
                break;
            }
            case 4: {
                int7 = true;
                cc_setparam(4040, int0);
                cc_setparam[1](4040, int0);
                cc_setparam[1](4051, IF_GETHEIGHT(int0));
                CC_DELETEALL(int0);
                IF_SETHIDE(int7, int0);
                return;
            }
            case 5: {
                IF_SETNOCLICKTHROUGH(1, int0);
                int8 = -1 as graphic;
                int9 = -1 as graphic;
                int10 = -1 as graphic;
                int11 = -1 as graphic;
                int12 = -1 as graphic;
                int13 = -1 as graphic;
                break;
            }
        };
    };
    CC_DELETEALL(int0);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETSIZE((2 * int4), 0, 1, 1);
    CC_SETGRAPHIC(int15);
    CC_SETHIDE(int6);
    CC_SETTILING(true);
    cc_setparam(4054, int9);
    cc_setparam(4055, int12);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(0, 0, 0, 1);
    CC_SETSIZE(int4, int5, 0, 0);
    CC_SETGRAPHIC(int14);
    CC_SETHIDE(int6);
    cc_setparam(4054, int8);
    cc_setparam(4055, int11);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(0, 0, 2, 1);
    CC_SETSIZE(int4, int5, 0, 0);
    CC_SETGRAPHIC(int16);
    CC_SETHIDE(int6);
    cc_setparam(4054, int10);
    cc_setparam(4055, int13);
    IF_SETHIDE(int7, int0);
    return;
}