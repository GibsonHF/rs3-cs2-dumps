//
function script1848(int0: int, int1: int): void {
    var int2 = script10405(int0);
    var int3 = script8418(int2, 0);
    var int4 = struct_getparam(int2, 3509);
    var int5 = struct_getparam(int2, 3508);
    var int6 = MAX(MIN((int1 - IF_GETSCROLLX(int4)), IF_GETWIDTH(int4)), 0);
    var int7 = MAX(MIN(((IF_GETSCROLLX(int4) + IF_GETWIDTH(int4)) - (int1 + struct_getparam(int3, 3578))), IF_GETWIDTH(int4)), 0);
    if ((IF_GETSCROLLWIDTH(int4) != 0)) {
        int6 = ((int6 + IF_GETX(int4)) - struct_getparam(int3, 3583));
        int7 = ((int7 + IF_GETX(int4)) - struct_getparam(int3, 3583));
    };
    if ((CC_FIND[1](int5, 5) == 1)) {
        CC_SETSIZE[1](int6, CC_GETHEIGHT[1](), 0, 0);
    };
    if ((CC_FIND[1](int5, 6) == 1)) {
        CC_SETSIZE[1](int7, CC_GETHEIGHT[1](), 0, 0);
    };
    return;
}