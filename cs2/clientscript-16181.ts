//
function script16181(int0: component, int1: unknown_int): void {
    if ((IF_FIND(int0) == 1)) {
        CC_SETONTIMER(callback(script12631, int0, -1));
        cc_setparam(5841, 4);
        switch (int1) {
            case 1:
            case 2: {
                cc_setparam(5840, 2);
                break;
            }
            case 4:
            case 5: {
                cc_setparam(5840, 2);
                cc_setparam(5944, 1);
                break;
            }
            case 7:
            case 8: {
                cc_setparam(5840, 2);
                cc_setparam(5943, 1);
                cc_setparam(5944, 1);
                break;
            }
            case 10:
            case 11: {
                cc_setparam(5840, 2);
                cc_setparam(5943, 1);
                break;
            }
            case 6: {
                cc_setparam(5840, 0);
                cc_setparam(5944, 1);
                break;
            }
            case 12: {
                cc_setparam(5840, 0);
                break;
            }
            case 3: {
                cc_setparam(5840, 1);
                break;
            }
            case 9: {
                cc_setparam(5840, 1);
                cc_setparam(5943, 1);
                break;
            }
        };
    };
    return;
}