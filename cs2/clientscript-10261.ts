//
function script10261(int0: number, int1: number, int2: number): void {
    var int3 = SCALE(int0, int1, 100);
    int3 = SCALE(114, 100, int3);
    IF_SETSIZE(int3, 0, 0, 1, int2);
    return;
}