//
function script20149(): dbrow {
    var int0 = script20117(varplayer_12314);
    if ((script20132(int0) == 0)) {
        return -1 as dbrow;
    };
    var int1 = dbrow_getfield(int0, 1335424, 0);
    var int2 = dbrow_getfield(int1, 1339392, varbitplayer_58407);
    if ((int2 == -1 as dbrow)) {
        return -1 as dbrow;
    };
    var int3 = dbrow_getfield(int2, 1343504, varbitplayer_58408);
    return int3;
}