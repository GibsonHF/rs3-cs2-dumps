//
function script12151(int0: number, int1: number): void {
    var int2 = 0;
    var int3 = -1;
    if ((IF_FIND(111935501) == 1)) {
        if ((CC_GETHIDE() == 1)) {
            CC_SETHIDE(0);
            CC_SETPOSITION((IF_GETX(int1) - 3), (IF_GETY(int1) - 3), 0, 0);
            cc_setparam(5533, int0);
            varbitclient_30258 = int0;
            script12125();
        } else {
            switch (cc_getparam(5533)) {
                case 0: {
                    int3 = 111935502;
                    break;
                }
                case 1: {
                    int3 = 111935503;
                    break;
                }
                case 2: {
                    int3 = 111935504;
                    break;
                }
                case 3: {
                    int3 = 111935505;
                    break;
                }
                case 4: {
                    int3 = 111935506;
                    break;
                }
            };
            CC_SETHIDE(1);
            cc_setparam(5533, int0);
            varbitclient_30258 = 0;
            script12154(int3, int1);
        };
    };
    return;
}