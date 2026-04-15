//
function script6448(int0: component, int1: int, int2: unknown_int, int3: unknown_int, int4: int): void {
    var int5 = 0;
    var int6 = (150 + int4);
    var int7 = (500 + int4);
    if ((int3 == 1)) {
        int6 = (700 + int4);
        int7 = (1000 + int4);
    };
    if ((CC_FIND(int0, int1) == 1)) {
        int5 = CC_GETMODELZOOM();
        if ((int2 < 0)) {
            int5 = MAX(int6, (int5 - 15));
        } else {
            int5 = MIN(int7, (int5 + 15));
        };
        CC_SETMODELZOOM(int5);
    };
    return;
}