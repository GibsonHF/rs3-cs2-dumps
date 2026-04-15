//
function script16252(int0: dbrow): unknown_int {
    if ((PLATFORMTYPE() != 3)) {
        return 1;
    };
    var int1 = script11566(int0);
    if (((int1 > -1) && (TESTBIT(varclient_7036, int1) == 1))) {
        if ((varbitplayer_46175 == 1)) {
            return 1;
        };
        return 0;
    };
    return 1;
}