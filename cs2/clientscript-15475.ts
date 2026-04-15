//
function script15475(int0: int): [obj, int] {
    var int1 = script15474(varbitplayer_48869);
    var int2 = DB_GETFIELDCOUNT(int1, 401424);
    if ((int0 > int2)) {
        return [-1 as obj, 0];
    };
    var int3 = -1 as obj;
    var int4 = 0;
    var int5 = 0;
    [int3, int4, int5] = dbrow_getfield(int1, 401424, int0);
    return [int3, int4];
}