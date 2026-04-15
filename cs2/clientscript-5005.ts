//
function script5005(): void {
    var int0 = varbitplayer_6677;
    var int1 = int0;
    var int2 = 1;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 100;
    if ((CLANPROFILE_FIND() == 1)) {
        int3 = varbitclan_6507;
        int4 = 0;
        while (((int4 == 0) && (int6 > 0))) {
            int6 = (int6 - 1);
            switch (int0) {
                case 17: {
                    int1 = 18;
                    int4 = 1;
                    break;
                }
                case 18: {
                    int1 = 19;
                    int4 = 1;
                    break;
                }
                case 19: {
                    int1 = 1;
                    int4 = 1;
                    break;
                }
                case 1: {
                    int1 = 2;
                    break;
                }
                case 2: {
                    int1 = 3;
                    break;
                }
                case 3: {
                    int1 = 4;
                    break;
                }
                case 4: {
                    int1 = 7;
                    break;
                }
                case 7: {
                    int1 = 5;
                    break;
                }
                case 5: {
                    int1 = 6;
                    break;
                }
                case 6: {
                    int1 = 17;
                    int4 = 1;
                    break;
                }
            };
            if (((int4 == 0) && (script4979(int1) <= varbitclan_6507))) {
                int4 = 1;
            };
            int0 = int1;
        };
        if ((int6 <= 0)) {
            return;
        };
        if ((int4 == 1)) {
            varbitplayer_6677 = int1;
            script4988(varbitplayer_6677);
        };
    };
    return;
}