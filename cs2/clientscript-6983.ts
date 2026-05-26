//
function script6983(int0: number, int1: number, int2: number): number {
    var int3 = (COORDX(int1) - COORDX(int2));
    int3 = (int3 - 64);
    var int4 = (COORDZ(int1) - COORDZ(int2));
    return MOVECOORD(int0, int3, 0, int4);
}