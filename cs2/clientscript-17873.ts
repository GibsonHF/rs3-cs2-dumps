//
function script17873(int0: number, int1: number): number {
    if ((int0 == -1)) {
        return 0;
    };
    script17927();
    var int2 = 0;
    var int3 = 0;
    if ((int0 == 7906)) {
        var int0 = varplayer_11339;
    };
    if ((int1 > script17890(int0))) {
        return 0;
    };
    [int3, int2] = dbrow_getfield(int0, 991344, (int1 - 1));
    if ((int3 != int1)) {
        script12478(`Our reward data is OUT OF SYNC. Dbrow has level ${inttostring(int3, 10)} for level ${inttostring(int1, 10)}`);
        return 0;
    };
    return int2;
}