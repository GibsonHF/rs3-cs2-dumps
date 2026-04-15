//
function script8211(int0: component, int1: component, int2: component, int3: int, string0: string): void {
    if ((CLIENTCLOCK() < int3)) {
        if ((CC_FIND(int1, 0) == 1)) {
            if ((CC_GETTRANS() > 0)) {
                script4161(int1, MAX(0, (CC_GETTRANS() - 15)));
            } else {
                IF_SETTEXT(string0, int2);
            };
        };
    } else {
        IF_SETTEXT("", int2);
        if ((CC_FIND(int1, 0) == 1)) {
            if ((CC_GETTRANS() < 180)) {
                script4161(int1, MIN(180, (CC_GETTRANS() + 15)));
            } else {
                IF_SETONTIMER(callback(), int0);
                IF_SETHIDE(1, int0);
            };
        };
    };
    return;
}