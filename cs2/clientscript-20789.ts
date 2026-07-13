//
function script20789(int0: number, int1: number, int2: number): number {
    var int3 = 0;
    var int4 = 0;
    [int3, int4] = script11980("", 53299);
    int3 = (int3 + (4 * 4));
    int3 = (++int3 + 3);
    int3 = (int3 + 16);
    if (((int2 == 1) && (varclient_8428 != -1))) {
        var int0 = (varclient_8428 + int3);
    };
    var int5 = (int0 - int3);
    var int6 = ((int5 - 4) / (80 + 4));
    if ((int1 > 0)) {
        int3 = (int3 + (4 * 2));
        int3 = (int3 + int1);
        int3 = (int3 + 3);
        int6 = 4;
    };
    int6 = MIN(6, MAX(2, int6));
    return ((int3 + (int6 * (80 + 4))) - 4);
}