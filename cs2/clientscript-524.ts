//
function script524(int0: number, int1: number): void {
    var int2 = 0;
    if ((varbitplayer_3057 >= 300000)) {
        IF_SETCOLOUR(16711680, int0);
        return;
    };
    if ((int0 == comp(301, 34))) {  // assister_interface:runecraft_text
        int2 = varbitplayer_3044;
    };
    if ((int0 == comp(301, 36))) {  // assister_interface:crafting_text
        int2 = varbitplayer_3045;
    };
    if ((int0 == comp(301, 38))) {  // assister_interface:fletching_text
        int2 = varbitplayer_3047;
    };
    if ((int0 == comp(301, 40))) {  // assister_interface:construction_text
        int2 = varbitplayer_3049;
    };
    if ((int0 == comp(301, 42))) {  // assister_interface:farming_text
        int2 = varbitplayer_3050;
    };
    if ((int0 == comp(301, 44))) {  // assister_interface:magic_text
        int2 = varbitplayer_3052;
    };
    if ((int0 == comp(301, 46))) {  // assister_interface:smithing_text
        int2 = varbitplayer_3054;
    };
    if ((int0 == comp(301, 48))) {  // assister_interface:cooking_text
        int2 = varbitplayer_3055;
    };
    if ((int0 == comp(301, 50))) {  // assister_interface:herblore_text
        int2 = varbitplayer_3056;
    };
    if (((int0 == comp(301, 70) /*assister_interface:assist_total_text*/) || (int0 == comp(301, 71) /*assister_interface:assist_total_xp_display*/))) {
        int2 = 1;
    };
    if ((int2 == 1)) {
        IF_SETCOLOUR(16430130, int0);
        IF_SETCOLOUR(16430130, int1);
    } else {
        IF_SETCOLOUR(13420487, int0);
        IF_SETCOLOUR(13420487, int1);
    };
    return;
}