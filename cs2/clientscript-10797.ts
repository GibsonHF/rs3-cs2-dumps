//
function script10797(int0: component): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    var int1 = script10495(7);
    var int2 = script10495(8);
    var int3 = 0;
    CC_DELETEALL(int0);
    CC_CREATE(int0, 9, int3);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETCOLOUR(int2);
    CC_SETSIZE(1, 0, 1, 0);
    int3 = (int3 + 1);
    CC_CREATE(int0, 9, int3);
    CC_SETPOSITION(0, 1, 0, 0);
    CC_SETCOLOUR(int1);
    CC_SETSIZE(1, 0, 1, 0);
    int3 = (int3 + 1);
    CC_CREATE(int0, 9, int3);
    CC_SETPOSITION(0, 2, 0, 2);
    CC_SETCOLOUR(int2);
    CC_SETSIZE(1, 0, 1, 0);
    int3 = (int3 + 1);
    CC_CREATE(int0, 9, int3);
    CC_SETPOSITION(0, 1, 0, 2);
    CC_SETCOLOUR(int1);
    CC_SETSIZE(1, 0, 1, 0);
    int3 = (int3 + 1);
    return;
}