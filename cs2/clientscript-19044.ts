//
function script19044(): void {
    var int0 = 0;
    var int1 = comp(-1, 65535);
    while ((++int0 <= 3)) {
        switch (int0) {
            case 1: {
                int1 = comp(1014, 79);
                break;
            }
            case 2: {
                int1 = comp(1014, 80);
                break;
            }
            case 3: {
                int1 = comp(1014, 81);
                break;
            }
        };
        IF_SETMODELANIM(36177 as seq, int1);
        IF_SETONTIMER(callback(script16715, CLIENTCLOCK(), int0, int1, 60), int1);
    };
    IF_SETONTIMER(callback(script19045, CLIENTCLOCK(), 50), comp(1014, 37));
    return;
}