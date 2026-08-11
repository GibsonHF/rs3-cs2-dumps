//
function script16714(): void {
    CC_DELETEALL(comp(1253, 556));  // wheel_of_fortune:fake_op
    var int0 = -1;
    int0 = (int0 + 1);
    while ((int0 <= 5)) {
        CC_CREATE(comp(1253, 556), 5, int0);  // wheel_of_fortune:fake_op
    };
    var int1 = -1;
    int0 = 0;
    int0 = (int0 + 1);
    while ((int0 <= 3)) {
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
        script11028(int0, int1);
    };
    if ((IF_GETHIDE(comp(1014, 41)) == false)) {  // trh183_overlay:warning_layer
        IF_SETHIDE(true, comp(1014, 41));  // trh183_overlay:warning_layer
    };
    return;
}