//
function script6724(int0: component, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int): void {
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