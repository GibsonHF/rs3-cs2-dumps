//
function script8980(int0: number): void {
    varbitplayer_18640 = (int0 + 1);
    IF_SETHIDE(1, 98042069);
    IF_SETHIDE(1, 98042074);
    IF_SETHIDE(1, 98042066);
    IF_SETHIDE(1, 98042061);
    IF_SETHIDE(1, 98042051);
    IF_SETHIDE(1, 98042043);
    IF_SETHIDE(1, 98041971);
    IF_SETHIDE(1, 98041972);
    IF_SETHIDE(1, 98041977);
    IF_SETHIDE(1, 98041993);
    IF_SETHIDE(1, 98042002);
    IF_SETHIDE(1, 98042006);
    IF_SETHIDE(1, 98042013);
    var int1 = -1;
    switch (varbitplayer_18639) {
        case 0: {
            int1 = 98042069;
            break;
        }
        case 1: {
            int1 = 98042074;
            break;
        }
        case 2: {
            switch (varbitplayer_18640) {
                case 1: {
                    int1 = 98042066;
                    break;
                }
                case 2: {
                    int1 = 98042061;
                    break;
                }
                case 3: {
                    int1 = 98042051;
                    break;
                }
                case 4: {
                    int1 = 98042043;
                    break;
                }
                case 5: {
                    int1 = 98042013;
                    break;
                }
                case 6: {
                    int1 = 98042006;
                    break;
                }
                case 7: {
                    int1 = 98042002;
                    break;
                }
            };
            break;
        }
        case 3: {
            switch (varbitplayer_18640) {
                case 1: {
                    int1 = 98041993;
                    break;
                }
                case 2: {
                    int1 = 98041977;
                    break;
                }
                case 3: {
                    int1 = 98041972;
                    break;
                }
            };
            break;
        }
        case 4: {
            int1 = 98041971;
            break;
        }
    };
    IF_SETHIDE(0, int1);
    script8957(script8960(varbitplayer_18639), MAX(0, (varbitplayer_18640 + 0)));
    return;
}