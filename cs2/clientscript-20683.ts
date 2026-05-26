//
function script20683(int0: number, int1: number): [number, number, string] {
    if ((int0 == -1)) {
        return [-1, -1, "null"];
    };
    var int2 = -1;
    var int3 = -1;
    var string0 = "";
    stack(int0);
    stack(1442000);
    stack(int1);
    dbrow_getfield();
    [int2, int3, string0] = stack();
    return [int2, int3, string0];
}