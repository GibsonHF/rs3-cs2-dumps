//
function script16198(int0: number, int1: number): void {
    if ((int1 != 82116674)) {
        IF_SETENABLED(int0, comp(1253, 66));  // wheel_of_fortune:probabilities_button
    };
    if ((int1 != 82116654)) {
        IF_SETENABLED(int0, comp(1253, 46));  // wheel_of_fortune:get_keys_button
    };
    if ((int1 != 82116677)) {
        IF_SETHIDE(int0, comp(1253, 73));  // wheel_of_fortune:countdown_layer_disabled
    };
    if ((int1 != 82116873)) {
        if ((int0 == false)) {
            varclient_1993 = 0;
            script8841(29, 0);
            script1646();
        } else {
            script10877();
            varclient_1993 = 1;
            script8841(29, 1);
        };
    };
    if ((script16161() == 52664)) {
        IF_SETENABLED(false, comp(1253, 46));  // wheel_of_fortune:get_keys_button
    };
    return;
}