//
function script6857(int0: number, int1: number, int2: number): void {
    var int3 = (CLIENTCLOCK() - int0);
    if (((int3 == 0) && (int2 == 1))) {
        IF_SETMODELANIM(17717, 88801281);
    };
    if ((int3 < 50)) {
        IF_SETTRANS((255 - SCALE(int3, 50, 255)), int1);
    } else if ((int3 == 50)) {
        IF_SETTRANS(0, int1);
        IF_SETMODELANIM(-1, 88801281);
        IF_SETMODEL(-1, 88801281);
    } else if ((int3 > 100)) {
        IF_SETTRANS(SCALE((int3 - 100), 150, 255), int1);
    };
    if ((int3 >= 250)) {
        IF_SETONTIMER(callback(), int1);
    };
    return;
}