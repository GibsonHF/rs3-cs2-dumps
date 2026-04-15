//
function script12711(): [int, int] {
    var int0 = 0;
    var int1 = MAX(0, (varbitplayer_33689 / (500 / 100)));
    var int2 = (500 / 10);
    var int3 = (64 / 4);
    var int4 = ((500 / 10) * 9);
    var int5 = ((64 / 4) * 3);
    var int6 = 1;
    if ((varbitplayer_33689 < int2)) {
        int0 = ((500 / 10) / (64 / 4));
        int6 = MIN((64 / 4), MAX(1, (varbitplayer_33689 / int0)));
    } else if ((varbitplayer_33689 < int4)) {
        int0 = (((500 / 5) * 2) / (64 / 4));
        int6 = (((varbitplayer_33689 - (int2 - 1)) / int0) + int3);
    } else {
        int0 = ((500 / 10) / (64 / 4));
        int6 = (((varbitplayer_33689 - (int4 - 1)) / int0) + int5);
    };
    return [int1, int6];
}