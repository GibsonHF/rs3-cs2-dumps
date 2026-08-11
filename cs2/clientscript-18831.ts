//
function script18831(): void {
    CC_DELETEALL(comp(1253, 556));  // wheel_of_fortune:fake_op
    var int0 = -1;
    int0 = (int0 + 1);
    while ((int0 <= 3)) {
        CC_CREATE(comp(1253, 556), 5, int0);  // wheel_of_fortune:fake_op
    };
    var int1 = comp(-1, 65535);
    int0 = 0;
    int0 = (int0 + 1);
    while ((int0 <= 3)) {
        switch (int0) {
            case 1: {
                int1 = comp(1282, 21);  // trh197_overlay:chest_1_model
                break;
            }
            case 2: {
                int1 = comp(1282, 22);  // trh197_overlay:chest_2_model
                break;
            }
            case 3: {
                int1 = comp(1282, 23);  // trh197_overlay:chest_3_model
                break;
            }
        };
        IF_SETONTIMER(callback(script18832, CLIENTCLOCK(), int1), int1);
        IF_SETMODEL(126627 as model, int1);
    };
    return;
}