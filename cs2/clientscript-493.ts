//
function script493(int0: unknown_int, int1: unknown_int): void {
    var int2 = 0;
    var int3 = 1;
    var int4 = -1 as struct;
    switch (int0) {
        case 66519146: {
            int2 = 1;
            break;
        }
        case 66519149: {
            int2 = 2;
            break;
        }
        case 66519152: {
            int2 = 3;
            break;
        }
        case 66519153: {
            int2 = 4;
            break;
        }
        case 66519159: {
            int2 = 5;
            break;
        }
        case 66519162: {
            int2 = 6;
            break;
        }
        case 66519165: {
            int2 = 7;
            break;
        }
        case 66519166: {
            int2 = 8;
            break;
        }
        case 66519154: {
            int2 = 9;
            break;
        }
        default: {
            return;
        }
    };
    var int5 = script489(int2);
    if ((int5 == comp(-1, 65535))) {
        return;
    };
    if ((int1 == 1)) {
        int3 = 3;
    };
    if (((((varbitplayer_5415 != int2) && (varbitplayer_5416 != int2)) && (varbitplayer_5417 != int2)) && (varbitplayer_5418 != int2))) {
        script6865(int5, -1, int3);
        if ((int1 == 1)) {
            int4 = script488(int2);
        } else {
            switch (varbitplayer_5391) {
                case 1: {
                    int4 = script488(varbitplayer_5415);
                    break;
                }
                case 2: {
                    int4 = script488(varbitplayer_5416);
                    break;
                }
                case 3: {
                    int4 = script488(varbitplayer_5417);
                    break;
                }
                case 4: {
                    int4 = script488(varbitplayer_5418);
                    break;
                }
                default: {
                    int4 = -1 as struct;
                    break;
                }
            };
        };
        if ((int4 == -1 as struct)) {
            IF_SETHIDE(false, comp(1015, 71));
            IF_SETHIDE(true, comp(1015, 70));
            IF_SETHIDE(true, comp(1015, 72));
            IF_SETHIDE(true, comp(1015, 73));
            IF_SETHIDE(true, comp(1015, 74));
            IF_SETHIDE(true, comp(1015, 75));
        } else {
            IF_SETHIDE(true, comp(1015, 71));
            IF_SETHIDE(false, comp(1015, 70));
            IF_SETHIDE(false, comp(1015, 72));
            IF_SETHIDE(false, comp(1015, 73));
            IF_SETHIDE(false, comp(1015, 74));
            IF_SETHIDE(false, comp(1015, 75));
            IF_SETTEXT(struct_getparam(int4, 1150), comp(1015, 72));
            stack(struct_getparam(int4, 1153));
            stack(66519110);
            IF_SETGRAPHIC();
            stack(int4);
            stack(1151);
            struct_getparam();
            IF_SETTEXT(stack(), 66519113);
            stack("Cooldown: ");
            stack(int4);
            stack(1155);
            struct_getparam();
            IF_SETTEXT(strconcat(stack(), inttostring(stack(), 10)), 66519114);
            stack("Cost: ");
            stack(int4);
            stack(1154);
            struct_getparam();
            IF_SETTEXT(strconcat(stack(), inttostring(stack(), 10)), 66519115);
        };
    };
    return;
}