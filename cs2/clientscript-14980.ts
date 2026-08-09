//
function script14980(int0: number, int1: number): void {
    CC_DELETEALL(int0);
    var int2 = -1;
    int2 = (int2 + 1);
    while ((int2 < int1)) {
        CC_CREATE(int0, 5, int2);
        CC_SETSIZE(40, 36, 0, 0);
        CC_SETPOSITION((16 + (MODULO(int2, 4) * 45)), (5 + ((int2 / 4) * 41)), 0, 0);
    };
    return;
}