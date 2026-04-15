//
function script5979(int0: component): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    CC_DELETEALL(int0);
    var int1 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 3, int1);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETCOLOUR(0);
    CC_SETFILL(1);
    int1 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 3, int1);
    CC_SETPOSITION(2, 2, 0, 0);
    CC_SETSIZE(4, 4, 1, 1);
    CC_SETCOLOUR(15650030);
    CC_SETFILL(0);
    int1 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 3, int1);
    CC_SETPOSITION(4, 4, 0, 0);
    CC_SETSIZE(8, 8, 1, 1);
    CC_SETCOLOUR(3877157);
    CC_SETFILL(1);
    int1 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 3, int1);
    CC_SETPOSITION(2, 2, 0, 0);
    CC_SETSIZE(4, 4, 1, 1);
    CC_SETCOLOUR(16777215);
    CC_SETFILL(1);
    CC_SETONMOUSEOVER(callback(script2140, -2147483645, int1, 128));
    CC_SETONMOUSELEAVE(callback(script2140, -2147483645, int1, 255));
    CC_SETTRANS(255);
    int1 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 3, int1);
    CC_SETPOSITION(2, 2, 0, 0);
    CC_SETSIZE(4, 4, 1, 1);
    CC_SETCOLOUR(0);
    CC_SETFILL(1);
    CC_SETONCLICK(callback(script2140, -2147483645, int1, 128));
    CC_SETONRELEASE(callback(script2140, -2147483645, int1, 255));
    CC_SETTRANS(255);
    return;
}