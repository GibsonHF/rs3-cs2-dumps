//
function script5717(int0: component, int1: graphic, int2: graphic, int3: graphic): void {
    var int4 = 0;
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    CC_DELETEALL(int0);
    int4 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 5, int4);
    CC_SETSIZE(16384, 16384, 2, 2);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETGRAPHIC(int1);
    int4 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 5, int4);
    CC_SETSIZE(16384, 16384, 2, 2);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETGRAPHIC(int2);
    CC_SETTRANS(255);
    int4 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 5, int4);
    CC_SETSIZE(16384, 16384, 2, 2);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETGRAPHIC(int3);
    CC_SETTRANS(255);
    return;
}