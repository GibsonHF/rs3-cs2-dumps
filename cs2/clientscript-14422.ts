//
function script14422(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number): void {
    if (((CC_FIND(int7, int8) == 1) || ((int8 == -1) && (IF_FIND(int7) == 1)))) {
        CC_SETOPKEY(int0, int1, int2, int3, int4, int5, int6, -1, 0, -1, 0);
        CC_SETOPKEYIGNOREHELD(int0);
    };
    return;
}