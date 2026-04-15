//
function script19755(int0: int): material {
    var int1 = -1 as material;
    if ((varbitplayer_57152 == 1)) {
        switch (int0) {
            case 2: {
                int1 = 20530 as material;
                break;
            }
            case 3: {
                int1 = 20526 as material;
                break;
            }
            case 4: {
                int1 = 20529 as material;
                break;
            }
            case 5: {
                int1 = 20528 as material;
                break;
            }
            default: {
                int1 = 20531 as material;
                break;
            }
        };
    } else {
        switch (int0) {
            case 2: {
                int1 = 20537 as material;
                break;
            }
            case 3: {
                int1 = 20532 as material;
                break;
            }
            case 4: {
                int1 = 20535 as material;
                break;
            }
            case 5: {
                int1 = 20534 as material;
                break;
            }
            default: {
                int1 = 20536 as material;
                break;
            }
        };
    };
    return int1;
}