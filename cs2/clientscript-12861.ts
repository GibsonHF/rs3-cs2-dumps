//
function script12861(): void {
    var int0 = 1;
    while ((int0 <= 16)) {
        if ((script166(int0) == 1)) {
            IF_SETHIDE(false, enum_getvalue(0, 9, 11830 as cs2enum, int0));
        };
        int0 = (int0 + 1);
    };
    if ((varbitplayer_34151 == 1)) {
        IF_SETGRAPHIC(26651 as graphic, comp(1801, 94));  // trh107:use_brains_btn_graphic
    } else {
        IF_SETGRAPHIC(26650 as graphic, comp(1801, 94));  // trh107:use_brains_btn_graphic
    };
    IF_SETTEXT(`Prestige ${inttostring(MIN(5, (varbitplayer_34150 + 1)), 10)}/5`, comp(1801, 91));  // trh107:prestige_level
    script12866();
    switch (varbitplayer_34150) {
        case 1:
        case 3: {
            IF_SETHIDE(true, comp(1801, 67));  // trh107:column_prize_prestige_model_1_1
            IF_SETHIDE(true, comp(1801, 68));  // trh107:column_prize_prestige_model_1_2
            IF_SETHIDE(true, comp(1801, 73));  // trh107:column_prize_prestige_model_2
            IF_SETHIDE(true, comp(1801, 78));  // trh107:column_prize_prestige_model_3
            IF_SETHIDE(true, comp(1801, 84));  // trh107:column_prize_prestige_model_4
            IF_SETHIDE(false, comp(1801, 66));  // trh107:column_prize_model_1
            IF_SETHIDE(false, comp(1801, 72));  // trh107:column_prize_model_2
            IF_SETHIDE(false, comp(1801, 77));  // trh107:column_prize_model_3
            IF_SETHIDE(false, comp(1801, 82));  // trh107:column_prize_model_4
            IF_SETHIDE(false, comp(1801, 83));  // trh107:column_prize_model_4_amount
            break;
        }
        case 0: {
            break;
        }
        case 2: {
            IF_SETMODEL(115350 as model, comp(1801, 67));  // trh107:column_prize_prestige_model_1_1
            IF_SETMODEL(115353 as model, comp(1801, 68));  // trh107:column_prize_prestige_model_1_2
            IF_SETMODEL(115359 as model, comp(1801, 73));  // trh107:column_prize_prestige_model_2
            IF_SETMODEL(115362 as model, comp(1801, 78));  // trh107:column_prize_prestige_model_3
            IF_SETMODEL(115356 as model, comp(1801, 84));  // trh107:column_prize_prestige_model_4
            break;
        }
        case 4: {
            IF_SETMODEL(115351 as model, comp(1801, 67));  // trh107:column_prize_prestige_model_1_1
            IF_SETMODEL(115354 as model, comp(1801, 68));  // trh107:column_prize_prestige_model_1_2
            IF_SETMODEL(115360 as model, comp(1801, 73));  // trh107:column_prize_prestige_model_2
            IF_SETMODEL(115363 as model, comp(1801, 78));  // trh107:column_prize_prestige_model_3
            IF_SETMODEL(115357 as model, comp(1801, 84));  // trh107:column_prize_prestige_model_4
            break;
        }
    };
    return;
}