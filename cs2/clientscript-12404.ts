//
function script12404(int0: unknown_int): int {
    var int1 = 400;
    var int2 = 100;
    switch (int0) {
        case 1: {
            if ((varbitplayer_30910 == 1)) {
                int2 = MAX(0, (int2 - 50));
            };
            break;
        }
        case 2: {
            if ((varbitplayer_30922 == 1)) {
                int2 = MAX(0, (int2 - 50));
            };
            break;
        }
        case 3: {
            if ((varbitplayer_30896 == 1)) {
                int2 = MAX(0, (int2 - 50));
            };
            break;
        }
        case 4: {
            if ((varbitplayer_30884 == 1)) {
                int2 = MAX(0, (int2 - 50));
            };
            break;
        }
    };
    if ((varplayer_12121 >= 2)) {
        int2 = MAX(0, (int2 - 50));
    };
    int1 = SCALE(int1, 100, int2);
    return int1;
}