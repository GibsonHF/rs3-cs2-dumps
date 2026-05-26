//
function script17761(int0: number): void {
    var int1 = SCALE((CLIENTCLOCK() - int0), 300, 300);
    if (((int1 > 0) && (int1 <= 100))) {
        int1 = (255 - SCALE(255, 100, int1));
        IF_SETTRANS(int1, 76742663);
        IF_SETTRANS(int1, 76742664);
        IF_SETTRANS(int1, 76742662);
        IF_SETTRANS(int1, 76742687);
        return;
    };
    if ((int1 > 100)) {
        IF_SETONTIMER(callback(), 76742674);
    };
    return;
}