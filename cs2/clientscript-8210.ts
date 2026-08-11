//
function script8210(int0: number, int1: number, string0: string): void {
    IF_SETTEXT("", comp(1444, 1001));  // toplevel_v2_keyboard_settings:notification_text
    IF_SETHIDE(false, comp(1444, 999));  // toplevel_v2_keyboard_settings:notification_holder
    script4161(94634984, 180);
    if ((int0 != -1)) {
        IF_SETONCLICK(callback(script8199, int0, int1), comp(1444, 999));  // toplevel_v2_keyboard_settings:notification_holder
    } else {
        IF_SETONCLICK(callback(), comp(1444, 999));  // toplevel_v2_keyboard_settings:notification_holder
    };
    IF_SETONTIMER(callback(script8211, -2147483645, 94634984, 94634985, string0, (CLIENTCLOCK() + 200)), comp(1444, 999));  // toplevel_v2_keyboard_settings:notification_holder
    return;
}