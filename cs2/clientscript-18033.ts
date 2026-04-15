//
function script18033(int0: unknown_int): void {
    if ((varclient_7294 == comp(-1, 65535))) {
        return;
    };
    var int1 = 0;
    var int2 = 0;
    [int1, int2] = script18036();
    var int3 = script17875(varplayer_11339, int1);
    var int4 = int1;
    var int5 = int2;
    var int6 = 0;
    if ((script18018(1) == int1)) {
        int6 = 1;
    };
    if ((int0 == 1)) {
        switch (int6) {
            case 1: {
                int4 = (script18019(1) + 1);
                break;
            }
            default: {
                if ((int2 >= (int3 - 1))) {
                    if (((script14335(varplayer_11339) == 1) && (script18019(1) == int1))) {
                        int4 = script18018(1);
                        int5 = 0;
                    } else {
                        int4 = (int4 + 1);
                        int5 = 0;
                    };
                } else {
                    int5 = (int5 + 1);
                };
                break;
            }
        };
    } else {
        switch (int6) {
            case 1: {
                int4 = script18019(1);
                int3 = script17875(varplayer_11339, int4);
                int5 = (int3 - 1);
                break;
            }
            default: {
                if ((int2 == 0)) {
                    int4 = (int4 - 1);
                    int3 = script17875(varplayer_11339, int4);
                    int5 = (int3 - 1);
                    if (((script14335(varplayer_11339) == 1) && (int4 == script18019(1)))) {
                        int4 = script18018(1);
                        int5 = 0;
                    };
                } else {
                    int5 = (int5 - 1);
                };
                break;
            }
        };
    };
    script18037(int4, int5);
    return;
}