//
function script8210(int0: number, int1: number, string0: string): void {
    IF_SETTEXT("", 94634985);
    IF_SETHIDE(0, 94634983);
    script4161(94634984, 180);
    if ((int0 != -1)) {
        IF_SETONCLICK(callback(script8199, int0, int1), 94634983);
    } else {
        IF_SETONCLICK(callback(), 94634983);
    };
    IF_SETONTIMER(callback(script8211, -2147483645, 94634984, 94634985, string0, (CLIENTCLOCK() + 200)), 94634983);
    return;
}