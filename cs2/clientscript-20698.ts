//
function script20698(int0: number, int1: number): [number, string] {
    if ((int0 == -1)) {
        return [-1, ""];
    };
    var int2 = -1;
    var string0 = "";
    [int2, string0] = dbrow_getfield(int0, 1450048, int1);
    return [int2, string0];
}