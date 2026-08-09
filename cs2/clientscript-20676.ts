//
function script20676(int0: number, int1: number): [number, number] {
    if ((int0 == -1)) {
        return [-1, -1];
    };
    var int2 = -1;
    var int3 = -1;
    [int2, int3] = dbrow_getfield(int0, 1441888, int1);
    return [int2, int3];
}