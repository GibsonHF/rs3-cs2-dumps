//
function script14670(int0: dbrow): unknown_int {
    if ((int0 == -1 as dbrow)) {
        return -1;
    };
    var int1 = script14673(int0);
    if ((int1 == 0)) {
        if ((dbrow_getfield(int0, 372880, 0) == true)) {
            return 3;
        };
        return 2;
    };
    if ((varbitplayer_46468 <= dbrow_getfield(int0, 372752, 0))) {
        return 2;
    };
    if ((script14674(int0) == 0)) {
        return 1;
    };
    return 0;
}