//
function script4910(int0: component): void {
    var int1 = 0;
    var int2 = 24;
    var int3 = 24;
    if ((IF_GETWIDTH(int0) < int2)) {
        IF_SETSIZE(int2, IF_GETHEIGHT(int0), 0, 0, int0);
    };
    if ((IF_GETHEIGHT(int0) < int3)) {
        IF_SETSIZE(IF_GETWIDTH(int0), int3, 0, 0, int0);
    };
    CC_DELETEALL(int0);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETSIZE(int2, int3, 0, 0);
    CC_SETGRAPHIC(7599 as graphic);
    int1 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 5, int1);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETSIZE(int2, int3, 0, 0);
    CC_SETGRAPHIC(7600 as graphic);
    CC_SETONMOUSEOVER(callback(script4410, int0, int1, 0));
    CC_SETONMOUSELEAVE(callback(script4410, int0, int1, 1));
    CC_SETTRANS(255);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETSIZE(int2, int3, 0, 0);
    CC_SETGRAPHIC(7601);
    CC_SETONCLICK(callback(script4207, -2147483645, 0));
    CC_SETONRELEASE(callback(script4207, -2147483645, 1));
    CC_SETTRANS(255);
    return;
}