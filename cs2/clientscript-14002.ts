//
function script14002(int0: int, int1: int, int2: int, int3: unknown_int, int4: unknown_int, int5: component, int6: int): void {
    if (((CC_FIND(int5, int6) == 1) || ((int6 == -1) && (IF_FIND(int5) == 1)))) {
        CC_SETOPKEY(int0, int1, int2, int3, int4, -1, 0, -1, 0, -1, 0);
        CC_SETOPKEYIGNOREHELD(int0);
    };
    return;
}