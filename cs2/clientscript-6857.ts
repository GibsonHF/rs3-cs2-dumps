//
function script6857(int0: int, int1: component, int2: unknown_int): void {
    var int3 = (CLIENTCLOCK() - int0);
    if (((int3 == 0) && (int2 == 1))) {
        IF_SETMODELANIM(17717 as seq, comp(1355, 1));
    };
    if ((int3 < 50)) {
        IF_SETTRANS((255 - SCALE(int3, 50, 255)), int1);
    } else if ((int3 == 50)) {
        IF_SETTRANS(0, int1);
        IF_SETMODELANIM(-1 as seq, comp(1355, 1));
        IF_SETMODEL(-1 as model, comp(1355, 1));
    } else if ((int3 > 100)) {
        IF_SETTRANS(SCALE((int3 - 100), 150, 255), int1);
    };
    if ((int3 >= 250)) {
        IF_SETONTIMER(callback(), int1);
    };
    return;
}