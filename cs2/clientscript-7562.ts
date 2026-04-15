//
function script7562(int0: unknown_int, int1: unknown_int): void {
    var int2 = -1;
    var int3 = -1;
    switch (int0) {
        case 0: {
            switch (int1) {
                case 0: {
                    int2 = 91619386;
                    int3 = 16512;
                    break;
                }
                case 1: {
                    int2 = 91619387;
                    int3 = 16515;
                    break;
                }
                case 2: {
                    int2 = 91619388;
                    int3 = 16518;
                    break;
                }
            };
            break;
        }
        case 1: {
            switch (int1) {
                case 0: {
                    int2 = 91619386;
                    int3 = 16513;
                    break;
                }
                case 1: {
                    int2 = 91619387;
                    int3 = 16516;
                    break;
                }
                case 2: {
                    int2 = 91619388;
                    int3 = 16519;
                    break;
                }
            };
            break;
        }
        case 2: {
            switch (int1) {
                case 0: {
                    int2 = 91619386;
                    int3 = 16511;
                    break;
                }
                case 1: {
                    int2 = 91619387;
                    int3 = 16514;
                    break;
                }
                case 2: {
                    int2 = 91619388;
                    int3 = 16517;
                    break;
                }
            };
            break;
        }
    };
    stack(int3);
    stack(int2);
    IF_SETGRAPHIC();
    IF_SETTRANS(255, int2);
    IF_SETHIDE(0, int2);
    IF_SETONTIMER(callback(script7563, int2), int2);
    return;
}