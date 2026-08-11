//
function script7800(int0: number): void {
    var int1 = script8071();
    var int2 = script18936();
    var int3 = comp(-1, 65535);
    var int4 = -1;
    if ((IF_HASSUBMODAL(int1, 1188) == 1)) {
        if ((int0 == 1)) {
            IF_SETONKEY(callback(script5593, -2147483640, -2147483639), comp(1188, 1));  // choice_v2:background
        } else {
            IF_SETONKEY(callback(), comp(1188, 1));  // choice_v2:background
        };
    } else if ((IF_HASSUBMODAL(int2, 387) == 1)) {
        if ((int0 == 1)) {
            IF_SETONKEY(callback(script5177, -2147483640, -2147483639), comp(387, 0));  // chat_v3_choice:chat_v3_choice_holder
        } else {
            IF_SETONKEY(callback(), comp(387, 0));  // chat_v3_choice:chat_v3_choice_holder
        };
    } else if ((IF_HASSUBMODAL(int1, 1193) == 1)) {
        if ((int0 == 1)) {
            IF_SETONKEY(callback(script5583, -2147483640, -2147483639), comp(1193, 1));  // choice_v2_frem:background
        } else {
            IF_SETONKEY(callback(), comp(1193, 1));  // choice_v2_frem:background
        };
    } else {
        if ((IF_HASSUBMODAL(int1, 1184) == 1)) {
            int3 = comp(1184, 15);  // chat_v2_left:click_continue
            int4 = 77594638;
        } else if ((IF_HASSUBMODAL(int1, 1186) == 1)) {
            int3 = comp(1186, 8);  // mesbox_v2:click_continue
            int4 = 77725703;
        } else if ((IF_HASSUBMODAL(int1, 835) == 1)) {
            int3 = comp(835, 8);  // snp_tutorial_mesbox:click_continue
            int4 = 54722566;
        } else if ((IF_HASSUBMODAL(int1, 1189) == 1)) {
            int3 = comp(1189, 20);  // objbox_v2:click_continue
            int4 = 77922323;
        } else if ((IF_HASSUBMODAL(int1, 1191) == 1)) {
            int3 = comp(1191, 15);  // chat_v2_right:click_continue
            int4 = 78053390;
        } else if ((IF_HASSUBMODAL(int1, 1187) == 1)) {
            int3 = comp(1187, 20);  // chat_v2_pair:click_continue
            int4 = 77791251;
        } else if ((IF_HASSUBOVERLAY(int1, 1192 as overlayinterface) == 1)) {
            int3 = comp(1192, 15);  // chat_v2_left_overlay:click_continue
            int4 = 78118926;
        } else if ((IF_HASSUBMODAL(int2, 327) == 1)) {
            int3 = comp(327, 6);  // chat_v3:click_continue
            int4 = -1;
        } else {
            return;
        };
        if ((int0 == 1)) {
            IF_SETONKEY(callback(script5585, -2147483640, -2147483639, int3, int4), int3);
        } else {
            IF_SETONKEY(callback(), int3);
        };
    };
    return;
}