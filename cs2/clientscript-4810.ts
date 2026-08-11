//
function script4810(): void {
    var int0 = 1;
    IF_SETPOSITION(4, int0, 0, 0, comp(1258, 426));  // clan_stronghold_main_decor:custom_details_section_title_1_1
    int0 = (int0 + 13);
    IF_SETPOSITION(0, int0, 0, 0, comp(1258, 453));  // clan_stronghold_main_decor:custom_details_section_1_1
    int0 = ((int0 + 1) + IF_GETHEIGHT(comp(1258, 453)));  // clan_stronghold_main_decor:custom_details_section_1_1
    if ((IF_GETHEIGHT(comp(1258, 441)) > 0)) {  // clan_stronghold_main_decor:custom_details_section_2_1
        IF_SETHIDE(false, comp(1258, 427));  // clan_stronghold_main_decor:custom_details_section_title_2_1
        IF_SETPOSITION(4, int0, 0, 0, comp(1258, 427));  // clan_stronghold_main_decor:custom_details_section_title_2_1
        int0 = (int0 + 13);
        IF_SETPOSITION(0, int0, 0, 0, comp(1258, 441));  // clan_stronghold_main_decor:custom_details_section_2_1
        int0 = ((int0 + 1) + IF_GETHEIGHT(comp(1258, 441)));  // clan_stronghold_main_decor:custom_details_section_2_1
    } else {
        IF_SETHIDE(true, comp(1258, 427));  // clan_stronghold_main_decor:custom_details_section_title_2_1
        IF_SETPOSITION(0, int0, 0, 0, comp(1258, 441));  // clan_stronghold_main_decor:custom_details_section_2_1
    };
    if ((IF_GETHEIGHT(comp(1258, 429)) > 0)) {  // clan_stronghold_main_decor:custom_details_section_3_1
        IF_SETHIDE(false, comp(1258, 428));  // clan_stronghold_main_decor:custom_details_section_title_3_1
        IF_SETPOSITION(4, int0, 0, 0, comp(1258, 428));  // clan_stronghold_main_decor:custom_details_section_title_3_1
        int0 = (int0 + 13);
        IF_SETPOSITION(0, int0, 0, 0, comp(1258, 429));  // clan_stronghold_main_decor:custom_details_section_3_1
        int0 = ((int0 + 1) + IF_GETHEIGHT(comp(1258, 429)));  // clan_stronghold_main_decor:custom_details_section_3_1
    } else {
        IF_SETHIDE(true, comp(1258, 428));  // clan_stronghold_main_decor:custom_details_section_title_3_1
        IF_SETPOSITION(0, int0, 0, 0, comp(1258, 429));  // clan_stronghold_main_decor:custom_details_section_3_1
    };
    IF_SETPOSITION(0, int0, 0, 0, comp(1258, 465));  // clan_stronghold_main_decor:custom_details_section_bottom_1
    int0 = ((int0 + 1) + IF_GETHEIGHT(comp(1258, 465)));  // clan_stronghold_main_decor:custom_details_section_bottom_1
    IF_SETSCROLLSIZE(0, int0, comp(1258, 425));  // clan_stronghold_main_decor:custom_details_scrolling_layer_1
    if ((IF_GETHIDE(comp(1258, 425)) == false)) {  // clan_stronghold_main_decor:custom_details_scrolling_layer_1
        script31(82444543, 82444713, 5666, 5663, 5664, 5665, 5686, 5685);
    };
    int0 = 1;
    IF_SETPOSITION(4, int0, 0, 0, comp(1258, 345));  // clan_stronghold_main_decor:custom_details_section_title_1_2
    int0 = (int0 + 13);
    IF_SETPOSITION(0, int0, 0, 0, comp(1258, 376));  // clan_stronghold_main_decor:custom_details_section_1_2
    int0 = ((int0 + 1) + IF_GETHEIGHT(comp(1258, 376)));  // clan_stronghold_main_decor:custom_details_section_1_2
    if ((IF_GETHEIGHT(comp(1258, 362)) > 0)) {  // clan_stronghold_main_decor:custom_details_section_2_2
        IF_SETHIDE(false, comp(1258, 346));  // clan_stronghold_main_decor:custom_details_section_title_2_2
        IF_SETPOSITION(4, int0, 0, 0, comp(1258, 346));  // clan_stronghold_main_decor:custom_details_section_title_2_2
        int0 = (int0 + 13);
        IF_SETPOSITION(0, int0, 0, 0, comp(1258, 362));  // clan_stronghold_main_decor:custom_details_section_2_2
        int0 = ((int0 + 1) + IF_GETHEIGHT(comp(1258, 362)));  // clan_stronghold_main_decor:custom_details_section_2_2
    } else {
        IF_SETHIDE(true, comp(1258, 346));  // clan_stronghold_main_decor:custom_details_section_title_2_2
        IF_SETPOSITION(0, int0, 0, 0, comp(1258, 362));  // clan_stronghold_main_decor:custom_details_section_2_2
    };
    if ((IF_GETHEIGHT(comp(1258, 348)) > 0)) {  // clan_stronghold_main_decor:custom_details_section_3_2
        IF_SETHIDE(false, comp(1258, 347));  // clan_stronghold_main_decor:custom_details_section_title_3_2
        IF_SETPOSITION(4, int0, 0, 0, comp(1258, 347));  // clan_stronghold_main_decor:custom_details_section_title_3_2
        int0 = (int0 + 13);
        IF_SETPOSITION(0, int0, 0, 0, comp(1258, 348));  // clan_stronghold_main_decor:custom_details_section_3_2
        int0 = ((int0 + 1) + IF_GETHEIGHT(comp(1258, 348)));  // clan_stronghold_main_decor:custom_details_section_3_2
    } else {
        IF_SETHIDE(true, comp(1258, 347));  // clan_stronghold_main_decor:custom_details_section_title_3_2
        IF_SETPOSITION(0, int0, 0, 0, comp(1258, 348));  // clan_stronghold_main_decor:custom_details_section_3_2
    };
    IF_SETPOSITION(0, int0, 0, 0, comp(1258, 390));  // clan_stronghold_main_decor:custom_details_section_bottom_2
    int0 = ((int0 + 1) + IF_GETHEIGHT(comp(1258, 390)));  // clan_stronghold_main_decor:custom_details_section_bottom_2
    IF_SETSCROLLSIZE(0, int0, comp(1258, 344));  // clan_stronghold_main_decor:custom_details_scrolling_layer_2
    if ((IF_GETHIDE(comp(1258, 344)) == false)) {  // clan_stronghold_main_decor:custom_details_scrolling_layer_2
        script31(82444543, 82444632, 5666, 5663, 5664, 5665, 5686, 5685);
    };
    int0 = 1;
    IF_SETPOSITION(4, int0, 0, 0, comp(1258, 258));  // clan_stronghold_main_decor:custom_details_section_title_1_3
    int0 = (int0 + 13);
    IF_SETPOSITION(0, int0, 0, 0, comp(1258, 293));  // clan_stronghold_main_decor:custom_details_section_1_3
    int0 = ((int0 + 1) + IF_GETHEIGHT(comp(1258, 293)));  // clan_stronghold_main_decor:custom_details_section_1_3
    if ((IF_GETHEIGHT(comp(1258, 277)) > 0)) {  // clan_stronghold_main_decor:custom_details_section_2_3
        IF_SETHIDE(false, comp(1258, 259));  // clan_stronghold_main_decor:custom_details_section_title_2_3
        IF_SETPOSITION(4, int0, 0, 0, comp(1258, 259));  // clan_stronghold_main_decor:custom_details_section_title_2_3
        int0 = (int0 + 13);
        IF_SETPOSITION(0, int0, 0, 0, comp(1258, 277));  // clan_stronghold_main_decor:custom_details_section_2_3
        int0 = ((int0 + 1) + IF_GETHEIGHT(comp(1258, 277)));  // clan_stronghold_main_decor:custom_details_section_2_3
    } else {
        IF_SETHIDE(true, comp(1258, 259));  // clan_stronghold_main_decor:custom_details_section_title_2_3
        IF_SETPOSITION(0, int0, 0, 0, comp(1258, 277));  // clan_stronghold_main_decor:custom_details_section_2_3
    };
    if ((IF_GETHEIGHT(comp(1258, 261)) > 0)) {  // clan_stronghold_main_decor:custom_details_section_3_3
        IF_SETHIDE(false, comp(1258, 260));  // clan_stronghold_main_decor:custom_details_section_title_3_3
        IF_SETPOSITION(4, int0, 0, 0, comp(1258, 260));  // clan_stronghold_main_decor:custom_details_section_title_3_3
        int0 = (int0 + 13);
        IF_SETPOSITION(0, int0, 0, 0, comp(1258, 261));  // clan_stronghold_main_decor:custom_details_section_3_3
        int0 = ((int0 + 1) + IF_GETHEIGHT(comp(1258, 261)));  // clan_stronghold_main_decor:custom_details_section_3_3
    } else {
        IF_SETHIDE(true, comp(1258, 260));  // clan_stronghold_main_decor:custom_details_section_title_3_3
        IF_SETPOSITION(0, int0, 0, 0, comp(1258, 261));  // clan_stronghold_main_decor:custom_details_section_3_3
    };
    IF_SETPOSITION(0, int0, 0, 0, comp(1258, 309));  // clan_stronghold_main_decor:custom_details_section_bottom_3
    int0 = ((int0 + 1) + IF_GETHEIGHT(comp(1258, 309)));  // clan_stronghold_main_decor:custom_details_section_bottom_3
    IF_SETSCROLLSIZE(0, int0, comp(1258, 257));  // clan_stronghold_main_decor:custom_details_scrolling_layer_3
    if ((IF_GETHIDE(comp(1258, 257)) == false)) {  // clan_stronghold_main_decor:custom_details_scrolling_layer_3
        script31(82444543, 82444545, 5666, 5663, 5664, 5665, 5686, 5685);
    };
    return;
}