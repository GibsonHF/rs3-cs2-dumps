//
function script32(int0: component, int1: component, int2: component): void {
    if ((((int0 == comp(-1, 65535)) || (int1 == comp(-1, 65535))) || (int2 == comp(-1, 65535)))) {
        return;
    };
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    var int3 = -1;
    CC_CREATE(int1, 5, ++int3);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_CREATE(int1, 5, ++int3);
    CC_SETPOSITION(0, 0, 2, 0);
    CC_SETHFLIP(true);
    CC_CREATE(int1, 5, ++int3);
    CC_SETPOSITION(0, 0, 0, 2);
    CC_SETVFLIP(true);
    CC_CREATE(int1, 5, ++int3);
    CC_SETPOSITION(0, 0, 2, 2);
    CC_SETVFLIP(true);
    CC_SETHFLIP(true);
    int3 = -1;
    CC_CREATE(int2, 5, ++int3);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_CREATE(int2, 5, ++int3);
    CC_SETPOSITION(0, 0, 2, 0);
    CC_SETHFLIP(true);
    CC_CREATE(int2, 5, ++int3);
    CC_SETPOSITION(0, 0, 0, 2);
    CC_SETVFLIP(true);
    CC_CREATE(int2, 5, ++int3);
    CC_SETPOSITION(0, 0, 2, 2);
    CC_SETVFLIP(true);
    CC_SETHFLIP(true);
    if ((IF_FIND(int0) == 1)) {
        cc_setparam(6376, int1);
        cc_setparam(6377, int2);
        CC_SETONVARTRANSMIT(callback(script1143, int0, 3814, 1));
        script1273(int0);
        script10455(int0);
    };
    return;
}