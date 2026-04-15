//
function script10409(int0: component, int1: struct): void {
    if (((int0 == comp(-1, 65535)) || (int1 == -1 as struct))) {
        return;
    };
    IF_SETONVARTRANSMIT(callback(script10408, int0, int1, 3814, 1), int0);
    CC_DELETEALL(int0);
    var int2 = struct_getparam(int1, 3797);
    var int3 = struct_getparam(int1, 4405);
    if ((int3 != -1)) {
        var int1 = int3;
    };
    int1 = script9984(int1, int2);
    if ((int1 == -1 as struct)) {
        return;
    };
    var int4 = struct_getparam(int1, 1387);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETGRAPHIC(int4);
    return;
}