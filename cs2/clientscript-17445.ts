//
function script17445(int0: number): number {
    var int1 = script17446(int0);
    if (((varplayer_12314 == 2) && (varbitplayer_61685 == 1))) {
        return 0;
    };
    switch (int0) {
        case 48297: {
            int1 = MAX(0, (int1 - (100 * varplayer_10986)));
            break;
        }
    };
    switch (struct_getparam(int0, 2806)) {
        case 4: {
            if ((int1 > 0)) {
                if ((varplayer_12652 == 1)) {
                    int1 = MAX(0, (int1 - 450));
                } else if ((int1 > 0)) {
                    if ((varplayer_12650 == 1)) {
                        int1 = MAX(0, (int1 - 350));
                    } else if ((int1 > 0)) {
                        if ((varplayer_12651 == 1)) {
                            int1 = MAX(0, (int1 - 200));
                        } else if (((int1 > 0) && (varplayer_12649 == 1))) {
                            int1 = MAX(0, (int1 - 100));
                        };
                    } else if (((int1 > 0) && (varplayer_12649 == 1))) {
                        int1 = MAX(0, (int1 - 100));
                    };
                } else if ((int1 > 0)) {
                    if ((varplayer_12651 == 1)) {
                        int1 = MAX(0, (int1 - 200));
                    } else if (((int1 > 0) && (varplayer_12649 == 1))) {
                        int1 = MAX(0, (int1 - 100));
                    };
                } else if (((int1 > 0) && (varplayer_12649 == 1))) {
                    int1 = MAX(0, (int1 - 100));
                };
            } else if ((int1 > 0)) {
                if ((varplayer_12650 == 1)) {
                    int1 = MAX(0, (int1 - 350));
                } else if ((int1 > 0)) {
                    if ((varplayer_12651 == 1)) {
                        int1 = MAX(0, (int1 - 200));
                    } else if (((int1 > 0) && (varplayer_12649 == 1))) {
                        int1 = MAX(0, (int1 - 100));
                    };
                } else if (((int1 > 0) && (varplayer_12649 == 1))) {
                    int1 = MAX(0, (int1 - 100));
                };
            } else if ((int1 > 0)) {
                if ((varplayer_12651 == 1)) {
                    int1 = MAX(0, (int1 - 200));
                } else if (((int1 > 0) && (varplayer_12649 == 1))) {
                    int1 = MAX(0, (int1 - 100));
                };
            } else if (((int1 > 0) && (varplayer_12649 == 1))) {
                int1 = MAX(0, (int1 - 100));
            };
            break;
        }
    };
    return int1;
}