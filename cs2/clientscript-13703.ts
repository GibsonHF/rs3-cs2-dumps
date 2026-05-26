//
function script13703(): void {
    var int0 = comp(-1, 65535);
    var int1 = 1;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    while ((int1 < 4)) {
        switch (int1) {
            case 1: {
                int0 = comp(1710, 14);
                int2 = -50;
                int4 = 9;
                int3 = -44;
                int5 = 17;
                break;
            }
            case 2: {
                int0 = comp(1710, 15);
                int2 = 0;
                int4 = 9;
                int3 = 0;
                int5 = 17;
                break;
            }
            case 3: {
                int0 = comp(1710, 16);
                int2 = 50;
                int4 = 9;
                int3 = 44;
                int5 = 17;
                break;
            }
            default: {
                return;
            }
        };
        if ((IF_FIND(int0) == 1)) {
            if ((varbitplayer_38399 == int1)) {
                CC_SETONTIMER(callback(script12631, -2147483645, -2147483643));
                cc_setparam(5836, 3);
                CC_SETSIZE(48, 68, 0, 0);
                CC_SETTRANS(20);
                CC_SETPOSITION(int2, int4, 1, 0);
            } else {
                CC_SETONTIMER(callback());
                CC_SETTRANS(80);
                CC_SET2DANGLE(0);
                CC_SETSIZE(36, 51, 0, 0);
                CC_SETPOSITION(int3, int5, 1, 0);
            };
        };
        int1 = (int1 + 1);
    };
    return;
}