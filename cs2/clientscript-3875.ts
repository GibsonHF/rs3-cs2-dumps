//
function script3875(int0: int, int1: int, int2: int, int3: component, int4: int): void {
    if (((CC_FIND(int3, int4) == 1) || ((int4 == -1) && (IF_FIND(int3) == 1)))) {
        CC_SETOPKEY(int0, int1, int2, -1, 0, -1, 0, -1, 0, -1, 0);
        CC_SETOPKEYRATE(int0, 6, 50);
    };
    return;
}