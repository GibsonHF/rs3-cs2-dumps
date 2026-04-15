//
function script2859(int0: int, int1: int, int2: int, int3: component, int4: int): void {
    var int5 = int2;
    var int6 = 0;
    var int0 = (124 - ((10 * int0) + 15));
    var int4 = (124 - ((10 * int4) + 15));
    if ((int4 < int0)) {
        int6 = ((int0 - int4) / 12);
    } else {
        int6 = ((int4 - int0) / 12);
    };
    int6 = (int6 + 1);
    if ((int0 > int2)) {
        int5 = MIN(int0, (int2 + int6));
    } else {
        int5 = MAX(int0, (int2 - int6));
    };
    IF_SETPOSITION((int1 + 1), int5, 0, 0, int3);
    return;
}