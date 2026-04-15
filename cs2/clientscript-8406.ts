//
function script8406(int0: component, int1: int): [int, int] {
    var int2 = 0;
    var int3 = 0;
    var int4 = comp(-1, 65535);
    if ((CC_FIND(int0, int1) == 1)) {
        int2 = CC_GETX();
        int3 = CC_GETY();
        int4 = CC_GETPARENTLAYER();
        while ((CC_GETDYNAMICLAYER() == 1)) {
            if ((CC_GETID() != -1)) {
                int2 = (int2 + (CC_GETX() - CC_GETSCROLLX()));
                int3 = (int3 + operator("-", CC_GETSCROLLY(CC_GETY())));
            };
        };
        while ((IF_GETPARENTLAYER(int4) != comp(-1, 65535))) {
            int2 = (int2 + (IF_GETX(int4) - IF_GETSCROLLX(int4)));
            int3 = (int3 + (IF_GETY(int4) - IF_GETSCROLLY(int4)));
            int4 = IF_GETPARENTLAYER(int4);
        };
    };
    return [int2, int3];
}