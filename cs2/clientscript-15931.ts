//
function script15931(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number): void {
    if ((CC_FIND(int9, int10) == 1)) {
        CC_SETOPKEY(int0, int1, int2, int3, int4, int5, int6, int7, int8, -1, 0);
        CC_SETOPKEYIGNOREHELD(int0);
    } else if (((int10 == -1) && (IF_FIND(int9) == 1))) {
        CC_SETOPKEY(int0, int1, int2, int3, int4, int5, int6, int7, int8, -1, 0);
        CC_SETOPKEYIGNOREHELD(int0);
    };
    return;
}