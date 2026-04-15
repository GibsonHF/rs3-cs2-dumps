//
function script9310(int0: component, int1: int, int2: int): void {
    if (((MODULO(CLIENTCLOCK(), 2) == 0) && (CC_FIND(int0, int1) == 1))) {
        if ((IF_GETWIDTH(int0) > CC_GETWIDTH())) {
            CC_SETPOSITION(0, CC_GETY(), 1, 0);
        } else {
            switch (int2) {
                case 0: {
                    if (((CC_GETX() + CC_GETWIDTH()) > IF_GETWIDTH(int0))) {
                        CC_SETPOSITION((CC_GETX() - 1), CC_GETY(), 0, 0);
                    } else {
                        CC_SETONTIMER(callback(script9310, int0, int1, 2));
                    };
                    break;
                }
                case 1: {
                    if ((CC_GETX() < 0)) {
                        CC_SETPOSITION((CC_GETX() + 1), CC_GETY(), 0, 0);
                    } else {
                        CC_SETONTIMER(callback(script9310, int0, int1, 6));
                    };
                    break;
                }
                case 5: {
                    CC_SETONTIMER(callback(script9310, int0, int1, 1));
                    break;
                }
                case 9: {
                    CC_SETONTIMER(callback(script9310, int0, int1, 0));
                    break;
                }
                default: {
                    CC_SETONTIMER(callback(script9310, int0, int1, (int2 + 1)));
                    break;
                }
            };
        };
    };
    return;
}