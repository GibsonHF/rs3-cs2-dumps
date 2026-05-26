//
function script791(int0: number, int1: number, int2: number): void {
    if ((TARGETMODE_ACTIVE() == 1)) {
        TARGETMODE_CANCEL();
        if ((CC_FIND(int0, int1) == 1)) {
            if ((CC_GETTRANS() != 0)) {
                CC_SETONTIMER(callback(script1621, int0, int1, 0, 8));
            } else {
                CC_SETONTIMER(callback());
            };
        };
        return;
    };
    if (((CLIENTCLOCK() > int2) && (CC_FIND(int0, int1) == 1))) {
        if ((CC_GETTRANS() != 0)) {
            CC_SETONTIMER(callback(script1621, int0, int1, 0, 8));
        } else {
            CC_SETONTIMER(callback());
        };
    };
    return;
}