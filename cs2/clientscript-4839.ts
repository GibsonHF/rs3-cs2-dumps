//
function script4839(int0: number, int1: number): void {
    var int2 = 0;
    var int3 = -1;
    switch (int0) {
        case 82444741: {
            int3 = 82444744;
            int2 = IF_GETNEXTSUBID(82444749);
            break;
        }
        case 82444664: {
            int3 = 82444667;
            int2 = IF_GETNEXTSUBID(82444672);
            break;
        }
        case 82444581: {
            int3 = 82444584;
            int2 = IF_GETNEXTSUBID(82444589);
            break;
        }
        case 82444729: {
            int3 = 82444732;
            int2 = IF_GETNEXTSUBID(82444737);
            break;
        }
        case 82444650: {
            int3 = 82444653;
            int2 = IF_GETNEXTSUBID(82444658);
            break;
        }
        case 82444565: {
            int3 = 82444568;
            int2 = IF_GETNEXTSUBID(82444573);
            break;
        }
        case 82444717: {
            int3 = 82444720;
            int2 = IF_GETNEXTSUBID(82444725);
            break;
        }
        case 82444636: {
            int3 = 82444639;
            int2 = IF_GETNEXTSUBID(82444644);
            break;
        }
        case 82444549: {
            int3 = 82444552;
            int2 = IF_GETNEXTSUBID(82444557);
            break;
        }
    };
    if ((IF_FIND(int0) == 1)) {
        CC_SETSCROLLSIZE(0, cc_getparam(1564));
        if ((int1 >= 0)) {
            CC_SETSIZE(0, 27, 1, 0);
            CC_SETSCROLLPOS(0, int1);
            if ((int3 != -1)) {
                IF_SETPOSITION(IF_GETX(int3), int1, 0, 0, int3);
                if ((int2 > 1)) {
                    IF_SETHIDE(0, int3);
                } else {
                    IF_SETHIDE(1, int3);
                };
            };
        } else {
            CC_SETSIZE(0, cc_getparam(1564), 1, 0);
            CC_SETSCROLLPOS(0, 0);
            if ((int3 != -1)) {
                IF_SETHIDE(1, int3);
            };
        };
    };
    return;
}