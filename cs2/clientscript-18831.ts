//
function script18831(): void {
    CC_DELETEALL(comp(1253, 556));
    var int0 = -1;
    while ((++int0 <= 3)) {
        CC_CREATE(comp(1253, 556), 5, int0);
    };
    var int1 = comp(-1, 65535);
    int0 = 0;
    while ((++int0 <= 3)) {
        switch (int0) {
            case 1: {
                int1 = comp(1282, 21);
                break;
            }
            case 2: {
                int1 = comp(1282, 22);
                break;
            }
            case 3: {
                int1 = comp(1282, 23);
                break;
            }
        };
        IF_SETONTIMER(callback(script18832, CLIENTCLOCK(), int1), int1);
        IF_SETMODEL(126627, int1);
    };
    return;
}