//
function script8210(int0: number, int1: number, string0: string): void {
    IF_SETTEXT("", comp(1444, 1002));  // toplevel_v2_keyboard_settings:scrollbar
    IF_SETHIDE(false, comp(1444, 1000));  // toplevel_v2_keyboard_settings:notification_box
    script4161(94634985, 180);
    if ((int0 != -1)) {
        IF_SETONCLICK(callback(script8199, int0, int1), comp(1444, 1000));  // toplevel_v2_keyboard_settings:notification_box
    } else {
        IF_SETONCLICK(callback(), comp(1444, 1000));  // toplevel_v2_keyboard_settings:notification_box
    };
    IF_SETONTIMER(callback(script8211, -2147483645, 94634985, 94634986, string0, (CLIENTCLOCK() + 200)), comp(1444, 1000));  // toplevel_v2_keyboard_settings:notification_box
    return;
}