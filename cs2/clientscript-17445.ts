//
function script17445(int0: struct): int {
    var int1 = script17446(int0);
    switch (int0) {
        case 48297: {
            int1 = MAX(0, (int1 - (100 * varplayer_10986)));
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
    return int1;
}