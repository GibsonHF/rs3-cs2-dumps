//
function script16272(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    if ((CC_FINDBYCATEGORY(int3, int4, int5) == 1)) {
        CC_SETOPKEY(int0, int1, int2, -1, 0, -1, 0, -1, 0, -1, 0);
        CC_SETOPKEYIGNOREHELD(int0);
    };
    return;
}