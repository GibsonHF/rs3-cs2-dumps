//
function script14422(int0: int, int1: int, int2: int, int3: unknown_int, int4: unknown_int, int5: unknown_int, int6: unknown_int, int7: component, int8: int): void {
    if (((CC_FIND(int7, int8) == 1) || ((int8 == -1) && (IF_FIND(int7) == 1)))) {
        CC_SETOPKEY(int0, int1, int2, int3, int4, int5, int6, -1, 0, -1, 0);
        CC_SETOPKEYIGNOREHELD(int0);
    };
    return;
}