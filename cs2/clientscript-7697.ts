//
function script7697(int0: int): void {
    if ((CC_FIND(comp(1410, 2), int0) == 1)) {
        varclient_2767 = (varclient_2767 - 1);
        switch (varclient_2767) {
            case 29: {
                CC_SETOUTLINE(2);
                break;
            }
            case 27: {
                CC_SETOUTLINE(0);
                break;
            }
            case 19: {
                CC_SETOUTLINE(2);
                break;
            }
            case 17: {
                CC_SETOUTLINE(0);
                break;
            }
            default: {
                if ((varclient_2767 < 17)) {
                    CC_SETONTIMER(callback());
                    varclient_2767 = 30;
                };
                break;
            }
        };
    };
    return;
}