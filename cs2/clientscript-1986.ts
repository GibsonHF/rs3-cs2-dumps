//
function script1986(int0: number, int1: number): void {
    switch (int0) {
        case 67829884: {
            if ((varbitplayer_21650 == 1)) {
                IF_SETTEXT("Owned", comp(1035, 127));  // town_rewards:positive_button_text_1
                IF_SETHIDE(false, comp(1035, 125));  // town_rewards:positive_button_disabled_layer_1
                SOUND_VORBIS_VOLUME(14375 as vorbis, 1, 0, 150);
            } else {
                IF_SETTEXT("Unlock", comp(1035, 127));  // town_rewards:positive_button_text_1
                SOUND_VORBIS_VOLUME(36962 as vorbis, 1, 0, 150);
            };
            break;
        }
        case 67829891: {
            if ((varbitplayer_21651 == 1)) {
                IF_SETTEXT("Owned", comp(1035, 134));  // town_rewards:positive_button_text_2
                IF_SETHIDE(false, comp(1035, 132));  // town_rewards:positive_button_disabled_layer_2
                SOUND_VORBIS_VOLUME(14375 as vorbis, 1, 0, 150);
            } else {
                IF_SETTEXT("Unlock", comp(1035, 134));  // town_rewards:positive_button_text_2
                SOUND_VORBIS_VOLUME(36962 as vorbis, 1, 0, 150);
            };
            break;
        }
        case 67829898: {
            if ((varbitplayer_21652 == 1)) {
                IF_SETTEXT("Owned", comp(1035, 141));  // town_rewards:positive_button_text_3
                IF_SETHIDE(false, comp(1035, 139));  // town_rewards:positive_button_disabled_layer_3
                SOUND_VORBIS_VOLUME(14375 as vorbis, 1, 0, 150);
            } else {
                IF_SETTEXT("Unlock", comp(1035, 141));  // town_rewards:positive_button_text_3
                SOUND_VORBIS_VOLUME(36962 as vorbis, 1, 0, 150);
            };
            break;
        }
        case 67829905: {
            if ((varbitplayer_21653 == 1)) {
                IF_SETTEXT("Owned", comp(1035, 148));  // town_rewards:positive_button_text_4
                IF_SETHIDE(false, comp(1035, 146));  // town_rewards:positive_button_disabled_layer_4
                SOUND_VORBIS_VOLUME(14375 as vorbis, 1, 0, 150);
            } else {
                IF_SETTEXT("Unlock", comp(1035, 148));  // town_rewards:positive_button_text_4
                SOUND_VORBIS_VOLUME(36962 as vorbis, 1, 0, 150);
            };
            break;
        }
        case 67829933: {
            if ((varbitplayer_21654 == 1)) {
                IF_SETTEXT("Owned", comp(1035, 176));  // town_rewards:positive_button_text_8
                IF_SETHIDE(false, comp(1035, 174));  // town_rewards:positive_button_disabled_layer_8
                SOUND_VORBIS_VOLUME(14375 as vorbis, 1, 0, 150);
            } else {
                IF_SETTEXT("Unlock", comp(1035, 176));  // town_rewards:positive_button_text_8
                SOUND_VORBIS_VOLUME(36962 as vorbis, 1, 0, 150);
            };
            break;
        }
        case 67829940: {
            if ((varbitplayer_21655 == 1)) {
                IF_SETTEXT("Owned", comp(1035, 183));  // town_rewards:positive_button_text_9
                IF_SETHIDE(false, comp(1035, 181));  // town_rewards:positive_button_disabled_layer_9
                SOUND_VORBIS_VOLUME(14375 as vorbis, 1, 0, 150);
            } else {
                IF_SETTEXT("Unlock", comp(1035, 183));  // town_rewards:positive_button_text_9
                SOUND_VORBIS_VOLUME(36962 as vorbis, 1, 0, 150);
            };
            break;
        }
        case 67829947: {
            if ((varbitplayer_21656 == 1)) {
                IF_SETTEXT("Owned", comp(1035, 190));  // town_rewards:positive_button_text_10
                IF_SETHIDE(false, comp(1035, 188));  // town_rewards:positive_button_disabled_layer_10
                SOUND_VORBIS_VOLUME(14375 as vorbis, 1, 0, 150);
            } else {
                IF_SETTEXT("Unlock", comp(1035, 190));  // town_rewards:positive_button_text_10
                SOUND_VORBIS_VOLUME(36962 as vorbis, 1, 0, 150);
            };
            break;
        }
        case 67829954: {
            if ((varbitplayer_21657 == 1)) {
                IF_SETTEXT("Owned", comp(1035, 197));  // town_rewards:positive_button_text_11
                IF_SETHIDE(false, comp(1035, 195));  // town_rewards:positive_button_disabled_layer_11
                SOUND_VORBIS_VOLUME(14375 as vorbis, 1, 0, 150);
            } else {
                IF_SETTEXT("Unlock", comp(1035, 197));  // town_rewards:positive_button_text_11
                SOUND_VORBIS_VOLUME(36962 as vorbis, 1, 0, 150);
            };
            break;
        }
        case 67829765: {
            IF_SETTEXT(`Wins: ${inttostring(varbitplayer_21659, 10)}    Reward points: ${inttostring(varbitplayer_21658, 10)}`, comp(1035, 5));  // town_rewards:current_points_text
            break;
        }
        case 67829856: {
            IF_SETTEXT(`Level: ${inttostring(varplayer_4163, 10)}`, comp(1035, 96));  // town_rewards:robber_level
            break;
        }
        case 67829811: {
            IF_SETTEXT(`Level: ${inttostring(varplayer_4162, 10)}`, comp(1035, 51));  // town_rewards:guard_level
            break;
        }
    };
    return;
}