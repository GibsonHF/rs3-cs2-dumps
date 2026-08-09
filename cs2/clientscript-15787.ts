//
function script15787(): [number, number, number, number, number] {
    var int0 = -1;
    var int1 = 0;
    var int2 = 1;
    var int3 = 0;
    var int4 = 0;
    if ((varbitplayer_49044 >= 88)) {
        int0 = 3935;
    } else if (((varbitplayer_49044 > 60) || (varbitplayer_49048 == 1))) {
        int0 = 3934;
    } else if (((varbitplayer_49044 > 60) || (varbitplayer_49047 == 1))) {
        int0 = 3933;
    } else if ((varbitplayer_49044 >= 20)) {
        if ((int1 == 1)) {
            int0 = 3932;
        } else {
            int0 = 3931;
            int1 = 0;
        };
    } else {
        int0 = 3931;
        int1 = 0;
    };
    if ((varbitplayer_49044 >= 48)) {
        int3 = 1;
    };
    if ((varbitplayer_49044 >= 95)) {
        int4 = 1;
    };
    return [int0, int1, int2, int3, int4];
}