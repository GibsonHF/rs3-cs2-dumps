//
function script13827(int0: component): void {
    IF_SETPOSITION((CC_GETX[1]() - 2), (CC_GETY[1]() - 2), 0, 0, int0);
    IF_SETSIZE((CC_GETWIDTH[1]() + 4), (CC_GETHEIGHT[1]() + 4), 0, 0, int0);
    IF_SETHIDE(false, int0);
    return;
}