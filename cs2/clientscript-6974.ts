//
function script6974(): void {
    script3915();
    IF_SETHIDE(true, comp(1253, 90));  // wheel_of_fortune:foreground_grey
    IF_SETHIDE(true, comp(1253, 265));  // wheel_of_fortune:reward_layer
    IF_SETHIDE(true, comp(1253, 91));  // wheel_of_fortune:play_again_layer
    IF_SETHIDE(true, comp(1253, 519));  // wheel_of_fortune:ticker_tooltip_layer
    IF_SETHIDE(false, comp(1253, 15));  // wheel_of_fortune:chest_layer_4
    IF_SETHIDE(false, comp(1253, 10));  // wheel_of_fortune:chest_layer_5
    var int0 = script16161();
    script20040(int0);
    switch (int0) {
        case 33217: {
            IF_SETHIDE(true, comp(1253, 8));  // wheel_of_fortune:chests_layer
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            IF_SETHIDE(true, comp(1253, 89));  // wheel_of_fortune:foreground_layer
            IF_SETGRAPHIC(27051 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
        case 33918:
        case 33522: {
            IF_SETHIDE(false, comp(1253, 8));  // wheel_of_fortune:chests_layer
            IF_SETHIDE(false, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            IF_SETHIDE(true, comp(1253, 89));  // wheel_of_fortune:foreground_layer
            break;
        }
        case 33919: {
            IF_SETHIDE(false, comp(1253, 8));  // wheel_of_fortune:chests_layer
            IF_SETHIDE(false, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            IF_SETHIDE(false, comp(1253, 89));  // wheel_of_fortune:foreground_layer
            IF_SETGRAPHIC(21204 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
        case 34277: {
            IF_SETHIDE(true, comp(1253, 8));  // wheel_of_fortune:chests_layer
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            IF_SETHIDE(true, comp(1253, 89));  // wheel_of_fortune:foreground_layer
            IF_SETGRAPHIC(28095 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            IF_SETGRAPHIC(script12723(), comp(1786, 1));  // trh104_overlay:background_map
            break;
        }
        case 1515:
        case 40380:
        case 7229:
        case 44604:
        case 49941: {
            script19019(int0);
            break;
        }
        case 37490: {
            IF_SETHIDE(false, comp(1253, 8));  // wheel_of_fortune:chests_layer
            IF_SETHIDE(false, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            IF_SETHIDE(false, comp(1253, 89));  // wheel_of_fortune:foreground_layer
            IF_SETHIDE(true, comp(1253, 15));  // wheel_of_fortune:chest_layer_4
            IF_SETHIDE(true, comp(1253, 10));  // wheel_of_fortune:chest_layer_5
            IF_SETGRAPHIC(27752 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
        case 19622: {
            IF_SETHIDE(false, comp(1253, 8));  // wheel_of_fortune:chests_layer
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            IF_SETHIDE(true, comp(1253, 89));  // wheel_of_fortune:foreground_layer
            if ((script16682() == 1)) {
                IF_SETHIDE(true, comp(1253, 265));  // wheel_of_fortune:reward_layer
                IF_SETHIDE(true, comp(984, 17));  // trh_generic_jackpot_claim:prize_claim_overlay
            };
            break;
        }
        default: {
            IF_SETHIDE(false, comp(1253, 8));  // wheel_of_fortune:chests_layer
            IF_SETHIDE(false, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            IF_SETHIDE(false, comp(1253, 89));  // wheel_of_fortune:foreground_layer
            IF_SETGRAPHIC(struct_getparam(int0, 8206), comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
    };
    script3904();
    if ((varclient_4745 != -1 as struct)) {
        IF_SETHIDE(false, comp(1253, 72));  // wheel_of_fortune:countdown_text
        IF_SETHIDE(false, comp(1253, 69));  // wheel_of_fortune:info_icon
        IF_SETHIDE(false, comp(1253, 70));  // wheel_of_fortune:info_icon_holder
    };
    switch (int0) {
        case 47035: {
            script19918();
            break;
        }
        default: {
            script16198(1, 82116873);
            break;
        }
    };
    varclient_4083 = 2;
    script10877();
    if ((script18808() == 0)) {
        script6574(1);
    };
    return;
}