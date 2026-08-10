//
function script17698(int0: number, int1: number): string {
    var int2 = struct_getparam(int0, 2796);
    if (((int0 == 28430) || (int0 == 11748))) {
        int2 = script17463(script15098(INV_GETOBJ(94 as inv, 3), int0));
    };
    var int3 = int2;
    switch (int0) {
        case 14726: {
            if ((script20159() == 1)) {
                int2 = 7;
            };
            if (((varbitplayer_30338 > 0) || (script14608(4409) == 1))) {
                int2 = (int2 / 2);
            };
            break;
        }
        case 14678:
        case 40935: {
            if (((varbitplayer_30338 > 0) || (script14608(4409) == 1))) {
                int2 = (int2 / 2);
            };
            break;
        }
        case 47129:
        case 1488: {
            if ((script20159() == 1)) {
                int2 = 7;
            };
            if (((varbitplayer_30338 > 0) || (script14608(4409) == 1))) {
                int2 = (int2 / 2);
            };
            break;
        }
        case 14665: {
            if ((script20159() == 1)) {
                int2 = 7;
            };
            if (((varbitplayer_30338 > 0) || (script14608(4409) == 1))) {
                int2 = (int2 / 2);
            };
            break;
        }
        case 14718: {
            script20986();
            if (BRANCH_EQUALS(1)) {
                int2 = 150;
            };
            break;
        }
        case 14720: {
            if ((varbitplayer_30341 > 0)) {
                int2 = (int2 - SCALE(int2, 100, (5 * varbitplayer_30341)));
            };
            break;
        }
        case 19253: {
            if ((varbitplayer_30341 > 0)) {
                int2 = (int2 - SCALE(int2, 100, (5 * varbitplayer_30341)));
            };
            break;
        }
    };
    if ((script3825() == 1)) {
        stack(int0);
        script21017();
        if (BRANCH_EQUALS(1)) {
            int2 = (int2 - SCALE(int2, 100, varbitplayer_58477));
        } else {
            stack(int0);
            script21018();
            if (BRANCH_EQUALS(1)) {
                int2 = (int2 - SCALE(int2, 100, varbitplayer_58500));
            } else {
                stack(int0);
                script21019();
                if (BRANCH_EQUALS(1)) {
                    int2 = (int2 - SCALE(int2, 100, varbitplayer_58489));
                } else {
                    stack(int0);
                    script21020();
                    if (BRANCH_EQUALS(1)) {
                        int2 = (int2 - SCALE(int2, 100, varbitplayer_58504));
                    };
                };
            };
        };
    };
    return script17699(int2, int1);
}