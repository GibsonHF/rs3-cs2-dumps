//
function script12407(int0: component): void {
    var int1 = script3510();
    var int2 = 0;
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = -1;
    var int6 = comp(-1, 65535);
    var int7 = comp(-1, 65535);
    [int3, int4, int5, int6, int7] = script12406(int0);
    CC_DELETEALL(int3);
    CC_DELETEALL(int4);
    CC_DELETEALL(int7);
    while ((int2 < int1)) {
        if ((int4 != comp(-1, 65535))) {
            CC_CREATE(int7, 5, int2);
            CC_SETSIZE(36, 32, 0, 0);
            CC_SETPOSITION(18, 7, 0, 0);
            CC_CREATE(int4, 5, int2);
            CC_SETSIZE(36, 32, 0, 0);
            CC_SETPOSITION(18, 7, 0, 0);
        };
        int2 = (int2 + 1);
    };
    IF_SETSIZE(16, 84, 1, 0, int0);
    IF_SETONINVTRANSMIT(callback(script12408, -2147483645, 795, 889, 2), int0);
    IF_SETONVARTRANSMIT(callback(script12408, -2147483645, 6525, 6525, 6525, 6525, 7110, 7110, 7110, 7110, 4559, 4559, 10), int0);
    return;
}