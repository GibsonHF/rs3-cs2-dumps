//
function script10444(): void {
    var int0 = comp(1477, 890);
    var int1 = comp(1477, 895);
    switch (IF_GETTOP()) {
        case 906: {
            int0 = comp(906, 159);
            int1 = comp(906, 164);
            break;
        }
        case 744: {
            int0 = comp(744, 349);
            int1 = comp(744, 354);
            break;
        }
        default: {
            int0 = comp(1477, 890);
            int1 = comp(1477, 895);
            break;
        }
    };
    if ((IF_FIND(int0) == 1)) {
        CC_SETHIDE(true);
        CC_SETONTIMER(callback());
        cc_setparam(4514, 1);
        cc_setparam(4516, -1);
        cc_setparam(4518, -1);
        cc_setparam(4517, -1);
        cc_setparam(4515, 0);
    };
    CC_DELETEALL(int1);
    return;
}