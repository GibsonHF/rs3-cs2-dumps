//
function script4319(int0: number, int1: number): void {
    var int2 = 0;
    var int3 = 0;
    var int4 = comp(1096, 29);  // clansettings:clanmate_settings_layer
    var int5 = comp(1096, 19);  // clansettings:clan_list_layer
    var int6 = comp(1096, 35);  // clansettings:clanmate_settings_updown_arrow_left
    var int7 = comp(1096, 36);  // clansettings:clanmate_settings_updown_arrow_right
    var int8 = comp(1096, 31);  // clansettings:clanmate_settings_top_bar_layer
    var int9 = 71827477;
    if ((int0 > 0)) {
        int2 = (int0 - 1);
    } else {
        int2 = 0;
        int3 = IF_GETHEIGHT(int4);
        if ((int1 == 0)) {
            int3 = (int3 + 6);
            IF_SETVFLIP(0, int6);
            IF_SETVFLIP(0, int7);
            IF_SETOP(1, "Hide", int8);
            IF_SETONOP(callback(script4319, 0, 1), int8);
        } else {
            int3 = (int3 - 6);
            IF_SETVFLIP(1, int6);
            IF_SETVFLIP(1, int7);
            IF_SETOP(1, "Show", int8);
            IF_SETONOP(callback(script4319, 0, 0), int8);
        };
        int3 = MIN(int3, 224);
        int3 = MAX(int3, 115);
        IF_SETSIZE(IF_GETWIDTH(int4), int3, 0, 0, int4);
        IF_SETSIZE(IF_GETWIDTH(int5), (int3 - 62), 0, 1, int5);
        if ((int1 == 0)) {
            if ((int3 >= 224)) {
                IF_SETONTIMER(callback(), int4);
            } else if ((int1 == 1)) {
                if ((int3 <= 115)) {
                    IF_SETONTIMER(callback(), int4);
                } else {
                    IF_SETONTIMER(callback(script4319, int2, int1), int4);
                };
            } else {
                IF_SETONTIMER(callback(script4319, int2, int1), int4);
            };
        } else if ((int1 == 1)) {
            if ((int3 <= 115)) {
                IF_SETONTIMER(callback(), int4);
            } else {
                IF_SETONTIMER(callback(script4319, int2, int1), int4);
            };
        } else {
            IF_SETONTIMER(callback(script4319, int2, int1), int4);
        };
        script4302();
    };
    return;
}