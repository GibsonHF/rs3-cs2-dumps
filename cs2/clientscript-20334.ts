//
function script20334(int0: number, int1: number, int2: number, int3: number, int4: number): number {
    var int5 = 0;
    var string0 = "";
    var string1 = "";
    var int6 = varplayer_10706;
    if ((((TESTBIT(int0, int1) == int2) && (int3 == int4)) && (STAFFMODLEVEL() < 2))) {
        if (((int1 == 24) && (varbitplayer_58378 == 1))) {
            if ((((PLAYERMEMBER() == true) || (varplayer_1750 > varplayer_1752)) || (varplayer_1751 > varplayer_1752))) {
                int6 = varplayer_12433;
            };
        };
        if ((int6 > 0)) {
            [int0, string0, int5, string0, int5, int5, string1] = WORLDLIST_SPECIFIC(int6);
            if ((TESTBIT(int0, int1) == (1 - int2))) {
                if ((unk11027(int6, string1) == 0)) {
                    unk11060();
                    script16919();
                    return 1;
                };
            } else {
                unk11060();
                script16919();
                return 1;
            };
        } else {
            unk11060();
            script16919();
            return 1;
        };
    };
    script16919();
    return 0;
}