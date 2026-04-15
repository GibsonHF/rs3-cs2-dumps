//
function script1663(int0: component, int1: int, int2: component): void {
    var int3 = 0;
    if (((CC_FIND[1](int0, int1) == 1) && (CC_GETHIDE[1]() == false))) {
        CC_SETHIDE(false);
        if (((CC_GETY[1]() + CC_GETHEIGHT[1]()) < IF_GETSCROLLY(int0))) {
            CC_SETMODELANGLE(0, 0, 512, 1024, 0, 1500);
            CC_SETPOSITION(0, IF_GETY(int0), 1, 0);
            return;
        };
        if ((CC_GETY[1]() >= (IF_GETSCROLLY(int0) + IF_GETHEIGHT(int0)))) {
            CC_SETMODELANGLE(0, 0, 512, 0, 0, 1500);
            CC_SETPOSITION(0, ((IF_GETY(int0) + IF_GETHEIGHT(int0)) - CC_GETHEIGHT()), 1, 0);
            return;
        };
        int3 = ((CC_GETY[1]() - IF_GETSCROLLY(int0)) + IF_GETY(int0));
        if ((int3 > (IF_GETHEIGHT(int2) - CC_GETHEIGHT()))) {
            CC_SETMODELANGLE(0, 0, 512, 256, 0, 1500);
            CC_SETPOSITION(0, (int3 - CC_GETHEIGHT()), 1, 0);
        } else {
            CC_SETMODELANGLE(0, 0, 512, 768, 0, 1500);
            CC_SETPOSITION(0, (int3 + CC_GETHEIGHT[1]()), 1, 0);
        };
        return;
    };
    CC_SETHIDE(true);
    return;
}