//
function script1532(int0: number): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = comp(-1, 65535);
    var int6 = comp(-1, 65535);
    var int7 = comp(-1, 65535);
    var int8 = comp(-1, 65535);
    switch (int0) {
        case 1310725: {
            int1 = varbitplayer_25814;
            int2 = varbitplayer_25815;
            int3 = varbitplayer_25816;
            int4 = varbitplayer_25817;
            int5 = comp(20, 9);  // skillcape_customise:preset_1_colour_1
            int6 = comp(20, 10);  // skillcape_customise:preset_1_colour_2
            int7 = comp(20, 11);  // skillcape_customise:preset_1_colour_3
            int8 = comp(20, 12);  // skillcape_customise:preset_1_colour_4
            break;
        }
        case 1310772: {
            int1 = varbitplayer_25818;
            int2 = varbitplayer_25819;
            int3 = varbitplayer_25820;
            int4 = varbitplayer_25821;
            int5 = comp(20, 56);  // skillcape_customise:preset_2_colour_1
            int6 = comp(20, 57);  // skillcape_customise:preset_2_colour_2
            int7 = comp(20, 58);  // skillcape_customise:preset_2_colour_3
            int8 = comp(20, 59);  // skillcape_customise:preset_2_colour_4
            break;
        }
        case 1310819: {
            int1 = varbitplayer_25822;
            int2 = varbitplayer_25823;
            int3 = varbitplayer_25824;
            int4 = varbitplayer_25825;
            int5 = comp(20, 103);  // skillcape_customise:preset_3_colour_1
            int6 = comp(20, 104);  // skillcape_customise:preset_3_colour_2
            int7 = comp(20, 105);  // skillcape_customise:preset_3_colour_3
            int8 = comp(20, 106);  // skillcape_customise:preset_3_colour_4
            break;
        }
        case 1310749: {
            int1 = varbitplayer_52003;
            int2 = varbitplayer_52004;
            int3 = varbitplayer_52005;
            int4 = varbitplayer_52006;
            int5 = comp(20, 31);  // skillcape_customise:preset_4_colour_1
            int6 = comp(20, 32);  // skillcape_customise:preset_4_colour_2
            int7 = comp(20, 33);  // skillcape_customise:preset_4_colour_3
            int8 = comp(20, 34);  // skillcape_customise:preset_4_colour_4
            break;
        }
        case 1310796: {
            int1 = varbitplayer_52007;
            int2 = varbitplayer_52008;
            int3 = varbitplayer_52009;
            int4 = varbitplayer_52010;
            int5 = comp(20, 78);  // skillcape_customise:preset_5_colour_1
            int6 = comp(20, 79);  // skillcape_customise:preset_5_colour_2
            int7 = comp(20, 80);  // skillcape_customise:preset_5_colour_3
            int8 = comp(20, 81);  // skillcape_customise:preset_5_colour_4
            break;
        }
        case 1310843: {
            int1 = varbitplayer_52011;
            int2 = varbitplayer_52012;
            int3 = varbitplayer_52013;
            int4 = varbitplayer_52014;
            int5 = comp(20, 125);  // skillcape_customise:preset_6_colour_1
            int6 = comp(20, 126);  // skillcape_customise:preset_6_colour_2
            int7 = comp(20, 127);  // skillcape_customise:preset_6_colour_3
            int8 = comp(20, 128);  // skillcape_customise:preset_6_colour_4
            break;
        }
    };
    IF_SETCOLOUR(HSVTORGB(int1), int5);
    IF_SETCOLOUR(HSVTORGB(int2), int6);
    IF_SETCOLOUR(HSVTORGB(int3), int7);
    IF_SETCOLOUR(HSVTORGB(int4), int8);
    return;
}