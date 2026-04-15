//
function script20681(int0: dbrow, int1: int): [unknown_string, var_reference, unknown_int, unknown_int] {
    if ((int0 == -1 as dbrow)) {
        return ["", -1 as var_reference, -1, -1];
    };
    var string0 = "";
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    stack(int0);
    stack(1441984);
    stack(int1);
    dbrow_getfield();
    [string0, int2, int3, int4] = stack();
    return [string0, int2, int3, int4];
}