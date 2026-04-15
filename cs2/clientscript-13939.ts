//
function script13939(int0: int): void {
    if ((script6963(int0) != 0)) {
        return;
    };
    if ((CC_FIND(comp(517, 265), int0) == 1)) {
        IF_SETSIZE(0, (CC_GETHEIGHT() + 2), 1, 0, comp(517, 273));
        IF_SETPOSITION(CC_GETX(), CC_GETY(), 0, 0, comp(517, 273));
    };
    IF_SETHIDE(false, comp(517, 273));
    if ((int0 == 19)) {
        script11906();
    } else {
        script11905();
    };
    return;
}