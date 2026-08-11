//
function script19731(int0: number): void {
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    var int6 = comp(-1, 65535);
    var int7 = comp(-1, 65535);
    var int8 = comp(-1, 65535);
    var int9 = comp(-1, 65535);
    var int10 = 0;
    var int11 = -1 as fontmetrics;
    var string0 = "";
    var int12 = -1 as obj;
    var int13 = 0;
    var int14 = 1;
    var int15 = 1;
    var int16 = 0;
    switch (int0) {
        case 1: {
            int1 = comp(1278, 5);  // trh204_overlay:chest_1_layer
            int2 = comp(1278, 63);  // trh204_overlay:chest_1_description
            int3 = comp(1278, 62);  // trh204_overlay:chest_1_click_layer
            int4 = comp(1278, 59);  // trh204_overlay:chest_1_prize_layer
            int5 = comp(1278, 57);  // trh204_overlay:chest_1_background
            int6 = comp(1278, 10);  // trh204_overlay:chest_1_background_glow
            int7 = comp(1278, 60);  // trh204_overlay:chest_1_rarity_corner_graphic
            int10 = varbitplayer_57129;
            int15 = varbitplayer_57135;
            int12 = varplayer_12051;
            int13 = varplayer_12052;
            int14 = varplayer_12053;
            int16 = 1;
            break;
        }
        case 2: {
            int1 = comp(1278, 8);  // trh204_overlay:chest_2_layer
            int2 = comp(1278, 69);  // trh204_overlay:chest_2_description
            int3 = comp(1278, 68);  // trh204_overlay:chest_2_click_layer
            int4 = comp(1278, 65);  // trh204_overlay:chest_2_prize_layer
            int5 = comp(1278, 11);  // trh204_overlay:chest_2_background
            int6 = comp(1278, 9);  // trh204_overlay:chest_2_background_glow
            int7 = comp(1278, 66);  // trh204_overlay:chest_2_rarity_corner_graphic
            int10 = varbitplayer_57130;
            int15 = varbitplayer_57136;
            int12 = varplayer_12054;
            int13 = varplayer_12055;
            int14 = varplayer_12056;
            int16 = 15;
            break;
        }
        case 3: {
            int1 = comp(1278, 6);  // trh204_overlay:chest_3_layer
            int2 = comp(1278, 122);  // trh204_overlay:chest_3_description
            int3 = comp(1278, 128);  // trh204_overlay:chest_3_click_layer
            int4 = comp(1278, 124);  // trh204_overlay:chest_3_prize_layer
            int5 = comp(1278, 120);  // trh204_overlay:chest_3_background
            int6 = comp(1278, 7);  // trh204_overlay:chest_3_background_glow
            int8 = comp(1278, 123);  // trh204_overlay:chest_3_rarity_layer
            int7 = comp(1278, 125);  // trh204_overlay:chest_3_rarity_corner_graphic
            int9 = comp(1278, 126);  // trh204_overlay:chest_3_rarity_corner_graphic_flipped
            int14 = varplayer_12185;
            break;
        }
    };
    var int17 = script19987(int14);
    if ((int0 != 3)) {
        IF_SETGRAPHIC(34692 as graphic, int5);
    } else {
        IF_SETGRAPHIC(34909 as graphic, int5);
        script19726(int8, -1, -1, -1, int14, 100, 80, 35, -50, 1);
        IF_SETHIDE(false, int8);
        IF_SETGRAPHIC(int17, int9);
        IF_SETHIDE(false, int9);
    };
    IF_SETGRAPHIC(int17, int7);
    IF_SETHIDE(true, int7);
    IF_SETHIDE(true, int2);
    IF_SETHIDE(true, int4);
    IF_SETSIZE(200, 260, 0, 0, int5);
    IF_SETPARAM_INT(5841, 2, int1);
    IF_SETPARAM_INT(5840, 3, int1);
    IF_SETPARAM_INT(5942, 4000, int1);
    IF_SETGRAPHIC(34910 as graphic, int6);
    IF_SETHIDE(false, int6);
    IF_SETSIZE(260, 310, 0, 0, int6);
    IF_SETOPCURSOR(1, 201, int3);
    if ((int0 == 3)) {
        return;
    };
    if ((int15 > 1)) {
        string0 = `${inttostring(int15, 10)}x ${OC_NAME(int12)}`;
    } else {
        string0 = OC_NAME(int12);
    };
    IF_SETTEXT(string0, int2);
    int11 = script16927(IF_GETWIDTH(int2), IF_GETHEIGHT(int2), 3, 16357, 15, 11, string0);
    IF_SETTEXTFONT(int11, int2);
    script19726(int4, int12, int13, int15, int14, 100, 80, 35, -50, 1);
    if ((int0 == 2)) {
        varclient_8304 = false;
    };
    IF_SETONTIMER(callback(), int5);
    unk10997(int5);
    unk11010(int16, callback(script19740, int5, int10, int2, int4, int7), int5);
    unk11009();
    script19730();
    return;
}