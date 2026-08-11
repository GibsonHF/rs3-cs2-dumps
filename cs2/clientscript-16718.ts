//
function script16718(): void {
    var int0 = comp(-1, 65535);
    var int1 = -1;
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = -1 as obj;
    var int5 = 0;
    var int6 = 1;
    var int7 = 1;
    var int8 = 0;
    int8 = (int8 + 1);
    while ((int8 <= 3)) {
        switch (int8) {
            case 1: {
                int0 = comp(1014, 60);  // trh183_overlay:chest_1_click_layer
                int1 = 66453566;
                int2 = comp(1014, 65);  // trh183_overlay:chest_1_prize_info
                int3 = comp(1014, 66);  // trh183_overlay:chest_1_multiplier_icon
                [int4, int5, int6] = [varplayer_10588, varplayer_10589, varplayer_10590];
                int7 = varplayer_10587;
                break;
            }
            case 2: {
                int0 = comp(1014, 58);  // trh183_overlay:chest_2_click_layer
                int1 = 66453572;
                int2 = comp(1014, 71);  // trh183_overlay:chest_2_prize_info
                int3 = comp(1014, 72);  // trh183_overlay:chest_2_multiplier_icon
                [int4, int5, int6] = [varplayer_10592, varplayer_10593, varplayer_10594];
                int7 = varplayer_10591;
                break;
            }
            case 3: {
                int0 = comp(1014, 56);  // trh183_overlay:chest_3_click_layer
                int1 = 66453578;
                int2 = comp(1014, 77);  // trh183_overlay:chest_3_prize_info
                int3 = comp(1014, 78);  // trh183_overlay:chest_3_multiplier_icon
                [int4, int5, int6] = [varplayer_10596, varplayer_10597, varplayer_10598];
                int7 = varplayer_10595;
                break;
            }
        };
        IF_SETGRAPHIC(script10980(int7), int3);
        IF_SETTEXT(OC_NAME(int4), int2);
        IF_SETOPCURSOR(1, 201, int0);
        script16719(int1, int4, int5, int6, int7);
    };
    IF_SETOPCURSOR(1, 46, comp(1014, 27));  // trh183_overlay:reroll_icon
    IF_SETOPCURSOR(1, 46, comp(1014, 108));  // trh183_overlay:multiplier_icon
    IF_SETOPCURSOR(1, 46, comp(1014, 34));  // trh183_overlay:freeze_icon
    return;
}