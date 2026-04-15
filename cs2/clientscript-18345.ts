//
function script18345(): void {
    var int0 = -1 as dbrow;
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = comp(-1, 65535);
    var int6 = -1;
    var int7 = -1 as graphic;
    var int8 = -1 as graphic;
    var int9 = -1 as graphic;
    var string0 = "";
    var string1 = "";
    var int10 = 0;
    var int11 = 0;
    while ((++int11 <= 3)) {
        switch (int11) {
            case 1: {
                int0 = script17355(varbitplayer_54757);
                int2 = 83296280;
                int1 = 83296274;
                int3 = 83296278;
                int4 = 83296279;
                int5 = comp(1271, 21);
                int6 = 83296274;
                break;
            }
            case 2: {
                int0 = script17355(varbitplayer_54758);
                int2 = 83296289;
                int1 = 83296283;
                int3 = 83296287;
                int4 = 83296288;
                int5 = comp(1271, 30);
                int6 = 83296283;
                break;
            }
            case 3: {
                int0 = script17355(varbitplayer_54759);
                int2 = 83296298;
                int1 = 83296292;
                int3 = 83296296;
                int4 = 83296297;
                int5 = comp(1271, 39);
                int6 = 83296292;
                break;
            }
            default: {
                script12478(`Attempting to generate potion in incorrect position: tsotring. Setting up default potion.`);
                int0 = script17355(1);
                int2 = 83296289;
                int1 = 83296283;
                int3 = 83296287;
                int4 = 83296288;
                int5 = comp(1271, 30);
                int6 = 83296283;
                break;
            }
        };
        if ((int0 == -1 as dbrow)) {
            script12478(`Null potion option with potions: ${inttostring(varbitplayer_54757, 10)},${inttostring(varbitplayer_54758, 10)},${inttostring(varbitplayer_54759, 10)}, using default potion.`);
            int0 = 12870 as dbrow;
        };
        int10 = dbrow_getfield(int0, 1089616, 0);
        int7 = dbrow_getfield(int0, 1089584, 0);
        int8 = dbrow_getfield(int0, 1089600, 0);
        string0 = dbrow_getfield(int0, 1089552, 0);
        string1 = dbrow_getfield(int0, 1089568, 0);
        int9 = script8948(int10);
        stack(int7);
        stack(int2);
        IF_SETGRAPHIC();
        stack(int9);
        stack(int3);
        IF_SETGRAPHIC();
        IF_SETONMOUSEOVER(callback(script18361, int2, int8), int2);
        IF_SETONMOUSELEAVE(callback(script18361, int2, int7), int2);
        IF_SETTEXT(`${script18341(int10)}${script10876(int10)} Potion</col>`, int6);
        script18351(string1, int1);
        script18349(int2, string0);
        script18346();
        if ((int10 == 5)) {
            IF_SETHIDE(true, int5);
        } else {
            IF_SETHIDE(false, int5);
        };
    };
    return;
}