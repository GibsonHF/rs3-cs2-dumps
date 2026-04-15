//
function script18266(int0: stat, int1: component): void {
    var int2 = enum_getvalue(17, 0, 1482 as cs2enum, int0);
    if ((script15772(int0) == 1)) {
        if ((TESTBIT(varplayer_3238, int2) == 0)) {
            varplayer_3238 = SETBIT(varplayer_3238, int2);
        } else {
            varplayer_3238 = CLEARBIT(varplayer_3238, int2);
        };
        script18265(int1, int0);
        switch (int0) {
            case 0:
            case 5:
            case 23: {
                script1191(comp(1230, 7), script18161(1), false);
                break;
            }
        };
    };
    return;
}