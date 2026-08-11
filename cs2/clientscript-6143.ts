//
function script6143(int0: number, int1: number): void {
    switch (int0) {
        case 1: {
            IF_SETHIDE(true, comp(1270, 67));  // fremsaga_bilrach_mind:mind_button1
            break;
        }
        case 2: {
            IF_SETHIDE(true, comp(1270, 68));  // fremsaga_bilrach_mind:mind_button2
            break;
        }
        case 3: {
            IF_SETHIDE(true, comp(1270, 69));  // fremsaga_bilrach_mind:mind_button3
            break;
        }
    };
    var int2 = 0;
    if ((IF_GETHIDE(comp(1270, 10)) == false)) {  // fremsaga_bilrach_mind:bluebar_l_1
        int2 = (int2 + 1);
    };
    if ((IF_GETHIDE(comp(1270, 26)) == false)) {  // fremsaga_bilrach_mind:bluebar_m_1
        int2 = (int2 + 1);
    };
    if ((IF_GETHIDE(comp(1270, 28)) == false)) {  // fremsaga_bilrach_mind:bluebar_r_1
        int2 = (int2 + 1);
    };
    switch (int2) {
        case 0: {
            IF_SETHIDE(false, comp(1270, 10));  // fremsaga_bilrach_mind:bluebar_l_1
            if ((int1 == 1)) {
                IF_SETHIDE(false, comp(1270, 39));  // fremsaga_bilrach_mind:memory_icon_full_1
                IF_SETHIDE(false, comp(1270, 11));  // fremsaga_bilrach_mind:bluebar_l_2
            } else {
                IF_SETHIDE(false, comp(1270, 36));  // fremsaga_bilrach_mind:memory_icon_half_1
            };
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1270, 26));  // fremsaga_bilrach_mind:bluebar_m_1
            if ((int1 == 1)) {
                IF_SETHIDE(false, comp(1270, 40));  // fremsaga_bilrach_mind:memory_icon_full_2
                IF_SETHIDE(false, comp(1270, 27));  // fremsaga_bilrach_mind:bluebar_m_2
            } else {
                IF_SETHIDE(false, comp(1270, 37));  // fremsaga_bilrach_mind:memory_icon_half_2
            };
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1270, 28));  // fremsaga_bilrach_mind:bluebar_r_1
            if ((int1 == 1)) {
                IF_SETHIDE(false, comp(1270, 41));  // fremsaga_bilrach_mind:memory_icon_full_3
                IF_SETHIDE(false, comp(1270, 29));  // fremsaga_bilrach_mind:bluebar_r_2
            } else {
                IF_SETHIDE(false, comp(1270, 38));  // fremsaga_bilrach_mind:memory_icon_half_3
            };
            break;
        }
    };
    return;
}