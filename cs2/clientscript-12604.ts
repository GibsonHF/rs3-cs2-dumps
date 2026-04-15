//
function script12604(): void {
    var int0 = -1;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = -1;
    var int11 = 1;
    while ((varbitclient_32704 < 2)) {
        int0 = -1;
        int1 = 0;
        int2 = 0;
        int3 = 0;
        int4 = 0;
        int5 = 0;
        int6 = 0;
        int7 = 0;
        int8 = 0;
        int9 = 0;
        int10 = -1;
        int11 = 1;
        switch (varbitclient_32704) {
            case 0: {
                script11840(6, 1015);
                script11840(7, 1015);
                script11840(12, 1015);
                script11840(13, 1015);
                script11840(8, 1015);
                script11840(9, 1015);
                if (((script12278() == 0) && (varbitclient_32461 == 0))) {
                    int0 = 8;
                    while ((int0 != -1)) {
                        if ((script8699(int0) == 1)) {
                            int11 = 0;
                            [int10, int10, int10, int10, int10, int10, int5, int6, int7, int8, int9] = script8701(int0, 28);
                            if ((((int9 == 1) && (int8 == 0)) && (int7 == 0))) {
                                if (((int5 != -1) || (int6 != -1))) {
                                    if ((varbitplayer_19964 == 0)) {
                                        script11840(int0, 28);
                                        int11 = 1;
                                    };
                                } else {
                                    int11 = 1;
                                };
                                if ((int11 == 1)) {
                                    [int1, int2] = script7724(int0, 1015);
                                    [int10, int10, int10, int10, int3, int4, int5, int6, int10, int8, int10] = script8701(1, 28);
                                    int7 = 0;
                                    script8709(int0, 28, int1, int2, int3, int4, int5, int6, int7, int8);
                                    varbitclient_32705 = 1;
                                    varbitclient_32703 = 1;
                                };
                            };
                        };
                        if ((int0 != 9)) {
                            int0 = 9;
                        } else {
                            int0 = -1;
                        };
                    };
                };
                break;
            }
            case 1: {
                varbitclient_2053 = 1;
                break;
            }
        };
        varbitclient_32704 = (varbitclient_32704 + 1);
    };
    return;
}