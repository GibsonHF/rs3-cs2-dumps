//
function script18124(int0: number): number {
    if ((varplayer_11437 != comp(-1, 65535))) {
        if ((IF_GETHIDE(comp(1228, 18)) == false)) {  // bp3_splash_embedded:bonds_overlay_layer
            IF_TRIGGEROP(comp(1228, 1), enum_getreverseindex(9, 0, 16362 as cs2enum, 55836694, 0), 1);  // bp3_splash_embedded:bonds_fake_op
            return 1;
        };
        IF_TRIGGEROP(comp(1228, 4), -1, 1);  // bp3_splash_embedded:close_button
        return 1;
    };
    switch (int0) {
        case 0: {
            if ((IF_GETHIDE(comp(1227, 46)) == false)) {  // bp3_track_tab:claim_all_layer
                IF_TRIGGEROP(comp(1227, 66), 1, 1);  // bp3_track_tab:claim_all_back_button
                return 1;
            };
            break;
        }
        case 1: {
            if ((IF_GETHIDE(comp(1226, 15)) == false)) {  // bp3_missions_tab:skill_selection_holder
                script18091();
                return 1;
            };
            break;
        }
        case 3: {
            break;
        }
        case 2: {
            if ((IF_GETHIDE(comp(891, 3)) == false)) {  // mtx_front_end_confirm:confirm_buy_universe
                IF_TRIGGEROP(comp(891, 8), -1, 1);  // mtx_front_end_confirm:confirm_buy_close
                return 1;
            };
            break;
        }
    };
    return 0;
}