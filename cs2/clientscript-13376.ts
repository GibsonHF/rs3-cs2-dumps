//
function script13376(int0: component, int1: unknown_int, int2: unknown_int): void {
    var int3 = 0;
    if ((int1 == 1)) {
        CC_DELETEALL(int0);
    };
    if ((IF_GETNEXTSUBID(int0) > 0)) {
        return;
    };
    var int4 = 36;
    var int5 = 36;
    if ((int2 == 1)) {
        int4 = 44;
        int5 = 44;
    };
    while ((int3 < 11)) {
        CC_CREATE(int0, 5, int3);
        CC_SETTRANS(150);
        switch (int3) {
            case 0: {
                CC_SETGRAPHIC(29313 as graphic);
                CC_SETSIZE(4, 10, 0, 0);
                CC_SETPOSITION((((140 - int4) / 2) - CC_GETWIDTH()), ((2 + (int5 + 4)) + ((int5 - 10) / 2)), 0, 0);
                break;
            }
            case 1: {
                CC_SETGRAPHIC(29313 as graphic);
                CC_SETSIZE(4, 10, 0, 0);
                CC_SETPOSITION(((140 + int4) / 2), ((2 + (int5 + 4)) + ((int5 - 10) / 2)), 0, 0);
                break;
            }
            case 2: {
                break;
            }
            case 3: {
                CC_SETGRAPHIC(29313 as graphic);
                CC_SETSIZE((140 - (((int4 + 4) / 2) + 4)), 10, 1, 0);
                CC_SETPOSITION((((140 - int4) / 2) - CC_GETWIDTH()), ((2 + ((int5 + 4) * 2)) + ((int5 - 10) / 2)), 0, 0);
                break;
            }
            case 4: {
                CC_SETGRAPHIC(29313 as graphic);
                CC_SETSIZE((140 - (((int4 + 4) / 2) + 4)), 10, 1, 0);
                CC_SETPOSITION(((140 + int4) / 2), ((2 + ((int5 + 4) * 2)) + ((int5 - 10) / 2)), 0, 0);
                CC_SETTILING(true);
                break;
            }
            case 5: {
                CC_SETGRAPHIC(29316 as graphic);
                CC_SETSIZE(10, 4, 0, 0);
                CC_SETPOSITION(((140 - 10) / 2), (2 + int5), 0, 0);
                break;
            }
            case 6: {
                CC_SETGRAPHIC(29316 as graphic);
                CC_SETSIZE(10, 4, 0, 0);
                CC_SETPOSITION(((140 - 10) / 2), ((2 + int5) + (int5 + 4)), 0, 0);
                break;
            }
            case 7: {
                CC_SETGRAPHIC(29316 as graphic);
                CC_SETSIZE(10, 4, 0, 0);
                CC_SETPOSITION(((140 - 10) / 2), ((2 + int5) + ((int5 + 4) * 2)), 0, 0);
                break;
            }
            case 8: {
                CC_SETGRAPHIC(29316 as graphic);
                CC_SETSIZE(10, 4, 0, 0);
                CC_SETPOSITION(((140 - 10) / 2), ((2 + int5) + ((int5 + 4) * 3)), 0, 0);
                break;
            }
            case 9: {
                CC_SETGRAPHIC(29316 as graphic);
                CC_SETSIZE(10, ((4 * 2) + int5), 0, 0);
                CC_SETPOSITION(((((((140 - int4) / 2) - ((4 + int4) + (4 / 2))) - (CC_GETWIDTH() / 2)) + 140) - IF_GETWIDTH(int0)), ((2 + int5) + ((int5 + 4) * 2)), 0, 0);
                break;
            }
            case 10: {
                CC_SETGRAPHIC(29316 as graphic);
                CC_SETSIZE(10, ((4 * 2) + int5), 0, 0);
                CC_SETPOSITION(((((((140 + int4) / 2) + ((4 + int4) + (4 / 2))) - (CC_GETWIDTH() / 2)) + IF_GETWIDTH(int0)) - 140), ((2 + int5) + ((int5 + 4) * 2)), 0, 0);
                break;
            }
        };
        int3 = (int3 + 1);
    };
    return;
}