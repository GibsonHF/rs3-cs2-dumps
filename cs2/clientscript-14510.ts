//
function script14510(int0: number): number {
    var int1 = 0;
    var int2 = 0;
    [int1, int2] = dbrow_getfield(int0, 344144, 0);
    if ((int1 == 0)) {
        return 0;
    };
    if (((int2 == 0) && (script14502(int0) == 2))) {
        return 0;
    };
    return 1;
}