//
function script3875(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if ((CC_FIND(int3, int4) == 1)) {
        CC_SETOPKEY(int0, int1, int2, -1, 0, -1, 0, -1, 0, -1, 0);
        CC_SETOPKEYRATE(int0, 6, 50);
    } else if (((int4 == -1) && (IF_FIND(int3) == 1))) {
        CC_SETOPKEY(int0, int1, int2, -1, 0, -1, 0, -1, 0, -1, 0);
        CC_SETOPKEYRATE(int0, 6, 50);
    };
    return;
}