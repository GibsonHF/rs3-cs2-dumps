//
function script4120(): void {
    if ((IF_GETHIDE(comp(1253, 447)) == false)) {  // wheel_of_fortune:trh_promo_info
        IF_SETHIDE(true, comp(1253, 447));  // wheel_of_fortune:trh_promo_info
        script3904();
    };
    IF_SETHIDE(false, comp(1253, 477));  // wheel_of_fortune:options_window
    script6574(1);
    return;
}