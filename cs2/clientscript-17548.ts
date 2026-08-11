//
function script17548(): void {
    if ((varplayer_10946 == -1 as struct)) {
        IF_SETONTIMER(callback(script17548), comp(1181, 2));  // activity_progress_bar_extension:main_window
        return;
    };
    IF_SETONTIMER(callback(), comp(1181, 2));  // activity_progress_bar_extension:main_window
    IF_SETHIDE(true, comp(1181, 3));  // activity_progress_bar_extension:info_box_1_layer
    IF_SETHIDE(true, comp(1181, 7));  // activity_progress_bar_extension:info_box_2_layer
    IF_SETHIDE(true, comp(1181, 4));  // activity_progress_bar_extension:progress_bar_layer
    IF_SETHIDE(true, comp(1181, 5));  // activity_progress_bar_extension:progress_bar_2_layer
    var int0 = 180;
    switch (script11319()) {
        case 29: {
            int0 = 180;
            break;
        }
        case 34: {
            int0 = 175;
            break;
        }
        case 38: {
            int0 = 195;
            break;
        }
    };
    IF_SETSIZE(int0, IF_GETHEIGHT(comp(1181, 6)), 0, 0, comp(1181, 6));  // activity_progress_bar_extension:buff_bar_layer
    var int1 = 0;
    if ((struct_getparam(varplayer_10946, 8991) > 0)) {
        int1 = (CLIENTCLOCK() + (struct_getparam(varplayer_10946, 8991) * 30));
        IF_SETONTIMER(callback(script18323, int1), comp(1181, 0));  // activity_progress_bar_extension:timer_delay
    } else {
        script18324();
    };
    if ((struct_getparam(varplayer_10946, 8990) != -1 as struct)) {
        IF_SETHIDE(false, comp(1181, 1));  // activity_progress_bar_extension:container
        IF_SETPOSITION(0, 25, 1, 0, comp(1171, 29));  // activity_progress_bar:suboverlay_layer
        IF_SETPOSITION(0, 40, 1, 0, comp(1181, 2));  // activity_progress_bar_extension:main_window
        IF_SETSIZE(0, 99, 1, 0, comp(1171, 29));  // activity_progress_bar:suboverlay_layer
    } else {
        IF_SETHIDE(true, comp(1181, 1));  // activity_progress_bar_extension:container
        IF_SETPOSITION(0, 40, 1, 0, comp(1171, 29));  // activity_progress_bar:suboverlay_layer
        IF_SETPOSITION(0, 0, 1, 0, comp(1181, 2));  // activity_progress_bar_extension:main_window
        IF_SETSIZE(118, 99, 1, 0, comp(1171, 29));  // activity_progress_bar:suboverlay_layer
    };
    return;
}