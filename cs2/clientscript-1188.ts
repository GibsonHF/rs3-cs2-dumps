//
function script1188(): void {
    if ((IF_GETHIDE(comp(1420, 183)) == false)) {  // acc_create:graphics_options
        IF_SETHIDE(true, comp(1420, 183));  // acc_create:graphics_options
        script1217();
    } else if ((IF_GETHIDE(comp(1420, 167)) == true)) {  // acc_create:settings_main_layer
        script1217();
    } else {
        script15579();
    };
    return;
}