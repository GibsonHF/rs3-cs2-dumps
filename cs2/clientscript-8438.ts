//
function script8438(int0: dbrow, int1: int): achievement {
    var int2 = -1 as achievement;
    var int3 = -1 as category;
    var int4 = -1 as obj;
    [int2, int3, int4] = dbrow_getfield(int0, 974896, int1);
    return int2;
}