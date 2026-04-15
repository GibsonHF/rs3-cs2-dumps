//
function script16578(): [int, int] {
    var int0 = CC_GETX();
    var int1 = CC_GETY();
    var int2 = CC_GETPARENTLAYER();
    while ((CC_GETDYNAMICLAYER() == 1)) {
        if ((CC_GETID() != -1)) {
            int0 = (int0 + (CC_GETX() - CC_GETSCROLLX()));
            int1 = (int1 + operator("-", CC_GETSCROLLY(CC_GETY())));
        };
    };
    while ((IF_GETPARENTLAYER(int2) != comp(-1, 65535))) {
        int0 = (int0 + (IF_GETX(int2) - IF_GETSCROLLX(int2)));
        int1 = (int1 + (IF_GETY(int2) - IF_GETSCROLLY(int2)));
        int2 = IF_GETPARENTLAYER(int2);
    };
    return [int0, int1];
}