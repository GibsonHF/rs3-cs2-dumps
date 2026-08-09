//
function script14631(int0: number): number {
    var int1 = dbrow_getfield(int0, 368640, 0);
    var int2 = 0;
    int2 = (int2 + 1);
    while ((int2 <= 1)) {
        if ((script14651(int2) == int1)) {
            return int2;
        };
    };
    return -1;
}