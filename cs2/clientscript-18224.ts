//
function script18224(int0: int, int1: int): void {
    var int2 = comp(1343, 167);
    CC_CREATE(int2, 5, IF_GETNEXTSUBID(int2));
    CC_SETSIZE(58, 3, 0, 0);
    CC_SETPOSITION((((int0 - 2) * 81) + 52), 0, 0, 1);
    if ((int1 != 2)) {
        CC_SETGRAPHIC(17059 as graphic);
    } else {
        CC_SETGRAPHIC(17058 as graphic);
    };
    return;
}