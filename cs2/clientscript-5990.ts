//
function script5990(int0: component, int1: unknown_int): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    CC_DELETEALL(int0);
    var int2 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 5, int2);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETGRAPHIC(5470 as graphic);
    CC_SETTILING(true);
    int2 = (int2 + 1);
    CC_CREATE(int0, 5, int2);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETSIZE(10, 10, 0, 0);
    CC_SETGRAPHIC(4650 as graphic);
    CC_SETTILING(true);
    CC_SETHFLIP(true);
    int2 = (int2 + 1);
    CC_CREATE(int0, 5, int2);
    CC_SETPOSITION(0, 0, 2, 0);
    CC_SETSIZE(10, 10, 0, 0);
    CC_SETGRAPHIC(4650 as graphic);
    CC_SETTILING(true);
    int2 = (int2 + 1);
    CC_CREATE(int0, 5, int2);
    CC_SETPOSITION(0, 0, 1, 0);
    CC_SETSIZE(20, 10, 1, 0);
    CC_SETGRAPHIC(4649 as graphic);
    CC_SETTILING(true);
    int2 = (int2 + 1);
    CC_CREATE(int0, 5, int2);
    CC_SETPOSITION(0, 10, 2, 0);
    CC_SETSIZE(10, 13, 0, 1);
    CC_SETGRAPHIC(4651 as graphic);
    CC_SETTILING(true);
    int2 = (int2 + 1);
    CC_CREATE(int0, 5, int2);
    CC_SETPOSITION(0, 10, 0, 0);
    CC_SETSIZE(10, 13, 0, 1);
    CC_SETGRAPHIC(4651 as graphic);
    CC_SETTILING(true);
    CC_SETHFLIP(true);
    int2 = (int2 + 1);
    CC_CREATE(int0, 5, int2);
    CC_SETPOSITION(0, 1, 0, 2);
    CC_SETSIZE(2, 10, 0, 0);
    CC_SETGRAPHIC(4649 as graphic);
    CC_SETTILING(true);
    CC_SETVFLIP(true);
    int2 = (int2 + 1);
    CC_CREATE(int0, 5, int2);
    CC_SETPOSITION(0, 1, 2, 2);
    CC_SETSIZE(2, 10, 0, 0);
    CC_SETGRAPHIC(4649 as graphic);
    CC_SETTILING(true);
    CC_SETVFLIP(true);
    int2 = (int2 + 1);
    CC_CREATE(int0, 5, int2);
    CC_SETPOSITION(2, 2, 0, 0);
    CC_SETSIZE(4, 4, 1, 1);
    CC_SETONMOUSEOVER(callback(script2140, -2147483645, int2, 128));
    CC_SETONMOUSELEAVE(callback(script2140, -2147483645, int2, 255));
    CC_SETTRANS(255);
    var int3 = -1;
    switch (int1) {
        case 0: {
            int3 = 7396 as graphic;
            break;
        }
        case 1: {
            int3 = 7397 as graphic;
            break;
        }
        case 2: {
            int3 = 7398 as graphic;
            break;
        }
        case 3: {
            int3 = 7399 as graphic;
            break;
        }
        default: {
            return;
        }
    };
    int2 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 5, int2);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETSIZE(30, 20, 0, 0);
    CC_SETGRAPHIC(int3);
    CC_SETTILING(true);
    return;
}