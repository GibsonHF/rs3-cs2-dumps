//
function script13873(int0: component, int1: int, int2: int): void {
    var string0 = "There are new Player Power Polls to vote on.";
    if ((IF_GETNEXTSUBID(int0) == 0)) {
        CC_CREATE[1](int0, 5, 0);
        CC_SETGRAPHIC[1](23769 as graphic);
        CC_SETSIZE[1](20, 20, 0, 0);
        CC_SETONMOUSEREPEAT[1](callback(script8799, string0, -2147483645, -2147483643));
    };
    if ((CC_FIND[1](int0, 0) == 1)) {
        CC_SETPOSITION[1]((int1 - CC_GETWIDTH[1]()), int2, 0, 0);
    };
    return;
}