//
function script18831(): void {
    CC_DELETEALL(82117164);
    var int0 = -1;
    while ((++int0 <= 3)) {
        CC_CREATE(82117164, 5, int0);
    };
    var int1 = -1;
    int0 = 0;
    while ((++int0 <= 3)) {
        switch (int0) {
            case 1: {
                int1 = 84017173;
                break;
            }
            case 2: {
                int1 = 84017174;
                break;
            }
            case 3: {
                int1 = 84017175;
                break;
            }
        };
        IF_SETONTIMER(callback(script18832, CLIENTCLOCK(), int1), int1);
        IF_SETMODEL(126627, int1);
    };
    return;
}