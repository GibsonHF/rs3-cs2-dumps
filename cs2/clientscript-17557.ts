//
function script17557(int0: unknown_int, int1: component, string0: string): void {
    var string1 = "";
    var int2 = 0;
    var int3 = 0;
    switch (int1) {
        case 77398030: {
            int2 = varplayer_10948;
            int3 = varplayer_10947;
            break;
        }
        case 77398078: {
            int2 = varplayer_11844;
            int3 = varplayer_11843;
            break;
        }
    };
    switch (varplayer_10946) {
        case 49997:
        case 50216: {
            if (((int2 - int3) > 0)) {
                string1 = `${string0}${script14945((int2 - int3), 1)}`;
            };
            break;
        }
        case 51839: {
            switch (varplayer_12278) {
                case 1: {
                    string1 = `${string0}${TOSTRING_LOCALISED(int3, 1)}`;
                    if ((int0 == 1)) {
                        string1 = `${string0}${TOSTRING_LOCALISED(SCALE(int3, MAX(1, int2), 100), 1)}%`;
                    };
                    break;
                }
                default: {
                    if (((int2 - int3) > 0)) {
                        string1 = `${string0}${script14945((int2 - int3), 1)}`;
                    };
                    break;
                }
            };
            break;
        }
        default: {
            string1 = `${string0}${TOSTRING_LOCALISED(int3, 1)}`;
            if ((int0 == 1)) {
                string1 = `${string0}${TOSTRING_LOCALISED(SCALE(int3, MAX(1, int2), 100), 1)}%`;
            };
            break;
        }
    };
    IF_SETTEXT(string1, int1);
    return;
}