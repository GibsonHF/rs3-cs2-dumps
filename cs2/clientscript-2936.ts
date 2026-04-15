//
function script2936(int0: struct): int {
    var int1 = script7379(int0);
    switch (int0) {
        case 14735: {
            if ((varplayer_9912 > 0)) {
                int1 = (1000 - (120 * varplayer_9912));
            };
            break;
        }
        case 14674: {
            int1 = struct_getparam(int0, 2798);
            break;
        }
        case 14686: {
            int1 = struct_getparam(int0, 2798);
            break;
        }
        case 14736: {
            int1 = struct_getparam(int0, 2798);
            break;
        }
        case 48314: {
            int1 = struct_getparam(int0, 2798);
            break;
        }
    };
    switch (struct_getparam(int0, 2806)) {
        case 4: {
            if (((int1 > 0) && (varplayer_12652 == 1))) {
                int1 = MAX(0, (int1 - 450));
            } else if (((int1 > 0) && (varplayer_12650 == 1))) {
                int1 = MAX(0, (int1 - 350));
            } else if (((int1 > 0) && (varplayer_12651 == 1))) {
                int1 = MAX(0, (int1 - 200));
            } else if (((int1 > 0) && (varplayer_12649 == 1))) {
                int1 = MAX(0, (int1 - 100));
            };
            break;
        }
    };
    return MAX(0, int1);
}