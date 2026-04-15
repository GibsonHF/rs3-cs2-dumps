//
function script15931(int0: int, int1: int, int2: int, int3: unknown_int, int4: unknown_int, int5: unknown_int, int6: unknown_int, int7: unknown_int, int8: unknown_int, int9: component, int10: int): void {
    if (((CC_FIND(int9, int10) == 1) || ((int10 == -1) && (IF_FIND(int9) == 1)))) {
        CC_SETOPKEY(int0, int1, int2, int3, int4, int5, int6, int7, int8, -1, 0);
        CC_SETOPKEYIGNOREHELD(int0);
    };
    return;
}