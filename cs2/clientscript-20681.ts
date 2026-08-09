//
function script20681(int0: number, int1: number): [number, number, number, string] {
    if ((int0 == -1)) {
        return ["", -1, -1, -1];
    };
    var string0 = "";
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    [string0, int2, int3, int4] = dbrow_getfield(int0, 1441984, int1);
    return [string0, int2, int3, int4];
}