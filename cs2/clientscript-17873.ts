//
function script17873(int0: dbrow, int1: int): boolean {
    if ((int0 == -1 as dbrow)) {
        return false;
    };
    script17927();
    var int2 = false;
    var int3 = 0;
    if ((int0 == 7906 as dbrow)) {
        var int0 = varplayer_11339;
    };
    if ((int1 > script17890(int0))) {
        return false;
    };
    [int3, int2] = dbrow_getfield(int0, 991344, (int1 - 1));
    if ((int3 != int1)) {
        script12478(`Our reward data is OUT OF SYNC. Dbrow has level ${inttostring(int3, 10)} for level ${inttostring(int1, 10)}`);
        return false;
    };
    return int2;
}