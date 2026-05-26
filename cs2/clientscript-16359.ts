//
function script16359(): void {
    var int0 = -1 as dbrow;
    var int1 = -1;
    var int2 = 0;
    var int3 = 0;
    var int4 = -1;
    while ((++int2 <= 3)) {
        switch (int2) {
            case 1: {
                int0 = script438(varbitplayer_29986);
                int1 = 61276166;
                int4 = 61276208;
                int3 = dbrow_getfield(script438(varbitplayer_29986), 504001, 0);
                break;
            }
            case 2: {
                int0 = script438(varbitplayer_29987);
                int1 = 61276169;
                int4 = 61276209;
                int3 = dbrow_getfield(script438(varbitplayer_29987), 504001, 0);
                break;
            }
            case 3: {
                int0 = script438(varbitplayer_29988);
                int1 = 61276173;
                int4 = 61276175;
                int3 = dbrow_getfield(script438(varbitplayer_29988), 504001, 0);
                break;
            }
        };
        script446(int1, int0, 1);
        script447(int1, int0);
        script2690(int1, int0);
        if ((int3 != -1)) {
            IF_SETTEXT(`${script10979(int3)}${inttostring(dbrow_getfield(int0, 503984, 0), 10)} x ${script10876(int3)} prize`, int4);
        };
        IF_SETMODELLIGHTING(256, 1024, 0, 255, 255, 255, 3, -2, -6, 3224, int1);
    };
    if ((varbitplayer_29983 == 1)) {
        IF_SETHIDE(1, 61276164);
        IF_SETHIDE(0, 61276171);
    } else {
        IF_SETHIDE(0, 61276164);
        IF_SETHIDE(1, 61276171);
    };
    return;
}