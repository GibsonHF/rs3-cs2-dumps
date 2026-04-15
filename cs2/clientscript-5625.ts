//
function script5625(int0: component, int1: component): void {
    if ((IF_FIND(int1) == 1)) {
        CC_SETMODELZOOM((2 * (IF_GETHEIGHT(comp(1199, 14)) / 3)));
        switch (int1) {
            case 78577672: {
                if ((CC_GETY() <= (0 - CC_GETHEIGHT()))) {
                    script5623(int1);
                    IF_SETONTIMER(callback(), int0);
                    return;
                };
                CC_SETPOSITION(0, (CC_GETY() - 1), 1, 0);
                break;
            }
            case 78577670: {
                if ((CC_GETX() >= (IF_GETWIDTH(comp(1199, 14)) + (CC_GETWIDTH() / 2)))) {
                    script5623(int1);
                    IF_SETONTIMER(callback(), int0);
                    return;
                };
                CC_SETPOSITION((CC_GETX() + 1), 0, 0, 1);
                break;
            }
            case 78577666: {
                if ((CC_GETY() >= (IF_GETHEIGHT(comp(1199, 14)) + (CC_GETHEIGHT() / 2)))) {
                    script5623(int1);
                    IF_SETONTIMER(callback(), int0);
                    return;
                };
                CC_SETPOSITION(0, (CC_GETY() + 1), 1, 0);
                break;
            }
            case 78577674: {
                if ((CC_GETY() >= (IF_GETHEIGHT(comp(1199, 14)) + (CC_GETWIDTH() / 2)))) {
                    script5623(int1);
                    IF_SETONTIMER(callback(), int0);
                    return;
                };
                CC_SETPOSITION((CC_GETX() - 1), (CC_GETY() + 1), 0, 0);
                break;
            }
            case 78577668: {
                if ((CC_GETX() <= (0 - CC_GETWIDTH()))) {
                    script5623(int1);
                    IF_SETONTIMER(callback(), int0);
                    return;
                };
                CC_SETPOSITION((CC_GETX() - 1), 0, 0, 1);
                break;
            }
            case 78577676: {
                if ((CC_GETY() <= (0 - CC_GETHEIGHT()))) {
                    script5623(int1);
                    IF_SETONTIMER(callback(), int0);
                    return;
                };
                CC_SETPOSITION((CC_GETX() - 1), (CC_GETY() - 1), 0, 0);
                break;
            }
        };
    };
    return;
}