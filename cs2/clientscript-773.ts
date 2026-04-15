//
function script773(int0: int, int1: int, int2: component): void {
    var int3 = IF_GETWIDTH(int2);
    var int4 = IF_GETHEIGHT(int2);
    var int5 = 0;
    var int6 = 0;
    if ((CC_FIND(int2, int0) == 1)) {
        int5 = (IF_GETWIDTH(int2) - CC_GETWIDTH());
        int6 = (IF_GETHEIGHT(int2) - CC_GETHEIGHT());
        if ((MODULO(int1, 40) < 20)) {
            switch (CC_GET2DANGLE()) {
                case 49152: {
                    CC_SETPOSITION((CC_GETX() + 3), ((int4 / 2) - (CC_GETHEIGHT() / 2)), 0, 0);
                    break;
                }
                case 16384: {
                    CC_SETPOSITION((CC_GETX() - 3), ((int4 / 2) - (CC_GETHEIGHT() / 2)), 0, 0);
                    break;
                }
                case 32768: {
                    CC_SETPOSITION(((int3 / 2) - (CC_GETWIDTH() / 2)), (CC_GETY() + 3), 0, 0);
                    break;
                }
                case 0: {
                    CC_SETPOSITION(((int3 / 2) - (CC_GETWIDTH() / 2)), (CC_GETY() - 3), 0, 0);
                    break;
                }
            };
        } else {
            switch (CC_GET2DANGLE()) {
                case 49152: {
                    CC_SETPOSITION((CC_GETX() - 3), ((int4 / 2) - (CC_GETHEIGHT() / 2)), 0, 0);
                    break;
                }
                case 16384: {
                    CC_SETPOSITION((CC_GETX() + 3), ((int4 / 2) - (CC_GETHEIGHT() / 2)), 0, 0);
                    break;
                }
                case 32768: {
                    CC_SETPOSITION(((int3 / 2) - (CC_GETWIDTH() / 2)), (CC_GETY() - 3), 0, 0);
                    break;
                }
                case 0: {
                    CC_SETPOSITION(((int3 / 2) - (CC_GETWIDTH() / 2)), (CC_GETY() + 3), 0, 0);
                    break;
                }
            };
        };
        var int1 = (int1 + 1);
        CC_SETONTIMER(callback(script773, int0, int1, int2));
    };
    return;
}