//
function script9424(int0: number): void {
    if ((int0 > script9514())) {
        switch (int0) {
            case 2: {
                printmessage("This tier is not available until phase 3 of the event.");
                break;
            }
            case 3: {
                printmessage("This tier is not available until phase 5 of the event.");
                break;
            }
            default: {
                printmessage("This tier is not yet available.");
                break;
            }
        };
        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 200);
        return;
    };
    if ((int0 >= 2)) {
        IF_SETHIDE(true, comp(711, 144));  // 6awe2_rewards:tier2_locked
    };
    if ((int0 >= 3)) {
        IF_SETHIDE(true, comp(711, 149));  // 6awe2_rewards:tier3_locked
    };
    IF_SETGRAPHIC(18090 as graphic, comp(711, 136));  // 6awe2_rewards:counter_1_tab_graphic_left
    IF_SETGRAPHIC(18091 as graphic, comp(711, 137));  // 6awe2_rewards:counter_1_tab_graphic_mid
    IF_SETGRAPHIC(18092 as graphic, comp(711, 138));  // 6awe2_rewards:counter_1_tab_graphic_right
    IF_SETGRAPHIC(18090 as graphic, comp(711, 140));  // 6awe2_rewards:counter_2_tab_graphic_left
    IF_SETGRAPHIC(18091 as graphic, comp(711, 141));  // 6awe2_rewards:counter_2_tab_graphic_mid
    IF_SETGRAPHIC(18092 as graphic, comp(711, 142));  // 6awe2_rewards:counter_2_tab_graphic_right
    IF_SETGRAPHIC(18090 as graphic, comp(711, 145));  // 6awe2_rewards:counter_3_tab_graphic_left
    IF_SETGRAPHIC(18091 as graphic, comp(711, 146));  // 6awe2_rewards:counter_3_tab_graphic_mid
    IF_SETGRAPHIC(18092 as graphic, comp(711, 147));  // 6awe2_rewards:counter_3_tab_graphic_right
    switch (int0) {
        case 1: {
            IF_SETGRAPHIC(18087 as graphic, comp(711, 136));  // 6awe2_rewards:counter_1_tab_graphic_left
            IF_SETGRAPHIC(18088 as graphic, comp(711, 137));  // 6awe2_rewards:counter_1_tab_graphic_mid
            IF_SETGRAPHIC(18089 as graphic, comp(711, 138));  // 6awe2_rewards:counter_1_tab_graphic_right
            break;
        }
        case 2: {
            IF_SETGRAPHIC(18087 as graphic, comp(711, 140));  // 6awe2_rewards:counter_2_tab_graphic_left
            IF_SETGRAPHIC(18088 as graphic, comp(711, 141));  // 6awe2_rewards:counter_2_tab_graphic_mid
            IF_SETGRAPHIC(18089 as graphic, comp(711, 142));  // 6awe2_rewards:counter_2_tab_graphic_right
            break;
        }
        case 3: {
            IF_SETGRAPHIC(18087 as graphic, comp(711, 145));  // 6awe2_rewards:counter_3_tab_graphic_left
            IF_SETGRAPHIC(18088 as graphic, comp(711, 146));  // 6awe2_rewards:counter_3_tab_graphic_mid
            IF_SETGRAPHIC(18089 as graphic, comp(711, 147));  // 6awe2_rewards:counter_3_tab_graphic_right
            break;
        }
    };
    varbitplayer_21031 = int0;
    SOUND_VORBIS_VOLUME(36972 as vorbis, 1, 0, 200);
    script9426(varclient_3857);
    return;
}