//
function script9312(int0: int, int1: int): void {
    var int2 = 0;
    var int3 = 0;
    [int2, int3] = VIEWPORT_GETZOOM();
    int2 = MAX(144, MIN(340, (int2 + int0)));
    int3 = MAX(180, MIN(425, (int3 + int1)));
    VIEWPORT_SETZOOM(int2, int3);
    return;
}