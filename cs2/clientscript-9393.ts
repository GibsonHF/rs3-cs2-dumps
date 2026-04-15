//
function script9393(int0: component, int1: int, int2: int, string0: string): [int, int] {
    if ((((int1 + 32) + 5) >= IF_GETWIDTH(int0))) {
        var int2 = (int2 + (32 + 5));
        var int1 = 5;
    };
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(int1, int2, 0, 0);
    CC_SETSIZE(32, 32, 0, 0);
    CC_SETGRAPHIC(29975 as graphic);
    if ((script6431() == false)) {
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, CC_GETID()));
    } else {
        CC_SETOP(1, "View");
        CC_SETONOP(callback(script7774, string0, -2147483645, CC_GETID(), 0));
    };
    int1 = (int1 + (32 + 5));
    return [int1, int2];
}