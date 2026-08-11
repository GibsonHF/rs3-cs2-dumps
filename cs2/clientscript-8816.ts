//
function script8816(int0: number): void {
    IF_SETONTIMER(callback(), comp(1444, 0));  // toplevel_v2_keyboard_settings:keybinds_listener
    if ((int0 == 1)) {
        IF_SETONKEY(callback(script8818, -2147483640, -2147483639), comp(1444, 0));  // toplevel_v2_keyboard_settings:keybinds_listener
    } else {
        IF_SETONKEY(callback(), comp(1444, 0));  // toplevel_v2_keyboard_settings:keybinds_listener
    };
    return;
}