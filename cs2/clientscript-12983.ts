//
function script12983(): void {
    var int0 = 1;
    while ((int0 <= 16)) {
        if ((script12972(int0) == 1)) {
            IF_SETHIDE(false, enum_getvalue(0, 9, 11970 as cs2enum, int0));
        };
        int0 = (int0 + 1);
    };
    if ((varbitplayer_34527 == 1)) {
        IF_SETGRAPHIC(29132 as graphic, comp(1817, 94));  // trh112:use_goldstar_btn_graphic
    } else {
        IF_SETGRAPHIC(29130 as graphic, comp(1817, 94));  // trh112:use_goldstar_btn_graphic
    };
    IF_SETTEXT(`Prestige ${inttostring(MIN(5, (varbitplayer_34526 + 1)), 10)}/5`, comp(1817, 91));  // trh112:prestige_level
    script12988();
    switch (varbitplayer_34526) {
        case 1:
        case 3: {
            IF_SETHIDE(true, comp(1817, 67));  // trh112:column_prize_prestige_model_1_1
            IF_SETHIDE(true, comp(1817, 68));  // trh112:column_prize_prestige_model_1_2
            IF_SETHIDE(true, comp(1817, 73));  // trh112:column_prize_prestige_model_2
            IF_SETHIDE(true, comp(1817, 78));  // trh112:column_prize_prestige_model_3
            IF_SETHIDE(true, comp(1817, 84));  // trh112:column_prize_prestige_model_4
            IF_SETHIDE(false, comp(1817, 66));  // trh112:column_prize_model_1
            IF_SETHIDE(false, comp(1817, 72));  // trh112:column_prize_model_2
            IF_SETHIDE(false, comp(1817, 77));  // trh112:column_prize_model_3
            IF_SETHIDE(false, comp(1817, 82));  // trh112:column_prize_model_4
            IF_SETHIDE(false, comp(1817, 83));  // trh112:column_prize_model_4_amount
            break;
        }
        case 0: {
            break;
        }
        case 2: {
            IF_SETMODEL(116233 as model, comp(1817, 67));  // trh112:column_prize_prestige_model_1_1
            IF_SETMODEL(116234 as model, comp(1817, 73));  // trh112:column_prize_prestige_model_2
            IF_SETMODEL(116235 as model, comp(1817, 78));  // trh112:column_prize_prestige_model_3
            IF_SETMODEL(116236 as model, comp(1817, 84));  // trh112:column_prize_prestige_model_4
            break;
        }
        case 4: {
            IF_SETMODEL(116227 as model, comp(1817, 67));  // trh112:column_prize_prestige_model_1_1
            IF_SETMODEL(116228 as model, comp(1817, 73));  // trh112:column_prize_prestige_model_2
            IF_SETMODEL(116229 as model, comp(1817, 78));  // trh112:column_prize_prestige_model_3
            IF_SETMODEL(116230 as model, comp(1817, 84));  // trh112:column_prize_prestige_model_4
            break;
        }
    };
    return;
}