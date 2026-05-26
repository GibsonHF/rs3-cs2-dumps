//
function script16402(int0: number, int1: number): void {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    [int2, int3, int4, int5] = script14244();
    if ((int0 > (int4 - int2))) {
        script16394();
        return;
    };
    var int6 = (int2 + (((int4 - int2) / 2) - (int0 / 2)));
    IF_SETPOSITION(int6, (int3 + 33), 0, 0, 62586888);
    return;
}