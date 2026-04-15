//
function script18776(int0: component, int1: int): void {
    var int2 = 0;
    var int3 = (CLIENTCLOCK() - int1);
    if ((int3 <= 30)) {
        int2 = MAX(0, (255 - ((255 / (30 / 6)) * int3)));
        int2 = MIN(IF_GETTRANS(comp(764, 19)), int2);
    } else {
        int2 = MIN(255, ((255 / (30 / 5)) * (int3 - 30)));
        int2 = MAX(IF_GETTRANS(comp(764, 19)), int2);
    };
    IF_SETTRANS(int2, comp(764, 19));
    if ((int3 >= (30 * 2))) {
        IF_SETONTIMER(callback(), int0);
    };
    return;
}