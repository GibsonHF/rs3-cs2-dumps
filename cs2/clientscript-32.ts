//
function script32(int0: number, int1: number, int2: number): void {
    if ((((int0 == -1) || (int1 == -1)) || (int2 == -1))) {
        return;
    };
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    var int3 = -1;
    CC_CREATE(int1, 5, ++int3);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_CREATE(int1, 5, ++int3);
    CC_SETPOSITION(0, 0, 2, 0);
    CC_SETHFLIP(1);
    CC_CREATE(int1, 5, ++int3);
    CC_SETPOSITION(0, 0, 0, 2);
    CC_SETVFLIP(1);
    CC_CREATE(int1, 5, ++int3);
    CC_SETPOSITION(0, 0, 2, 2);
    CC_SETVFLIP(1);
    CC_SETHFLIP(1);
    int3 = -1;
    CC_CREATE(int2, 5, ++int3);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_CREATE(int2, 5, ++int3);
    CC_SETPOSITION(0, 0, 2, 0);
    CC_SETHFLIP(1);
    CC_CREATE(int2, 5, ++int3);
    CC_SETPOSITION(0, 0, 0, 2);
    CC_SETVFLIP(1);
    CC_CREATE(int2, 5, ++int3);
    CC_SETPOSITION(0, 0, 2, 2);
    CC_SETVFLIP(1);
    CC_SETHFLIP(1);
    if ((IF_FIND(int0) == 1)) {
        cc_setparam(6376, int1);
        cc_setparam(6377, int2);
        CC_SETONVARTRANSMIT(callback(script1143, int0, 3814, 1));
        script1273(int0);
        script10455(int0);
    };
    return;
}