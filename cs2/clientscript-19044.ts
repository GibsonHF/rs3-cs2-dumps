//
function script19044(): void {
    var int0 = 0;
    var int1 = comp(-1, 65535);
    int0 = (int0 + 1);
    while ((int0 <= 3)) {
        switch (int0) {
            case 1: {
                int1 = comp(1014, 79);  // trh183_overlay:chest_1_model
                break;
            }
            case 2: {
                int1 = comp(1014, 80);  // trh183_overlay:chest_2_model
                break;
            }
            case 3: {
                int1 = comp(1014, 81);  // trh183_overlay:chest_3_model
                break;
            }
        };
        IF_SETMODELANIM(36177 as seq, int1);
        IF_SETONTIMER(callback(script16715, CLIENTCLOCK(), int0, int1, 60), int1);
    };
    IF_SETONTIMER(callback(script19045, CLIENTCLOCK(), 50), comp(1014, 37));  // trh183_overlay:chest_layer
    return;
}