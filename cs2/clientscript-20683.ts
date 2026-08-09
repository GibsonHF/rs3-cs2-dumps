//
function script20683(int0: number, int1: number): [number, number, string] {
    if ((int0 == -1)) {
        return [-1, -1, "null"];
    };
    var int2 = -1;
    var int3 = -1;
    var string0 = "";
    [int2, int3, string0] = dbrow_getfield(int0, 1442000, int1);
    return [int2, int3, string0];
}