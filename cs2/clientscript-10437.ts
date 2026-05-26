//
function script10437(int0: number, int1: number): void {
    var int2 = 96797566;
    switch (IF_GETTOP()) {
        case 906: {
            int2 = 59375779;
            break;
        }
        case 744: {
            int2 = 48759138;
            break;
        }
        default: {
            int2 = 96797566;
            break;
        }
    };
    CC_DELETEALL(int2);
    if ((CC_FIND(int0, int1) == 1)) {
        if ((cc_getparam(7128) == 0)) {
            return;
        };
        CC_CREATE[1](int2, 3, 0);
        CC_SETSIZE[1](5, CC_GETHEIGHT(), 1, 0);
        CC_SETPOSITION[1](5, CC_GETY(), 0, 0);
        CC_SETFILL[1](1);
        CC_SETCOLOUR[1](script10495(17));
    };
    return;
}