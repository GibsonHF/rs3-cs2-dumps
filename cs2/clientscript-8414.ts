//
function script8414(int0: int, int1: unknown_int): void {
    var int2 = -1;
    CC_SETDRAGRENDERBEHAVIOUR(3);
    if ((script1186() == 1)) {
        CC_SETMOUSEOVERCURSOR(-1);
    } else if ((int1 != -1)) {
        switch (int1) {
            case 0:
            case 7: {
                int2 = 192;
                break;
            }
            case 2:
            case 5: {
                int2 = 193;
                break;
            }
            case 1:
            case 6: {
                int2 = 190;
                break;
            }
            case 3:
            case 4: {
                int2 = 191;
                break;
            }
            default: {
                return;
            }
        };
        CC_SETMOUSEOVERCURSOR(int2);
        CC_SETDRAGGABLE(comp(1477, 27), -1);
        CC_SETDRAGDEADTIME(1);
        CC_SETDRAGDEADZONE(1);
        if ((script8137(int0) == 1)) {
            CC_SETONDRAG(callback(script8173, int0, int1, -2147483647, -2147483646));
            CC_SETONDRAGCOMPLETE(callback(script8174, int0, int1));
        } else {
            CC_SETONDRAG(callback(script8315, int0, int1, -2147483647, -2147483646));
            CC_SETONDRAGCOMPLETE(callback(script8316, int0, int1));
        };
    };
    return;
}