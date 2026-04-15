//
function script20148(int0: int): void {
    var int1 = script20117(varplayer_12314);
    if ((script20132(int1) == 0)) {
        return;
    };
    var int2 = dbrow_getfield(int1, 1335424, 0);
    var int3 = dbrow_getfield(int2, 1339392, varbitplayer_58407);
    var int4 = DB_GETFIELDCOUNT(int3, 1343504);
    if (((varbitplayer_58408 == 0) && (int0 == -1))) {
        varbitplayer_58408 = (int4 - 1);
    } else {
        varbitplayer_58408 = MODULO((varbitplayer_58408 + int0), int4);
    };
    return;
}