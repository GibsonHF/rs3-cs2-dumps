//
function script5056(int0: number, int1: number): void {
    if ((int1 == 1)) {
        if ((CC_FIND(int0, 0) == 1)) {
            CC_SETGRAPHIC(7571);
        };
        if ((CC_FIND(int0, 1) == 1)) {
            CC_SETGRAPHIC(7570);
        };
        if ((CC_FIND(int0, 2) == 1)) {
            CC_SETGRAPHIC(7572);
        };
        if ((CC_FIND(int0, 3) == 1)) {
            CC_SETGRAPHIC(7577);
        };
        IF_SETONMOUSEREPEAT(callback(), int0);
        IF_SETONMOUSELEAVE(callback(), int0);
    } else {
        script5058(int0, 0);
        if ((CC_FIND(int0, 3) == 1)) {
            CC_SETGRAPHIC(7576);
        };
        IF_SETONMOUSEREPEAT(callback(script5057, -2147483645, 1), int0);
        IF_SETONMOUSELEAVE(callback(script5057, -2147483645, 0), int0);
    };
    return;
}