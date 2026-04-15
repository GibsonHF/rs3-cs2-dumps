//
function script15712(int0: int, int1: int): [int, int] {
    switch (varbitplayer_19949) {
        case 1: {
            var int0 = MAX(MIN(int0, 3000), 500);
            break;
        }
        case 2:
        case 3: {
            int0 = MAX(MIN(int0, 4090), 10);
            break;
        }
        case 4: {
            int0 = MAX(MIN(int0, 4090), 10);
            break;
        }
        case 5: {
            int0 = MAX(MIN(int0, 2500), 200);
            break;
        }
        default: {
            int0 = MAX(MIN(int0, 3500), 10);
            break;
        }
    };
    var int1 = script686(MODULO(int1, 16284), 16284);
    return [int0, int1];
}