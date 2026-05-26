//
function script10442(): void {
    var int0 = 96797562;
    switch (IF_GETTOP()) {
        case 906: {
            int0 = 59375775;
            break;
        }
        case 744: {
            int0 = 48759134;
            break;
        }
        default: {
            int0 = 96797562;
            break;
        }
    };
    if ((IF_FIND(int0) == 1)) {
        if ((script13128(cc_getparam(4516), varplayer_4735) == 1)) {
            script10444();
        } else if ((cc_getparam(4517) != varplayer_4734)) {
            script10444();
        };
    };
    return;
}