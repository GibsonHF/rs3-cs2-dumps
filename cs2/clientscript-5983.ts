//
function script5983(int0: component): void {
    CC_DELETEALL(int0);
    var int1 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 3, IF_GETNEXTSUBID(int0));
    CC_SETCOLOUR(0);
    CC_SETFILL(1);
    CC_SETPOSITION(2, 2, 0, 0);
    CC_SETSIZE(4, 4, 1, 1);
    CC_SETTRANS(255);
    CC_SETONCLICK(callback(script2140, int0, int1, 180));
    CC_SETONRELEASE(callback(script2140, int0, int1, 255));
    return;
}