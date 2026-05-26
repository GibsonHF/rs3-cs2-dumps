//
function script10444(): void {
    var int0 = 96797562;
    var int1 = 96797567;
    switch (IF_GETTOP()) {
        case 906: {
            int0 = 59375775;
            int1 = 59375780;
            break;
        }
        case 744: {
            int0 = 48759134;
            int1 = 48759139;
            break;
        }
        default: {
            int0 = 96797562;
            int1 = 96797567;
            break;
        }
    };
    if ((IF_FIND(int0) == 1)) {
        CC_SETHIDE(1);
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