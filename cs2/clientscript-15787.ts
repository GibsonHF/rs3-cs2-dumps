//
function script15787(): [dbrow, boolean, unknown_int, unknown_int, unknown_int] {
    var int0 = -1 as dbrow;
    var int1 = false;
    var int2 = 1;
    var int3 = 0;
    var int4 = 0;
    if ((varbitplayer_49044 >= 88)) {
        int0 = 3935 as dbrow;
    } else if (((varbitplayer_49044 > 60) || (varbitplayer_49048 == 1))) {
        int0 = 3934 as dbrow;
    } else if (((varbitplayer_49044 > 60) || (varbitplayer_49047 == 1))) {
        int0 = 3933 as dbrow;
    } else if (((varbitplayer_49044 >= 20) && (int1 == true))) {
        int0 = 3932 as dbrow;
    } else {
        int0 = 3931 as dbrow;
        int1 = false;
    };
    if ((varbitplayer_49044 >= 48)) {
        int3 = 1;
    };
    if ((varbitplayer_49044 >= 95)) {
        int4 = 1;
    };
    return [int0, int1, int2, int3, int4];
}