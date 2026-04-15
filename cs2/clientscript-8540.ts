//
function script8540(int0: int, int1: int): void {
    var int2 = struct_getparam(script10405(int0), 3503);
    var int3 = -1;
    if ((varbitplayer_27169 == 0)) {
        if (((int2 == comp(-1, 65535)) || (IF_GETHIDE(int2) == false))) {
            var int1 = 0;
        };
        switch (int0) {
            case 18: {
                varclient_44 = int1;
                int3 = 18;
                break;
            }
            case 19: {
                varclient_46 = int1;
                int3 = 19;
                break;
            }
            case 20: {
                varclient_1511 = int1;
                int3 = 20;
                break;
            }
            case 21: {
                varclient_47 = int1;
                int3 = 21;
                break;
            }
            case 22: {
                varclient_45 = int1;
                int3 = 22;
                break;
            }
            case 24: {
                varclient_4303 = int1;
                int3 = 24;
                break;
            }
            case 25: {
                varclient_4509 = int1;
                int3 = 25;
                break;
            }
            case 46: {
                varclient_8180 = int1;
                int3 = 46;
                break;
            }
            default: {
                return;
            }
        };
    };
    if ((int1 == 0)) {
        script8062(int3);
    };
    return;
}