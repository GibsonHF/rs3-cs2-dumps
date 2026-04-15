//
function script16481(int0: int, int1: int, int2: dbrow): [obj, int] {
    var int3 = -1 as dbrow;
    var int4 = -1 as obj;
    var int5 = 0;
    var int6 = 0;
    [int6, int3, int6] = dbrow_getfield(int2, 602112, int0);
    [int4, int5, int6, int6, int6, int6, int6, int6] = dbrow_getfield(int3, 413696, int1);
    return [int4, int5];
}