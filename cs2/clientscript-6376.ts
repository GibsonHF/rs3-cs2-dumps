//
function script6376(): unknown_int {
    var int0 = CC_GETLAYER();
    if ((int0 == comp(-1, 65535))) {
        return 0;
    };
    var int1 = CC_GETX();
    var int2 = CC_GETY();
    if ((CC_FIND[1](int0, CC_GETID()) == 1)) {
        while (((int0 != comp(-1, 65535)) && (CC_GETDYNAMICLAYER[1]() == 1))) {
            int1 = ((int1 + CC_GETX[1]()) - CC_GETSCROLLX[1]());
            int2 = operator("-", CC_GETSCROLLY[1]((int2 + CC_GETY[1]())));
            if ((CC_GETID[1]() == -1)) {
                if (((int1 < (CC_GETX[1]() - 5)) || (int2 < (CC_GETY[1]() - 5)))) {
                    return 1;
                };
                if ((((int1 + CC_GETWIDTH()) > ((CC_GETX[1]() + CC_GETWIDTH[1]()) + 5)) || ((int2 + CC_GETHEIGHT()) > ((CC_GETY[1]() + CC_GETHEIGHT[1]()) + 5)))) {
                    return 1;
                };
            };
            int0 = CC_GETLAYER[1]();
        };
    };
    return 0;
}