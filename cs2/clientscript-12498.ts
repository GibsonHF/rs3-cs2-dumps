//
function script12498(int0: number): void {
    var int1 = enum_getvalue(0, 26, 11213 as cs2enum, int0);
    var int2 = 5;
    CC_DELETEALL(comp(1760, 57));  // mm16_weekends:next_weekend_scroll_layer
    var int3 = 0;
    var int4 = ENUM_GETOUTPUTCOUNT(int1);
    if ((int0 == 0)) {
        stack(0);
        stack(36);
        stack(int1);
        stack(int3);
        int3 = (int3 + 1);
        int2 = script12499(enum_getvalue(), int2, 0);
        stack(0);
        stack(36);
        stack(int1);
        stack(int3);
        int3 = (int3 + 1);
        int2 = script12499(enum_getvalue(), int2, 0);
    };
    while ((int3 < int4)) {
        stack(0);
        stack(36);
        stack(int1);
        stack(int3);
        int3 = (int3 + 1);
        int2 = script12499(enum_getvalue(), int2, 1);
    };
    IF_SETSCROLLSIZE(IF_GETWIDTH(comp(1760, 57)), int2, comp(1760, 57));  // mm16_weekends:next_weekend_scroll_layer
    script7791(115343419, 115343417);
    if ((IF_GETSCROLLHEIGHT(comp(1760, 57)) <= IF_GETHEIGHT(comp(1760, 57)))) {  // mm16_weekends:next_weekend_scroll_layer
        CC_DELETEALL(comp(1760, 59));  // mm16_weekends:next_weekend_scrollbar_layer
    };
    IF_SETHIDE(true, comp(1760, 14));  // mm16_weekends:ports_button_selected_layer
    IF_SETHIDE(true, comp(1760, 24));  // mm16_weekends:ports_skills_button_selected_layer
    IF_SETHIDE(true, comp(1760, 32));  // mm16_weekends:dungeoneering_button_selected_layer
    IF_SETHIDE(true, comp(1760, 41));  // mm16_weekends:bossslayer_button_selected_layer
    IF_SETHIDE(true, comp(1760, 50));  // mm16_weekends:minigames_button_selected_layer
    switch (int0) {
        case 0: {
            IF_SETHIDE(false, comp(1760, 14));  // mm16_weekends:ports_button_selected_layer
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1760, 24));  // mm16_weekends:ports_skills_button_selected_layer
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1760, 32));  // mm16_weekends:dungeoneering_button_selected_layer
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1760, 41));  // mm16_weekends:bossslayer_button_selected_layer
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(1760, 50));  // mm16_weekends:minigames_button_selected_layer
            break;
        }
    };
    return;
}