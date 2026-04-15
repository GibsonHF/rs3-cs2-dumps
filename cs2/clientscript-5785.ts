//
function script5785(int0: int, int1: int): void {
    if ((int1 == -1)) {
        return;
    };
    var int2 = 0;
    var int3 = 0;
    var int4 = script5798(int1);
    if ((int0 > 1)) {
        [int2, int3] = script5787(MIN(int0, script5792()));
    } else {
        int3 = script14337();
    };
    if (((int4 == int0) && ((int3 - int1) == 1))) {
        return;
    };
    if ((int1 == int3)) {
        script6316(int0, 1);
        if ((script6316(int4, -1) == 1)) {
            if ((int4 <= int0)) {
                var int0 = (int0 - 1);
            };
            if ((varbitplayer_45141 > 1)) {
                varbitplayer_45141 = int0;
            };
        };
        return;
    };
    script5780(int0, int1, int3);
    return;
}