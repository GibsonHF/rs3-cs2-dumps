//
function script16610(int0: int, int1: int): void {
    switch (int0) {
        case 127:
        case 115:
        case 125:
        case 136:
        case 145: {
            if ((STRING_LENGTH(enum_getvalue(0, 36, 15193 as cs2enum, int1)) > 0)) {
                CC_SETOPCURSOR(4, 210);
            };
            break;
        }
        case 140:
        case 143: {
            switch (int1) {
                case 2: {
                    CC_SETOPCURSOR(4, 210);
                    break;
                }
                case 3: {
                    CC_SETOPCURSOR(4, 210);
                    break;
                }
                case 6: {
                    CC_SETOPCURSOR(4, 210);
                    break;
                }
                case 7: {
                    CC_SETOPCURSOR(4, 210);
                    break;
                }
                case 11: {
                    CC_SETOPCURSOR(4, 210);
                    break;
                }
                case 8:
                case 9:
                case 10: {
                    CC_SETOPCURSOR(4, 210);
                    break;
                }
                case 12: {
                    CC_SETOPCURSOR(4, 210);
                    break;
                }
            };
            break;
        }
        case 141: {
            CC_SETOPCURSOR(4, 210);
            break;
        }
        case 146: {
            if ((int1 > 0)) {
                CC_SETOPCURSOR(4, 210);
            };
            break;
        }
    };
    return;
}