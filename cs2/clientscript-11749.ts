//
function script11749(): void {
    if ((varbitplayer_28885 == 1)) {
        IF_SETHIDE(false, comp(1660, 41));  // trh65_ninja_training:easy_task_1_stamped
    };
    if ((varbitplayer_28886 == 1)) {
        IF_SETHIDE(false, comp(1660, 46));  // trh65_ninja_training:easy_task_2_stamped
    };
    if ((varbitplayer_28887 == 1)) {
        IF_SETHIDE(false, comp(1660, 51));  // trh65_ninja_training:easy_task_3_stamped
    };
    if ((varbitplayer_28888 == 1)) {
        IF_SETHIDE(false, comp(1660, 56));  // trh65_ninja_training:easy_task_4_stamped
    };
    if ((varbitplayer_28889 == 1)) {
        IF_SETHIDE(false, comp(1660, 162));  // trh65_ninja_training:medium_task_1_stamped
    };
    if ((varbitplayer_28890 == 1)) {
        IF_SETHIDE(false, comp(1660, 167));  // trh65_ninja_training:medium_task_2_stamped
    };
    if ((varbitplayer_28891 == 1)) {
        IF_SETHIDE(false, comp(1660, 173));  // trh65_ninja_training:medium_task_3_stamped
    };
    if ((varbitplayer_28892 == 1)) {
        IF_SETHIDE(false, comp(1660, 157));  // trh65_ninja_training:medium_task_4_stamped
    };
    if ((varbitplayer_28893 == 1)) {
        IF_SETHIDE(false, comp(1660, 174));  // trh65_ninja_training:hard_task_1_stamped
    };
    if ((varbitplayer_28894 == 1)) {
        IF_SETHIDE(false, comp(1660, 176));  // trh65_ninja_training:hard_task_2_stamped
    };
    if ((varbitplayer_28895 == 1)) {
        IF_SETHIDE(false, comp(1660, 178));  // trh65_ninja_training:hard_task_3_stamped
    };
    if ((varbitplayer_28896 == 1)) {
        IF_SETHIDE(false, comp(1660, 183));  // trh65_ninja_training:hard_task_4_stamped
    };
    if ((varbitplayer_28897 == 1)) {
        IF_SETHIDE(false, comp(1660, 184));  // trh65_ninja_training:elite_task_1_stamped
    };
    if ((varbitplayer_28898 == 1)) {
        IF_SETHIDE(false, comp(1660, 188));  // trh65_ninja_training:elite_task_2_stamped
    };
    if ((varbitplayer_28899 == 1)) {
        IF_SETHIDE(false, comp(1660, 192));  // trh65_ninja_training:elite_task_3_stamped
    };
    if ((varbitplayer_28900 == 1)) {
        IF_SETHIDE(false, comp(1660, 196));  // trh65_ninja_training:elite_task_4_stamped
    };
    if ((varbitplayer_28901 == 1)) {
        IF_SETHIDE(false, comp(1660, 120));  // trh65_ninja_training:line_prize_1_stamped
    };
    if ((varbitplayer_28902 == 1)) {
        IF_SETHIDE(false, comp(1660, 124));  // trh65_ninja_training:line_prize_2_stamped
    };
    if ((varbitplayer_28903 == 1)) {
        IF_SETHIDE(false, comp(1660, 128));  // trh65_ninja_training:line_prize_3_stamped
    };
    if ((varbitplayer_28904 == 1)) {
        IF_SETHIDE(false, comp(1660, 132));  // trh65_ninja_training:line_prize_4_stamped
    };
    if ((varbitplayer_28905 == 1)) {
        IF_SETHIDE(false, comp(1660, 141));  // trh65_ninja_training:column_prize_1_stamped
    };
    if ((varbitplayer_28906 == 1)) {
        IF_SETHIDE(false, comp(1660, 146));  // trh65_ninja_training:column_prize_2_stamped
    };
    if ((varbitplayer_28907 == 1)) {
        IF_SETHIDE(false, comp(1660, 150));  // trh65_ninja_training:column_prize_3_stamped
    };
    if ((varbitplayer_28908 == 1)) {
        IF_SETHIDE(false, comp(1660, 154));  // trh65_ninja_training:column_prize_4_stamped
    };
    if ((varbitplayer_28909 == 1)) {
        IF_SETHIDE(false, comp(1660, 136));  // trh65_ninja_training:complete_prize_stamped
    };
    IF_SETTEXT(inttostring(INV_TOTAL(93 as inv, 35293 as obj), 10), comp(1660, 66));  // trh65_ninja_training:total_stamps_number
    if ((varbitplayer_28942 != 0)) {
        IF_SETMODEL(83157 as model, comp(1660, 139));  // trh65_ninja_training:column_prize_one_hands
        IF_SETMODELANGLE(0, 0, 500, 2002, 0, 325, comp(1660, 139));  // trh65_ninja_training:column_prize_one_hands
        IF_SETPOSITION(0, -40, 1, 1, comp(1660, 139));  // trh65_ninja_training:column_prize_one_hands
        IF_SETHIDE(false, comp(1660, 144));  // trh65_ninja_training:column_two_prize_prestige
        IF_SETHIDE(true, comp(1660, 145));  // trh65_ninja_training:column_two_prize
        IF_SETMODEL(88594 as model, comp(1660, 149));  // trh65_ninja_training:column_three_prize
        IF_SETMODELANGLE(0, 0, 474, 2040, 121, 1050, comp(1660, 149));  // trh65_ninja_training:column_three_prize
        IF_SETPOSITION(0, -40, 1, 1, comp(1660, 149));  // trh65_ninja_training:column_three_prize
        IF_SETMODEL(93048 as model, comp(1660, 153));  // trh65_ninja_training:column_four_prize
        IF_SETMODELANGLE(0, 0, 0, 1700, 500, 800, comp(1660, 153));  // trh65_ninja_training:column_four_prize
        IF_SETPOSITION(5, -60, 1, 1, comp(1660, 153));  // trh65_ninja_training:column_four_prize
        IF_SETHIDE(true, comp(1660, 140));  // trh65_ninja_training:column_prize_one_feet
    };
    IF_SETTEXT(`Prestige ${inttostring(varbitplayer_28941, 10)}/4`, comp(1660, 62));  // trh65_ninja_training:prestige_level
    script11751();
    return;
}