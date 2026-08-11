//
function script6976(): void {
    script3915();
    script17165(script16161(), 1);
    script19064();
    if (((varbitplayer_4323 <= 0) && (varbitplayer_25803 == 0))) {
        script6974();
        return;
    };
    var int0 = script16161();
    IF_SETHIDE(true, comp(1253, 8));  // wheel_of_fortune:chests_layer
    IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
    IF_SETHIDE(true, comp(1253, 90));  // wheel_of_fortune:foreground_grey
    IF_SETHIDE(false, comp(1253, 265));  // wheel_of_fortune:reward_layer
    IF_SETHIDE(true, comp(1253, 91));  // wheel_of_fortune:play_again_layer
    IF_SETHIDE(true, comp(1253, 519));  // wheel_of_fortune:ticker_tooltip_layer
    switch (int0) {
        case 33217: {
            IF_SETHIDE(true, comp(1253, 89));  // wheel_of_fortune:foreground_layer
            IF_SETGRAPHIC(27051 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
        case 34277: {
            IF_SETHIDE(true, comp(1253, 89));  // wheel_of_fortune:foreground_layer
            IF_SETGRAPHIC(28095 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            IF_SETGRAPHIC(script12723(), comp(1786, 1));  // trh104_overlay:background_map
            break;
        }
        case 34949: {
            script12906();
            break;
        }
        case 1530: {
            IF_SETMODELANIM(-1 as seq, comp(696, 5));  // trh169_overlay:trh169_slime_model
            break;
        }
        case 33918:
        case 33522: {
            IF_SETHIDE(true, comp(1253, 89));  // wheel_of_fortune:foreground_layer
            break;
        }
        case 19622: {
            if ((script16682() == 1)) {
                IF_SETHIDE(true, comp(1253, 265));  // wheel_of_fortune:reward_layer
                IF_SETHIDE(false, comp(984, 17));  // trh_generic_jackpot_claim:prize_claim_overlay
            };
            break;
        }
        case 32986:
        case 50263:
        case 2951: {
            IF_SETHIDE(false, comp(1253, 89));  // wheel_of_fortune:foreground_layer
            IF_SETGRAPHIC(struct_getparam(int0, 8206), comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
        default: {
            IF_SETHIDE(false, comp(1253, 89));  // wheel_of_fortune:foreground_layer
            IF_SETGRAPHIC(struct_getparam(int0, 8206), comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
    };
    script3904();
    varclient_4083 = 4;
    script16198(0, 82116873);
    if ((varbitplayer_4321 == 0)) {
        SOUND_VORBIS_VOLUME(43568 as vorbis, 1, 0, 120);
    };
    script9123();
    return;
}