//
function script17976(int0: int, int1: int, int2: int): void {
    var int3 = script17874(varplayer_11339, int1);
    var int4 = script17868(7906 as dbrow, int1);
    var int5 = 1;
    if ((int1 <= script17862(7906 as dbrow))) {
        int5 = 0;
    };
    var int6 = -1 as dbrow;
    var int7 = -1 as dbrow;
    var int8 = -1 as dbrow;
    var int9 = -1 as dbrow;
    var int10 = -1 as dbrow;
    var int11 = 0;
    [int11, int6, int7, int8, int9, int10] = script17878(varplayer_11339, int1);
    if (((int11 <= 0) && (int2 != 1))) {
        script12478(`Level with 0 rewards at level ${inttostring(int1, 10)}`);
    };
    var int12 = script17969(varplayer_11339, int1, int11, int2);
    script17978(int0, comp(1227, 41), int12, int11, -1, int3, int1, int4, int5, -1, -1, int2);
    return;
}