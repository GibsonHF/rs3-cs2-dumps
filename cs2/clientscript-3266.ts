//
function script3266(int0: int): [unknown_int, int] {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    if (((int0 == 0) && (varbitplayer_2365 != 0))) {
        return [1, 0];
    };
    while ((int1 < MIN((varbitplayer_2365 - 1), 15))) {
        int2 = (int2 + (22 - int3));
        int3 = MIN((int3 + 3), 19);
        if ((int0 == int2)) {
            return [1, (int1 + 1)];
        };
        int1 = (int1 + 1);
    };
    return [0, 0];
}