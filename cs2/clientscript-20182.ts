//
function script20182(int0: int): void {
    var int1 = (CLIENTCLOCK() - int0);
    IF_SETHIDE(true, comp(1395, 23));
    if ((int1 < 50)) {
        script20183((255 - SCALE(255, 50, int1)));
    } else if (((int1 >= 50) && (int1 < 150))) {
        IF_SETHIDE(true, comp(1395, 23));
    } else if (((int1 >= 150) && (int1 < 200))) {
        int1 = (255 - SCALE(255, 50, (200 - int1)));
        script20183(int1);
    };
    return;
}