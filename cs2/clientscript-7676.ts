//
function script7676(int0: component, int1: struct): void {
    if (((int0 == comp(-1, 65535)) || (int1 == -1 as struct))) {
        return;
    };
    IF_SETONVARTRANSMIT(callback(script9985, int0, int1, 3814, 1), int0);
    var int2 = struct_getparam(int1, 3797);
    var int3 = struct_getparam(int1, 4405);
    if ((int3 != -1)) {
        var int1 = int3;
    };
    int1 = script9984(int1, int2);
    var int4 = struct_getparam(int1, 3801);
    var int5 = struct_getparam(int1, 3802);
    var int6 = struct_getparam(int1, 3803);
    var int7 = struct_getparam(int1, 3808);
    var int8 = struct_getparam(int1, 3807);
    var int9 = false;
    var int10 = false;
    switch (int2) {
        case 2: {
            IF_SETONMOUSEOVER(callback(script8087, 0, -2147483645), int0);
            IF_SETONMOUSELEAVE(callback(script8087, 1, -2147483645), int0);
            int9 = 1;
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
            int9 = 1;
            break;
        }
        case 4: {
            int10 = true;
            break;
        }
        case 5: {
            IF_SETNOCLICKTHROUGH(1, int0);
            int10 = true;
            break;
        }
    };
    CC_DELETEALL(int0);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETSIZE((2 * int7), int8, 1, 0);
    CC_SETGRAPHIC(int5);
    CC_SETHIDE(int9);
    CC_SETTILING(true);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(0, 0, 0, 1);
    CC_SETSIZE(int7, int8, 0, 0);
    CC_SETGRAPHIC(int4);
    CC_SETHIDE(int9);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(0, 0, 2, 1);
    CC_SETSIZE(int7, int8, 0, 0);
    CC_SETGRAPHIC(int6);
    CC_SETHIDE(int9);
    IF_SETHIDE(int10, int0);
    return;
}