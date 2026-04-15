//
function script5620(int0: component, int1: component): void {
    var int2 = 0;
    if ((IF_FIND(int1) == 1)) {
        CC_SETOPCURSOR(1, 65);
        int2 = (2 * (IF_GETHEIGHT(comp(1199, 14)) / 3));
        CC_SETMODELZOOM(int2);
        CC_SETMODELANIM(15700 as seq);
        switch (int1) {
            case 78577672: {
                if ((CC_GETY() >= 0)) {
                    IF_SETONTIMER(callback(), int0);
                    return;
                };
                CC_SETPOSITION(0, (CC_GETY() + 1), 1, 0);
                break;
            }
            case 78577670: {
                if ((CC_GETX() <= (IF_GETWIDTH(comp(1199, 14)) - CC_GETWIDTH()))) {
                    IF_SETONTIMER(callback(), int0);
                    return;
                };
                CC_SETPOSITION((CC_GETX() - 1), 0, 0, 1);
                break;
            }
            case 78577666: {
                if ((CC_GETY() <= (IF_GETHEIGHT(comp(1199, 14)) - CC_GETHEIGHT()))) {
                    IF_SETONTIMER(callback(), int0);
                    return;
                };
                CC_SETPOSITION(0, (CC_GETY() - 1), 1, 0);
                break;
            }
            case 78577674: {
                if ((CC_GETY() <= (IF_GETHEIGHT(comp(1199, 14)) - CC_GETHEIGHT()))) {
                    IF_SETONTIMER(callback(), int0);
                    return;
                };
                CC_SETPOSITION((CC_GETX() + 1), (CC_GETY() - 1), 0, 0);
                break;
            }
            case 78577668: {
                if ((CC_GETX() >= CC_GETWIDTH())) {
                    IF_SETONTIMER(callback(), int0);
                    return;
                };
                CC_SETPOSITION((CC_GETX() + 1), 0, 0, 1);
                break;
            }
            case 78577676: {
                if ((CC_GETY() >= 0)) {
                    IF_SETONTIMER(callback(), int0);
                    return;
                };
                CC_SETPOSITION((CC_GETX() + 1), (CC_GETY() + 1), 0, 0);
                break;
            }
        };
    };
    return;
}