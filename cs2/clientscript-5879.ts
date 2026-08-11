//
function script5879(): void {
    varclient_1783 = 0;
    var int0 = 82116608;
    var int1 = MAX(0, script6950());
    var string0 = "Whether to use a single key, or to use one after another.";
    var int2 = script15513();
    if (((PLATFORMTYPE() != 0) && (PLATFORMTYPE() != 5))) {
        IF_SETSIZE(48, 48, 0, 0, comp(1253, 557));  // wheel_of_fortune:wheel_close_button_layer
        IF_SETPOSITION(1, 1, 2, 0, comp(1253, 557));  // wheel_of_fortune:wheel_close_button_layer
        IF_SETONCLICK(callback(script7774, string0, 82116665, -1, 0), comp(1253, 57));  // wheel_of_fortune:multi_wrapper
    };
    switch (int2) {
        case 33217: {
            IF_SETHIDE(true, comp(1253, 8));  // wheel_of_fortune:chests_layer
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            IF_SETHIDE(true, comp(1253, 89));  // wheel_of_fortune:foreground_layer
            IF_SETHIDE(true, comp(1253, 90));  // wheel_of_fortune:foreground_grey
            IF_SETGRAPHIC(27051 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
        case 34277: {
            IF_SETHIDE(true, comp(1253, 8));  // wheel_of_fortune:chests_layer
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            IF_SETHIDE(true, comp(1253, 89));  // wheel_of_fortune:foreground_layer
            IF_SETHIDE(true, comp(1253, 90));  // wheel_of_fortune:foreground_grey
            IF_SETGRAPHIC(28095 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            IF_SETGRAPHIC(script12723(), comp(1786, 1));  // trh104_overlay:background_map
            break;
        }
        default: {
            IF_SETHIDE(false, comp(1253, 8));  // wheel_of_fortune:chests_layer
            IF_SETHIDE(false, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            IF_SETHIDE(false, comp(1253, 90));  // wheel_of_fortune:foreground_grey
            if (((int2 == 33918) || (int2 == 33522))) {
                IF_SETHIDE(true, comp(1253, 89));  // wheel_of_fortune:foreground_layer
            };
            break;
        }
    };
    script4115();
    if (((varbitplayer_4323 > 0) || (varclient_1781 > 0))) {
        script6976();
    } else if ((int1 > 0)) {
        script6974();
    } else {
        script6974();
    };
    script3904();
    varclient_1781 = -1;
    IF_SETONVARCTRANSMIT(callback(script5880, 1800, 1), comp(1253, 45));  // wheel_of_fortune:spins_left_text
    IF_SETONVARTRANSMIT(callback(script5880, 1448, 1451, 2), comp(1253, 45));  // wheel_of_fortune:spins_left_text
    varclient_1784 = 0;
    script5881();
    return;
}