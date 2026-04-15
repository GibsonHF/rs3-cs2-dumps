//
function script4839(int0: component, int1: int): void {
    var int2 = 0;
    var int3 = comp(-1, 65535);
    switch (int0) {
        case 82444741: {
            int3 = comp(1258, 456);
            int2 = IF_GETNEXTSUBID(comp(1258, 461));
            break;
        }
        case 82444664: {
            int3 = comp(1258, 379);
            int2 = IF_GETNEXTSUBID(comp(1258, 384));
            break;
        }
        case 82444581: {
            int3 = comp(1258, 296);
            int2 = IF_GETNEXTSUBID(comp(1258, 301));
            break;
        }
        case 82444729: {
            int3 = comp(1258, 444);
            int2 = IF_GETNEXTSUBID(comp(1258, 449));
            break;
        }
        case 82444650: {
            int3 = comp(1258, 365);
            int2 = IF_GETNEXTSUBID(comp(1258, 370));
            break;
        }
        case 82444565: {
            int3 = comp(1258, 280);
            int2 = IF_GETNEXTSUBID(comp(1258, 285));
            break;
        }
        case 82444717: {
            int3 = comp(1258, 432);
            int2 = IF_GETNEXTSUBID(comp(1258, 437));
            break;
        }
        case 82444636: {
            int3 = comp(1258, 351);
            int2 = IF_GETNEXTSUBID(comp(1258, 356));
            break;
        }
        case 82444549: {
            int3 = comp(1258, 264);
            int2 = IF_GETNEXTSUBID(comp(1258, 269));
            break;
        }
    };
    if ((IF_FIND(int0) == 1)) {
        CC_SETSCROLLSIZE(0, cc_getparam(1564));
        if ((int1 >= 0)) {
            CC_SETSIZE(0, 27, 1, 0);
            CC_SETSCROLLPOS(0, int1);
            if ((int3 != comp(-1, 65535))) {
                IF_SETPOSITION(IF_GETX(int3), int1, 0, 0, int3);
                if ((int2 > 1)) {
                    IF_SETHIDE(false, int3);
                } else {
                    IF_SETHIDE(true, int3);
                };
            };
        } else {
            CC_SETSIZE(0, cc_getparam(1564), 1, 0);
            CC_SETSCROLLPOS(0, 0);
            if ((int3 != comp(-1, 65535))) {
                IF_SETHIDE(true, int3);
            };
        };
    };
    return;
}