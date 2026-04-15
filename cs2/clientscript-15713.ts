//
function script15713(int0: int): int {
    switch (varbitplayer_19949) {
        case 1: {
            var int0 = MAX(MIN(int0, 5725), 1860);
            break;
        }
        case 4: {
            int0 = MAX(MIN(int0, 2000), 1500);
            break;
        }
        case 2:
        case 3: {
            if ((script6431() == true)) {
                int0 = MAX(MIN(int0, 9000), 1350);
            } else {
                int0 = MAX(MIN(int0, 12000), 1350);
            };
            break;
        }
        case 5: {
            int0 = MAX(MIN(int0, 7500), 3000);
            break;
        }
        default: {
            if ((script6431() == true)) {
                int0 = MAX(MIN(int0, 9000), 1860);
            } else {
                int0 = MAX(MIN(int0, 7600), 1860);
            };
            break;
        }
    };
    return int0;
}