//
function script18266(int0: number, int1: number): void {
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
                script1191(80609287, script18161(1), 0);
                break;
            }
        };
    };
    return;
}