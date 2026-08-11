//
function script17975(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    var int6 = comp(1227, 7);  // bp3_track_tab:reward_info_panel_frame_background
    CC_DELETEALL(int6);
    var int7 = -1;
    var int8 = -1;
    var int9 = -1;
    var int10 = -1;
    var int11 = -1 as graphic;
    var int12 = -1;
    if ((int1 == 1)) {
        int11 = 3864 as graphic;
        int12 = 3863;
        int10 = 7929;
        int8 = script17989(5);
        int9 = script17989(6);
        int7 = 4125;
        IF_SETHIDE(false, comp(1227, 20));  // bp3_track_tab:reward_panel_prem_filigree
    } else {
        int10 = 7930;
        int8 = 7951;
        int9 = 7950;
        int7 = 4126;
        int11 = 3861 as graphic;
        int12 = 3862;
        IF_SETHIDE(true, comp(1227, 20));  // bp3_track_tab:reward_panel_prem_filigree
    };
    script17946(int6, 0, 0, 0, 0, 0, 0, 0, 1, 1, int10);
    var int13 = comp(1227, 21);  // bp3_track_tab:reward_info_selector_holder
    CC_DELETEALL(int13);
    var int14 = 0;
    script2994(int13, int14, 0, 0, 1, 0, 130, 42, 0, 0, int7);
    int14 = (int14 + 1);
    var int15 = 6;
    switch (int4) {
        case 1: {
            script2994(int13, int14, 0, 0, 1, 2, 14, 10, 0, 0, int11);
            int14 = (int14 + 1);
            break;
        }
        case 2: {
            script2994(int13, int14, (0 - int15), 0, 1, 2, 14, 10, 0, 0, int12);
            int14 = (int14 + 1);
            script2994(int13, int14, int15, 0, 1, 2, 14, 10, 0, 0, int12);
            int14 = (int14 + 1);
            break;
        }
        case 3: {
            script2994(int13, int14, (0 - (int15 + 6)), 0, 1, 2, 14, 10, 0, 0, int12);
            int14 = (int14 + 1);
            script2994(int13, int14, 0, 0, 1, 2, 14, 10, 0, 0, int12);
            int14 = (int14 + 1);
            script2994(int13, int14, (int15 + 6), 0, 1, 2, 14, 10, 0, 0, int12);
            int14 = (int14 + 1);
            break;
        }
        case 4: {
            script2994(int13, int14, (0 - (int15 + 12)), 0, 1, 2, 14, 10, 0, 0, int12);
            int14 = (int14 + 1);
            script2994(int13, int14, (0 - int15), 0, 1, 2, 14, 10, 0, 0, int12);
            int14 = (int14 + 1);
            script2994(int13, int14, int15, 0, 1, 2, 14, 10, 0, 0, int12);
            int14 = (int14 + 1);
            script2994(int13, int14, (int15 + 12), 0, 1, 2, 14, 10, 0, 0, int12);
            int14 = (int14 + 1);
            break;
        }
    };
    if ((CC_FIND(int13, (int5 + 1)) == 1)) {
        CC_SETGRAPHIC(int11);
    };
    CC_DELETEALL(comp(1227, 31));  // bp3_track_tab:next_reward_button
    script7852(80412703, 0, 0, 0, 0, 0, 0, 0, 1, 1, int8, "");
    CC_SETOP(1, "Next Reward");
    CC_SETONOP(callback(script18035));
    CC_DELETEALL(comp(1227, 30));  // bp3_track_tab:previous_reward_button
    script7852(80412702, 0, 0, 0, 0, 0, 0, 0, 1, 1, int9, "");
    CC_SETOP(1, "Previous Reward");
    CC_SETONOP(callback(script18034));
    return;
}