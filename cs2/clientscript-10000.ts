//
function script10000(int0: component, int1: struct): void {
    if (((int0 == comp(-1, 65535)) || (int1 == -1 as struct))) {
        return;
    };
    IF_SETONVARTRANSMIT(callback(script9999, int0, int1, 3814, 1), int0);
    var int2 = MIN(IF_GETWIDTH(int0), IF_GETHEIGHT(int0));
    var int3 = struct_getparam(int1, 3797);
    var int4 = struct_getparam(int1, 4405);
    if ((int4 != -1)) {
        var int1 = int4;
    };
    int1 = script9984(int1, int3);
    var int5 = struct_getparam(int1, 3909);
    var int6 = struct_getparam(int1, 3808);
    var int7 = struct_getparam(int1, 3807);
    var int8 = false;
    var int9 = false;
    switch (int3) {
        case 2: {
            IF_SETONMOUSEOVER(callback(script8087, 0, -2147483645), int0);
            IF_SETONMOUSELEAVE(callback(script8087, 1, -2147483645), int0);
            int8 = 1;
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
            int8 = 1;
            break;
        }
        case 4: {
            int9 = true;
            break;
        }
        case 5: {
            IF_SETNOCLICKTHROUGH(1, int0);
            int9 = true;
            break;
        }
    };
    CC_DELETEALL(int0);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETSIZE(int6, int7, 0, 0);
    CC_SETGRAPHIC(int5);
    CC_SETHIDE(int8);
    IF_SETHIDE(int9, int0);
    return;
}