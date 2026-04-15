//
function script8210(int0: int, int1: int, string0: string): void {
    IF_SETTEXT("", comp(1444, 1001));
    IF_SETHIDE(false, comp(1444, 999));
    script4161(comp(1444, 1000), 180);
    if ((int0 != -1)) {
        IF_SETONCLICK(callback(script8199, int0, int1), comp(1444, 999));
    } else {
        IF_SETONCLICK(callback(), comp(1444, 999));
    };
    IF_SETONTIMER(callback(script8211, -2147483645, 94634984, 94634985, string0, (CLIENTCLOCK() + 200)), 94634983);
    return;
}