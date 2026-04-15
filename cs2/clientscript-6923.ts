//
function script6923(int0: component, int1: unknown_int, string0: unknown_string): void {
    CC_DELETEALL(int0);
    script6930(int0, 0);
    CC_CREATE(int0, 5, 0);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETGRAPHIC(170 as graphic);
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1));
    CC_SETONMOUSELEAVE(callback(script8805));
    CC_CREATE(int0, 5, 1);
    script6925(int1);
    CC_SETONINVTRANSMIT(callback(script6924, -2147483645, -2147483643, int1, 94, 1));
    CC_CREATE[1](int0, 5, 2);
    CC_SETSIZE[1](0, 0, 1, 1);
    CC_SETPOSITION[1](0, 0, 1, 1);
    CC_SETGRAPHIC[1](1132);
    script6927(int1);
    CC_SETONVARTRANSMIT(callback(script6926, -2147483645, CC_GETID[1](), int1, 1587, 1));
    IF_SETONOP(callback(script6928, -2147483645, CC_GETID[1](), int1, -2147483644), int0);
    CC_CREATE[1](int0, 5, 3);
    CC_SETSIZE[1](10, 32, 0, 0);
    CC_SETPOSITION[1](0, 0, 1, 1);
    CC_SETGRAPHIC[1](937);
    CC_SETHIDE[1](1);
    CC_SETONTIMER(callback(script6931, -2147483645, CC_GETID[1]()));
    return;
}