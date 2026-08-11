//
function script16195(): void {
    if ((((script16199(82116654) == 1) || (IF_GETENABLED(82116654) == 0)) || (script17333() == 1))) {
        return;
    };
    var int0 = script6430(IF_GETHIDE(comp(1253, 462)));  // wheel_of_fortune:trh_get_keys_layer
    IF_SETHIDE(int0, comp(1253, 462));  // wheel_of_fortune:trh_get_keys_layer
    script16198(int0, 82116654);
    return;
}