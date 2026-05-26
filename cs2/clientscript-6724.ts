//
function script6724(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number): void {
    var int9 = 0;
    var int10 = 1;
    [int9, int10] = script6727(int6);
    if ((int9 == 0)) {
        return;
    };
    if ((CC_FINDBYCATEGORY(int0, int3, int4) == 1)) {
        script6728(int1, int2, int10, int7, int8);
    };
    if ((CC_FINDBYCATEGORY(int0, int3, int5) == 1)) {
        script6728(int1, int2, int10, int7, int8);
    };
    return;
}