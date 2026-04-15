//
function script3370(int0: int, int1: int): void {
    if ((CC_FIND(comp(1216, 6), int0) == 1)) {
        if ((CLIENTCLOCK() > (int1 + 50))) {
            CC_SETPOSITION(CC_GETX(), MAX((CC_GETY() - 2), 0), 0, 0);
            CC_SETTRANS(MIN(255, (CC_GETTRANS() + 7)));
        };
        if ((CC_GETTRANS() >= 255)) {
            CC_DELETE();
        };
    };
    return;
}