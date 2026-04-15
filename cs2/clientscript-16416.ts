//
function script16416(int0: int): void {
    IF_SETHIDE(true, comp(955, 23));
    IF_SETHIDE(true, comp(955, 21));
    IF_SETHIDE(true, comp(955, 27));
    IF_SETHIDE(true, comp(955, 25));
    var int1 = 0;
    var int2 = 0;
    var int3 = comp(-1, 65535);
    while ((int2 <= 4)) {
        switch (int2) {
            case 0: {
                int3 = comp(955, 15);
                break;
            }
            case 1: {
                int3 = comp(955, 10);
                break;
            }
            case 2: {
                int3 = comp(955, 18);
                break;
            }
            case 3: {
                int3 = comp(955, 20);
                break;
            }
            case 4: {
                int3 = comp(955, 1);
                break;
            }
        };
        int1 = IF_GETNEXTSUBID(int3);
        while ((int1 >= 0)) {
            if ((CC_FIND(int3, int1) == 1)) {
                CC_SETTRANS(int0);
            };
            int1 = (int1 - 1);
        };
        int2 = (int2 + 1);
    };
    IF_SETTRANS(int0, comp(955, 19));
    IF_SETTRANS(int0, comp(955, 13));
    IF_SETTRANS(int0, comp(955, 14));
    IF_SETTRANS(int0, comp(955, 29));
    IF_SETTRANS(int0, comp(955, 30));
    IF_SETTRANS(int0, comp(955, 3));
    IF_SETTRANS(int0, comp(955, 4));
    if ((IF_FIND(comp(955, 17)) == 1)) {
        CC_SETTRANS(int0);
    };
    return;
}