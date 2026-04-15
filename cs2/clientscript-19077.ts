//
function script19077(int0: dbrow, int1: int): [obj, int] {
    var int2 = dbrow_getfield(int0, 1187904, int1);
    var int3 = 1;
    if ((int2 == -1 as obj)) {
        [int2, int3] = dbrow_getfield(int0, 1187888, int1);
    };
    return [int2, int3];
}