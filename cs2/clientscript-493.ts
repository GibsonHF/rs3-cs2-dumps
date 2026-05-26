//
function script493(int0: number, int1: number): void {
    var int2 = 0;
    var int3 = 1;
    var int4 = -1;
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
    if ((int5 == -1)) {
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
                    int4 = -1;
                    break;
                }
            };
        };
        if ((int4 == -1)) {
            IF_SETHIDE(0, 66519111);
            IF_SETHIDE(1, 66519110);
            IF_SETHIDE(1, 66519112);
            IF_SETHIDE(1, 66519113);
            IF_SETHIDE(1, 66519114);
            IF_SETHIDE(1, 66519115);
        } else {
            IF_SETHIDE(1, 66519111);
            IF_SETHIDE(0, 66519110);
            IF_SETHIDE(0, 66519112);
            IF_SETHIDE(0, 66519113);
            IF_SETHIDE(0, 66519114);
            IF_SETHIDE(0, 66519115);
            IF_SETTEXT(struct_getparam(int4, 1150), 66519112);
            IF_SETGRAPHIC(struct_getparam(int4, 1153), 66519110);
            IF_SETTEXT(struct_getparam(int4, 1151), 66519113);
            IF_SETTEXT(strconcat("Cooldown: ", inttostring(struct_getparam(int4, 1155), 10)), 66519114);
            IF_SETTEXT(strconcat("Cost: ", inttostring(struct_getparam(int4, 1154), 10)), 66519115);
        };
    };
    return;
}