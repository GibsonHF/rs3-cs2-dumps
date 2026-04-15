//
function script15383(int0: component, int1: graphic, int2: graphic): void {
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    if ((script6431() == true)) {
        CC_SETSIZE(50, 50, 0, 0);
        CC_SETPOSITION(0, -1, 0, 1);
        CC_SETGRAPHIC(int1);
    } else {
        switch (int2) {
            case 18908: {
                CC_SETSIZE(30, 40, 0, 0);
                CC_SETPOSITION(8, -1, 0, 1);
                break;
            }
            case 18902:
            case 18903:
            case 18904:
            case 18905:
            case 18906: {
                CC_SETSIZE(31, 40, 0, 0);
                CC_SETPOSITION(8, 0, 0, 1);
                break;
            }
            default: {
                CC_SETSIZE(50, 50, 0, 0);
                CC_SETPOSITION(0, -1, 0, 1);
                break;
            }
        };
        CC_SETGRAPHIC(int2);
    };
    CC_SETNOCLICKTHROUGH(false);
    return;
}