//
function script15531(int0: int): unknown_int {
    if (((int0 < 0) || (int0 > 7))) {
        script12478(`Please choose a slot between 0 and 7! ($slot_to_get=${inttostring(int0, 10)})`);
        return -1;
    };
    switch (int0) {
        case 0: {
            switch (GENDER()) {
                case 0: {
                    return 0;
                }
                case 1: {
                    return 7;
                }
            };
            break;
        }
        case 1: {
            switch (GENDER()) {
                case 0: {
                    return 1;
                }
                case 1: {
                    return -1;
                }
            };
            break;
        }
        case 2: {
            switch (GENDER()) {
                case 0: {
                    return 2;
                }
                case 1: {
                    return 9;
                }
            };
            break;
        }
        case 3: {
            switch (GENDER()) {
                case 0: {
                    return 3;
                }
                case 1: {
                    return 10;
                }
            };
            break;
        }
        case 4: {
            switch (GENDER()) {
                case 0: {
                    return 4;
                }
                case 1: {
                    return 11;
                }
            };
            break;
        }
        case 5: {
            switch (GENDER()) {
                case 0: {
                    return 5;
                }
                case 1: {
                    return 12;
                }
            };
            break;
        }
        case 6: {
            switch (GENDER()) {
                case 0: {
                    return 6;
                }
                case 1: {
                    return 13;
                }
            };
            break;
        }
        case 7: {
            switch (GENDER()) {
                case 0: {
                    return 14;
                }
                case 1: {
                    return 15;
                }
            };
            break;
        }
    };
    script12478(`Gender has not been set! (Gender = ${inttostring(GENDER(), 10)}`);
    return -1;
}