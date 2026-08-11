//
function script8827(): void {
    if ((script8292(9, 3) == 0)) {
        printmessage("Cancelled keybind reset.");
        return;
    };
    IF_SETONTIMER(callback(script9899, 4, 0, 5, 0, -2147483645), comp(1444, 0));  // toplevel_v2_keyboard_settings:keybinds_listener
    return;
}