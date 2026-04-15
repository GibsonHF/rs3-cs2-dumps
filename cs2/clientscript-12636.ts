//
function script12636(int0: int, int1: int, int2: int, int3: int): [int, int, int, int] {
    var int4 = int0;
    var int5 = int1;
    var int6 = comp(-1, 65535);
    var int7 = -1;
    switch (cc_getparam(2977)) {
        case 0: {
            int4 = cc_getparam(5926);
            int5 = cc_getparam(5927);
            CC_SETPOSITION(int4, int5, int2, int3);
            break;
        }
        case 1: {
            int4 = script12327(int0, cc_getparam(5926));
            int5 = script12327(int1, cc_getparam(5927));
            CC_SETPOSITION(int4, int5, int2, int3);
            break;
        }
        case 2: {
            int6 = CC_GETLAYER();
            if (((int6 != comp(-1, 65535)) && (int6 == cc_getparam(5848)))) {
                int7 = cc_getparam(4423);
                if (((CC_FIND[1](int6, int7) == 1) || ((int7 == -1) && (IF_FIND[1](int6) == 1)))) {
                    int4 = CC_GETX[1]();
                    int5 = CC_GETY[1]();
                    var int2 = 0;
                    var int3 = 0;
                    CC_SETPOSITION(int4, int5, int2, int3);
                };
            };
            break;
        }
    };
    return [int4, int5, int2, int3];
}