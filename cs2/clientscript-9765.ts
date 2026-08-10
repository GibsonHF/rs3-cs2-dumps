//
function script9765(int0: number): number {
    if ((varplayer_2662 == enum_getvalue(0, 22, 2536 as cs2enum, int0))) {
        return 4;
    };
    if ((varplayer_12314 > 0)) {
        stack(enum_getvalue(0, 0, 13570 as cs2enum, int0));
        stack(0);
        script20932();
        if (BRANCH_EQUALS(0)) {
            return 0;
        };
    };
    stack(int0);
    script21110();
    if (BRANCH_EQUALS(0)) {
        return 0;
    };
    switch (int0) {
        case 0: {
            return 1;
        }
        case 1: {
            return 1;
        }
        case 2: {
            return 1;
        }
        case 3: {
            return 1;
        }
        case 4: {
            return 1;
        }
        case 5: {
            if (((varbitplayer_64 == 20) || (varbitplayer_58466 == 1))) {
                return 1;
            };
            return 2;
        }
        case 6: {
            if ((varbitplayer_66 == 20)) {
                return 1;
            } else if (((varbitplayer_58466 == 1) && (script18522(280) == 1))) {
                return 1;
            };
            return 2;
        }
        case 7: {
            if (((varbitplayer_68 == 20) || (varbitplayer_58466 == 1))) {
                return 1;
            };
            return 2;
        }
        case 8: {
            if ((varbitplayer_10479 >= 3)) {
                return 1;
            };
            return 3;
        }
        case 9: {
            if ((varbitplayer_25045 == 0)) {
                return 3;
            };
            return 1;
        }
        case 10: {
            if (((varbitplayer_45329 == 20) || (varbitplayer_58466 == 1))) {
                return 1;
            };
            return 2;
        }
        case 11: {
            if ((varbitplayer_61257 == 1)) {
                return 1;
            };
            return 2;
        }
    };
    return 0;
}