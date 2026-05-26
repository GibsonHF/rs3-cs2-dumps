//
function script6348(int0: number): [number, number, number] {
    var int1 = -1;
    var int2 = -1;
    var int3 = 0;
    [int1, int2, int3] = script6380(int0);
    if (((int1 == -1) && (int3 == -1))) {
        return [-1, -1, -1];
    };
    var int4 = -1;
    var int5 = -1;
    [int4, int5] = script6349(int1, int2, int3);
    return [int4, int5, int3];
}