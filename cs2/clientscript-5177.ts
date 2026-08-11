//
function script5177(int0: number, int1: number): void {
    var int2 = -1;
    switch (int0) {
        case 13: {
            script675();
            return;
        }
        case 16: {
            int2 = 0;
            break;
        }
        case 17: {
            int2 = 1;
            break;
        }
        case 18: {
            int2 = 2;
            break;
        }
        case 19: {
            int2 = 3;
            break;
        }
        case 20: {
            int2 = 4;
            break;
        }
        default: {
            switch (int1) {
                case 49: {
                    int2 = 0;
                    break;
                }
                case 50: {
                    int2 = 1;
                    break;
                }
                case 51: {
                    int2 = 2;
                    break;
                }
                case 52: {
                    int2 = 3;
                    break;
                }
                case 53: {
                    int2 = 4;
                    break;
                }
                default: {
                    return;
                }
            };
            break;
        }
    };
    if ((CC_FIND(comp(387, 23), int2) == 1)) {  // chat_v3_choice:choice_buttons_click
        CC_RESUME_PAUSEBUTTON();
    };
    return;
}