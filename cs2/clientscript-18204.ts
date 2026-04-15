//
function script18204(int0: struct, int1: dbrow, int2: component): void {
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    if ((IF_FIND[1](int2) == 1)) {
        int3 = (CC_GETX[1]() - 2);
        int4 = (CC_GETY[1]() - 2);
        int6 = (CC_GETWIDTH[1]() + (2 * 2));
        int5 = (CC_GETHEIGHT[1]() + (2 * 2));
        if ((IF_FIND[1](IF_GETLAYER(struct_getparam(int0, 4037))) == 1)) {
            cc_setparam[1](6361, dbrow_getfield(int1, 667648, 0));
            CC_SETPOSITION[1](int3, int4, 0, 0);
            CC_SETSIZE[1](int6, int5, 0, 0);
            CC_SETONMOUSEREPEAT[1](callback(script13180, -2147483645, -2147483643, int1, 1));
        };
    };
    return;
}