//
function script16359(): void {
    var int0 = -1 as dbrow;
    var int1 = comp(-1, 65535);
    var int2 = 0;
    var int3 = 0;
    var int4 = comp(-1, 65535);
    while ((++int2 <= 3)) {
        switch (int2) {
            case 1: {
                int0 = script438(varbitplayer_29986);
                int1 = comp(935, 6);
                int4 = comp(935, 48);
                int3 = dbrow_getfield(script438(varbitplayer_29986), 504001, 0);
                break;
            }
            case 2: {
                int0 = script438(varbitplayer_29987);
                int1 = comp(935, 9);
                int4 = comp(935, 49);
                int3 = dbrow_getfield(script438(varbitplayer_29987), 504001, 0);
                break;
            }
            case 3: {
                int0 = script438(varbitplayer_29988);
                int1 = comp(935, 13);
                int4 = comp(935, 15);
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
        IF_SETMODELLIGHTING(256, 1024, 0, 255, 255, 255, 3, -2, -6, 3224 as material, int1);
    };
    if ((varbitplayer_29983 == 1)) {
        IF_SETHIDE(true, comp(935, 4));
        IF_SETHIDE(false, comp(935, 11));
    } else {
        IF_SETHIDE(false, comp(935, 4));
        IF_SETHIDE(true, comp(935, 11));
    };
    return;
}