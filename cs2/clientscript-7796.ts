//
function script7796(int0: component, int1: struct): void {
    if (((int0 == comp(-1, 65535)) || (int1 == -1 as struct))) {
        return;
    };
    IF_SETONVARTRANSMIT(callback(script9976, int0, int1, 3814, 1), int0);
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
    var int9 = (int7 * 2);
    var int10 = 0;
    IF_SETSIZE(IF_GETWIDTH(int0), int8, 0, 0, int0);
    CC_DELETEALL(int0);
    CC_CREATE(int0, 5, int10);
    CC_SETSIZE(int7, int8, 0, 0);
    CC_SETPOSITION(0, 0, 0, 1);
    CC_SETGRAPHIC(int4);
    CC_SETTILING(true);
    int10 = (int10 + 1);
    CC_CREATE(int0, 5, int10);
    CC_SETSIZE(int9, int8, 1, 0);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETGRAPHIC(int5);
    CC_SETTILING(true);
    int10 = (int10 + 1);
    CC_CREATE(int0, 5, int10);
    CC_SETSIZE(int7, int8, 0, 0);
    CC_SETPOSITION(0, 0, 2, 1);
    CC_SETGRAPHIC(int6);
    CC_SETTILING(true);
    int10 = (int10 + 1);
    return;
}