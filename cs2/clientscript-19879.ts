//
function script19879(int0: unknown_int, int1: int): [obj, int, int, var_reference, int] {
    var int2 = -1 as obj;
    var int3 = 0;
    var int4 = 0;
    var int5 = -1 as var_reference;
    var int6 = 0;
    [int2, int3, int4, int5, int6] = dbrow_getfield(15627 as dbrow, 1294352, int1);
    return [int2, int3, int4, int5, int6];
}