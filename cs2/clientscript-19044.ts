//
function script19044(): void {
    var int0 = 0;
    var int1 = -1;
    while ((++int0 <= 3)) {
        switch (int0) {
            case 1: {
                int1 = 66453583;
                break;
            }
            case 2: {
                int1 = 66453584;
                break;
            }
            case 3: {
                int1 = 66453585;
                break;
            }
        };
        IF_SETMODELANIM(36177, int1);
        IF_SETONTIMER(callback(script16715, CLIENTCLOCK(), int0, int1, 60), int1);
    };
    IF_SETONTIMER(callback(script19045, CLIENTCLOCK(), 50), 66453541);
    return;
}