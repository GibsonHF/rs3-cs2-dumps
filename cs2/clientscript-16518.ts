//
function script16518(int0: int): [obj, int] {
    var int1 = 5952 as dbrow;
    var int2 = DB_GETFIELDCOUNT(int1, 729088);
    var int3 = -1 as obj;
    var int4 = 0;
    [int3, int4] = dbrow_getfield(5952 as dbrow, 729088, MODULO(int0, int2));
    return [int3, int4];
}