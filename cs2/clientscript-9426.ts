//
function script9426(int0: number): void {
    if ((int0 > 0)) {
        IF_SETHIDE(true, comp(711, 23));  // 6awe2_rewards:instructions
    };
    varclient_3857 = int0;
    SOUND_VORBIS_VOLUME(36956 as vorbis, 1, 0, 200);
    IF_SETHIDE(true, comp(711, 31));  // 6awe2_rewards:tier1_armour_layer
    IF_SETHIDE(true, comp(711, 5));  // 6awe2_rewards:tier2_armour_layer
    IF_SETHIDE(true, comp(711, 2));  // 6awe2_rewards:tier3_armour_layer
    IF_SETHIDE(true, comp(711, 32));  // 6awe2_rewards:tier1_emotes_layer
    IF_SETHIDE(true, comp(711, 6));  // 6awe2_rewards:tier2_emotes_layer
    IF_SETHIDE(true, comp(711, 3));  // 6awe2_rewards:tier3_emotes_layer
    IF_SETHIDE(true, comp(711, 33));  // 6awe2_rewards:tier1_xp_layer
    IF_SETHIDE(true, comp(711, 7));  // 6awe2_rewards:tier2_xp_layer
    IF_SETHIDE(true, comp(711, 4));  // 6awe2_rewards:tier3_xp_layer
    IF_SETHIDE(true, comp(711, 38));  // 6awe2_rewards:tier1_ability_layer
    IF_SETHIDE(true, comp(711, 60));  // 6awe2_rewards:tier2_ability_layer
    IF_SETHIDE(true, comp(711, 74));  // 6awe2_rewards:tier3_ability_layer
    switch (int0) {
        case 1: {
            if ((varbitplayer_21031 == 1)) {
                IF_SETHIDE(false, comp(711, 31));  // 6awe2_rewards:tier1_armour_layer
            } else if ((varbitplayer_21031 == 2)) {
                IF_SETHIDE(false, comp(711, 5));  // 6awe2_rewards:tier2_armour_layer
            } else if ((varbitplayer_21031 == 3)) {
                IF_SETHIDE(false, comp(711, 2));  // 6awe2_rewards:tier3_armour_layer
            };
            script9423(1);
            break;
        }
        case 2: {
            if ((varbitplayer_21031 == 1)) {
                IF_SETHIDE(false, comp(711, 32));  // 6awe2_rewards:tier1_emotes_layer
            } else if ((varbitplayer_21031 == 2)) {
                IF_SETHIDE(false, comp(711, 6));  // 6awe2_rewards:tier2_emotes_layer
            } else if ((varbitplayer_21031 == 3)) {
                IF_SETHIDE(false, comp(711, 3));  // 6awe2_rewards:tier3_emotes_layer
            };
            script9423(2);
            break;
        }
        case 3: {
            if ((varbitplayer_21031 == 1)) {
                IF_SETHIDE(false, comp(711, 33));  // 6awe2_rewards:tier1_xp_layer
            } else if ((varbitplayer_21031 == 2)) {
                IF_SETHIDE(false, comp(711, 7));  // 6awe2_rewards:tier2_xp_layer
            } else if ((varbitplayer_21031 == 3)) {
                IF_SETHIDE(false, comp(711, 4));  // 6awe2_rewards:tier3_xp_layer
            };
            script9423(3);
            break;
        }
        case 4: {
            if ((varbitplayer_21031 == 1)) {
                IF_SETHIDE(false, comp(711, 38));  // 6awe2_rewards:tier1_ability_layer
            } else if ((varbitplayer_21031 == 2)) {
                IF_SETHIDE(false, comp(711, 60));  // 6awe2_rewards:tier2_ability_layer
            } else if ((varbitplayer_21031 == 3)) {
                IF_SETHIDE(false, comp(711, 74));  // 6awe2_rewards:tier3_ability_layer
            };
            script9423(4);
            break;
        }
    };
    return;
}