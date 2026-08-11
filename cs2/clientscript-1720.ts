//
function script1720(int0: number): void {
    if (((IF_GETHIDE(comp(1082, 33)) == false) && (int0 == 0))) {  // trh189_overlay:skin_select
        return;
    };
    IF_SETHIDE(false, comp(1082, 0));  // trh189_overlay:splash_screen
    IF_SETHIDE(true, comp(1082, 32));  // trh189_overlay:universe
    IF_SETHIDE(true, comp(1253, 5));  // wheel_of_fortune:background
    script19920(0, 70909985);
    script18479();
    return;
}