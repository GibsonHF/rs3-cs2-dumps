//
function script6456(): void {
    var int0 = 1;
    while ((int0 <= 16)) {
        if ((script3727(int0) == 1)) {
            IF_SETHIDE(false, enum_getvalue(0, 9, 13417 as cs2enum, int0));
        };
        int0 = (int0 + 1);
    };
    if ((varbitplayer_38985 == 1)) {
        IF_SETGRAPHIC(32155 as graphic, comp(999, 108));  // trh132:use_goldstar_btn_graphic
    } else {
        IF_SETGRAPHIC(32153 as graphic, comp(999, 108));  // trh132:use_goldstar_btn_graphic
    };
    IF_SETTEXT(`Prestige ${inttostring(MIN(5, (varbitplayer_38984 + 1)), 10)}/5`, comp(999, 105));  // trh132:prestige_level
    script7776();
    switch (varbitplayer_38984) {
        case 0: {
            IF_SETHIDE(false, comp(999, 66));  // trh132:column_prize_prestige_model_1_0
            IF_SETHIDE(false, comp(999, 67));  // trh132:column_prize_prestige_model_1_0_a
            IF_SETHIDE(true, comp(999, 68));  // trh132:column_prize_prestige_model_1_1
            IF_SETHIDE(true, comp(999, 69));  // trh132:column_prize_prestige_model_1_2
            IF_SETHIDE(true, comp(999, 70));  // trh132:column_prize_prestige_model_1_3
            IF_SETHIDE(true, comp(999, 71));  // trh132:column_prize_prestige_model_1_4
            IF_SETHIDE(false, comp(999, 75));  // trh132:column_prize_prestige_model_2_0
            IF_SETHIDE(true, comp(999, 76));  // trh132:column_prize_prestige_model_2_1
            IF_SETHIDE(true, comp(999, 77));  // trh132:column_prize_prestige_model_2_1_a
            IF_SETHIDE(true, comp(999, 78));  // trh132:column_prize_prestige_model_2_2
            IF_SETHIDE(true, comp(999, 79));  // trh132:column_prize_prestige_model_2_3
            IF_SETHIDE(true, comp(999, 80));  // trh132:column_prize_prestige_model_2_4
            IF_SETHIDE(false, comp(999, 84));  // trh132:column_prize_prestige_model_3_0
            IF_SETHIDE(true, comp(999, 85));  // trh132:column_prize_prestige_model_3_1
            IF_SETHIDE(true, comp(999, 86));  // trh132:column_prize_prestige_model_3_2
            IF_SETHIDE(true, comp(999, 87));  // trh132:column_prize_prestige_model_3_2_a
            IF_SETHIDE(true, comp(999, 88));  // trh132:column_prize_prestige_model_3_3
            IF_SETHIDE(true, comp(999, 89));  // trh132:column_prize_prestige_model_3_4
            IF_SETHIDE(false, comp(999, 93));  // trh132:column_prize_prestige_model_4_0
            IF_SETHIDE(true, comp(999, 94));  // trh132:column_prize_prestige_model_4_1
            IF_SETHIDE(true, comp(999, 95));  // trh132:column_prize_prestige_model_4_2
            IF_SETHIDE(true, comp(999, 96));  // trh132:column_prize_prestige_model_4_3
            IF_SETHIDE(true, comp(999, 97));  // trh132:column_prize_prestige_model_4_3_a
            IF_SETHIDE(true, comp(999, 98));  // trh132:column_prize_prestige_model_4_4
            break;
        }
        case 1: {
            IF_SETHIDE(true, comp(999, 66));  // trh132:column_prize_prestige_model_1_0
            IF_SETHIDE(true, comp(999, 67));  // trh132:column_prize_prestige_model_1_0_a
            IF_SETHIDE(false, comp(999, 68));  // trh132:column_prize_prestige_model_1_1
            IF_SETHIDE(true, comp(999, 69));  // trh132:column_prize_prestige_model_1_2
            IF_SETHIDE(true, comp(999, 70));  // trh132:column_prize_prestige_model_1_3
            IF_SETHIDE(true, comp(999, 71));  // trh132:column_prize_prestige_model_1_4
            IF_SETHIDE(true, comp(999, 75));  // trh132:column_prize_prestige_model_2_0
            IF_SETHIDE(false, comp(999, 76));  // trh132:column_prize_prestige_model_2_1
            IF_SETHIDE(false, comp(999, 77));  // trh132:column_prize_prestige_model_2_1_a
            IF_SETHIDE(true, comp(999, 78));  // trh132:column_prize_prestige_model_2_2
            IF_SETHIDE(true, comp(999, 79));  // trh132:column_prize_prestige_model_2_3
            IF_SETHIDE(true, comp(999, 80));  // trh132:column_prize_prestige_model_2_4
            IF_SETHIDE(true, comp(999, 84));  // trh132:column_prize_prestige_model_3_0
            IF_SETHIDE(false, comp(999, 85));  // trh132:column_prize_prestige_model_3_1
            IF_SETHIDE(true, comp(999, 86));  // trh132:column_prize_prestige_model_3_2
            IF_SETHIDE(true, comp(999, 87));  // trh132:column_prize_prestige_model_3_2_a
            IF_SETHIDE(true, comp(999, 88));  // trh132:column_prize_prestige_model_3_3
            IF_SETHIDE(true, comp(999, 89));  // trh132:column_prize_prestige_model_3_4
            IF_SETHIDE(true, comp(999, 93));  // trh132:column_prize_prestige_model_4_0
            IF_SETHIDE(false, comp(999, 94));  // trh132:column_prize_prestige_model_4_1
            IF_SETHIDE(true, comp(999, 95));  // trh132:column_prize_prestige_model_4_2
            IF_SETHIDE(true, comp(999, 96));  // trh132:column_prize_prestige_model_4_3
            IF_SETHIDE(true, comp(999, 97));  // trh132:column_prize_prestige_model_4_3_a
            IF_SETHIDE(true, comp(999, 98));  // trh132:column_prize_prestige_model_4_4
            break;
        }
        case 2: {
            IF_SETHIDE(true, comp(999, 66));  // trh132:column_prize_prestige_model_1_0
            IF_SETHIDE(true, comp(999, 67));  // trh132:column_prize_prestige_model_1_0_a
            IF_SETHIDE(true, comp(999, 68));  // trh132:column_prize_prestige_model_1_1
            IF_SETHIDE(false, comp(999, 69));  // trh132:column_prize_prestige_model_1_2
            IF_SETHIDE(true, comp(999, 70));  // trh132:column_prize_prestige_model_1_3
            IF_SETHIDE(true, comp(999, 71));  // trh132:column_prize_prestige_model_1_4
            IF_SETHIDE(true, comp(999, 75));  // trh132:column_prize_prestige_model_2_0
            IF_SETHIDE(true, comp(999, 76));  // trh132:column_prize_prestige_model_2_1
            IF_SETHIDE(true, comp(999, 77));  // trh132:column_prize_prestige_model_2_1_a
            IF_SETHIDE(false, comp(999, 78));  // trh132:column_prize_prestige_model_2_2
            IF_SETHIDE(true, comp(999, 79));  // trh132:column_prize_prestige_model_2_3
            IF_SETHIDE(true, comp(999, 80));  // trh132:column_prize_prestige_model_2_4
            IF_SETHIDE(true, comp(999, 84));  // trh132:column_prize_prestige_model_3_0
            IF_SETHIDE(true, comp(999, 85));  // trh132:column_prize_prestige_model_3_1
            IF_SETHIDE(false, comp(999, 86));  // trh132:column_prize_prestige_model_3_2
            IF_SETHIDE(false, comp(999, 87));  // trh132:column_prize_prestige_model_3_2_a
            IF_SETHIDE(true, comp(999, 88));  // trh132:column_prize_prestige_model_3_3
            IF_SETHIDE(true, comp(999, 89));  // trh132:column_prize_prestige_model_3_4
            IF_SETHIDE(true, comp(999, 93));  // trh132:column_prize_prestige_model_4_0
            IF_SETHIDE(true, comp(999, 94));  // trh132:column_prize_prestige_model_4_1
            IF_SETHIDE(false, comp(999, 95));  // trh132:column_prize_prestige_model_4_2
            IF_SETHIDE(true, comp(999, 96));  // trh132:column_prize_prestige_model_4_3
            IF_SETHIDE(true, comp(999, 97));  // trh132:column_prize_prestige_model_4_3_a
            IF_SETHIDE(true, comp(999, 98));  // trh132:column_prize_prestige_model_4_4
            break;
        }
        case 3: {
            IF_SETHIDE(true, comp(999, 66));  // trh132:column_prize_prestige_model_1_0
            IF_SETHIDE(true, comp(999, 67));  // trh132:column_prize_prestige_model_1_0_a
            IF_SETHIDE(true, comp(999, 68));  // trh132:column_prize_prestige_model_1_1
            IF_SETHIDE(true, comp(999, 69));  // trh132:column_prize_prestige_model_1_2
            IF_SETHIDE(false, comp(999, 70));  // trh132:column_prize_prestige_model_1_3
            IF_SETHIDE(true, comp(999, 71));  // trh132:column_prize_prestige_model_1_4
            IF_SETHIDE(true, comp(999, 75));  // trh132:column_prize_prestige_model_2_0
            IF_SETHIDE(true, comp(999, 76));  // trh132:column_prize_prestige_model_2_1
            IF_SETHIDE(true, comp(999, 77));  // trh132:column_prize_prestige_model_2_1_a
            IF_SETHIDE(true, comp(999, 78));  // trh132:column_prize_prestige_model_2_2
            IF_SETHIDE(false, comp(999, 79));  // trh132:column_prize_prestige_model_2_3
            IF_SETHIDE(true, comp(999, 80));  // trh132:column_prize_prestige_model_2_4
            IF_SETHIDE(true, comp(999, 84));  // trh132:column_prize_prestige_model_3_0
            IF_SETHIDE(true, comp(999, 85));  // trh132:column_prize_prestige_model_3_1
            IF_SETHIDE(true, comp(999, 86));  // trh132:column_prize_prestige_model_3_2
            IF_SETHIDE(true, comp(999, 87));  // trh132:column_prize_prestige_model_3_2_a
            IF_SETHIDE(false, comp(999, 88));  // trh132:column_prize_prestige_model_3_3
            IF_SETHIDE(true, comp(999, 89));  // trh132:column_prize_prestige_model_3_4
            IF_SETHIDE(true, comp(999, 93));  // trh132:column_prize_prestige_model_4_0
            IF_SETHIDE(true, comp(999, 94));  // trh132:column_prize_prestige_model_4_1
            IF_SETHIDE(true, comp(999, 95));  // trh132:column_prize_prestige_model_4_2
            IF_SETHIDE(false, comp(999, 96));  // trh132:column_prize_prestige_model_4_3
            IF_SETHIDE(false, comp(999, 97));  // trh132:column_prize_prestige_model_4_3_a
            IF_SETHIDE(true, comp(999, 98));  // trh132:column_prize_prestige_model_4_4
            break;
        }
        case 4: {
            IF_SETHIDE(true, comp(999, 66));  // trh132:column_prize_prestige_model_1_0
            IF_SETHIDE(true, comp(999, 67));  // trh132:column_prize_prestige_model_1_0_a
            IF_SETHIDE(true, comp(999, 68));  // trh132:column_prize_prestige_model_1_1
            IF_SETHIDE(true, comp(999, 69));  // trh132:column_prize_prestige_model_1_2
            IF_SETHIDE(true, comp(999, 70));  // trh132:column_prize_prestige_model_1_3
            IF_SETHIDE(false, comp(999, 71));  // trh132:column_prize_prestige_model_1_4
            IF_SETHIDE(true, comp(999, 75));  // trh132:column_prize_prestige_model_2_0
            IF_SETHIDE(true, comp(999, 76));  // trh132:column_prize_prestige_model_2_1
            IF_SETHIDE(true, comp(999, 77));  // trh132:column_prize_prestige_model_2_1_a
            IF_SETHIDE(true, comp(999, 78));  // trh132:column_prize_prestige_model_2_2
            IF_SETHIDE(true, comp(999, 79));  // trh132:column_prize_prestige_model_2_3
            IF_SETHIDE(false, comp(999, 80));  // trh132:column_prize_prestige_model_2_4
            IF_SETHIDE(true, comp(999, 84));  // trh132:column_prize_prestige_model_3_0
            IF_SETHIDE(true, comp(999, 85));  // trh132:column_prize_prestige_model_3_1
            IF_SETHIDE(true, comp(999, 86));  // trh132:column_prize_prestige_model_3_2
            IF_SETHIDE(true, comp(999, 87));  // trh132:column_prize_prestige_model_3_2_a
            IF_SETHIDE(true, comp(999, 88));  // trh132:column_prize_prestige_model_3_3
            IF_SETHIDE(false, comp(999, 89));  // trh132:column_prize_prestige_model_3_4
            IF_SETHIDE(true, comp(999, 93));  // trh132:column_prize_prestige_model_4_0
            IF_SETHIDE(true, comp(999, 94));  // trh132:column_prize_prestige_model_4_1
            IF_SETHIDE(true, comp(999, 95));  // trh132:column_prize_prestige_model_4_2
            IF_SETHIDE(true, comp(999, 96));  // trh132:column_prize_prestige_model_4_3
            IF_SETHIDE(true, comp(999, 97));  // trh132:column_prize_prestige_model_4_3_a
            IF_SETHIDE(false, comp(999, 98));  // trh132:column_prize_prestige_model_4_4
            break;
        }
    };
    return;
}