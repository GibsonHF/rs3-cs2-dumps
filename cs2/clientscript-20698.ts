//
function script20698(int0: dbrow, int1: int): [var_reference, string] {
    if ((int0 == -1 as dbrow)) {
        return [-1 as var_reference, ""];
    };
    var int2 = -1 as var_reference;
    var string0 = "";
    stack(dbrow_getfield(int0, 1450048, int1));
    [int2, string0] = stack();
    return [int2, string0];
}