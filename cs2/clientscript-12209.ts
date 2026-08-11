//
function script12209(): void {
    if ((varbitplayer_30403 == 1)) {
        IF_SETHIDE(false, comp(1716, 34));  // trh81_zodiac:easy_task_1_stamped
    };
    if ((varbitplayer_30404 == 1)) {
        IF_SETHIDE(false, comp(1716, 38));  // trh81_zodiac:easy_task_2_stamped
    };
    if ((varbitplayer_30405 == 1)) {
        IF_SETHIDE(false, comp(1716, 42));  // trh81_zodiac:easy_task_3_stamped
    };
    if ((varbitplayer_30406 == 1)) {
        IF_SETHIDE(false, comp(1716, 46));  // trh81_zodiac:easy_task_4_stamped
    };
    if ((varbitplayer_30407 == 1)) {
        IF_SETHIDE(false, comp(1716, 154));  // trh81_zodiac:medium_task_1_stamped
    };
    if ((varbitplayer_30408 == 1)) {
        IF_SETHIDE(false, comp(1716, 158));  // trh81_zodiac:medium_task_2_stamped
    };
    if ((varbitplayer_30409 == 1)) {
        IF_SETHIDE(false, comp(1716, 163));  // trh81_zodiac:medium_task_3_stamped
    };
    if ((varbitplayer_30410 == 1)) {
        IF_SETHIDE(false, comp(1716, 150));  // trh81_zodiac:medium_task_4_stamped
    };
    if ((varbitplayer_30411 == 1)) {
        IF_SETHIDE(false, comp(1716, 164));  // trh81_zodiac:hard_task_1_stamped
    };
    if ((varbitplayer_30412 == 1)) {
        IF_SETHIDE(false, comp(1716, 166));  // trh81_zodiac:hard_task_2_stamped
    };
    if ((varbitplayer_30413 == 1)) {
        IF_SETHIDE(false, comp(1716, 168));  // trh81_zodiac:hard_task_3_stamped
    };
    if ((varbitplayer_30414 == 1)) {
        IF_SETHIDE(false, comp(1716, 172));  // trh81_zodiac:hard_task_4_stamped
    };
    if ((varbitplayer_30415 == 1)) {
        IF_SETHIDE(false, comp(1716, 173));  // trh81_zodiac:elite_task_1_stamped
    };
    if ((varbitplayer_30416 == 1)) {
        IF_SETHIDE(false, comp(1716, 177));  // trh81_zodiac:elite_task_2_stamped
    };
    if ((varbitplayer_30417 == 1)) {
        IF_SETHIDE(false, comp(1716, 181));  // trh81_zodiac:elite_task_3_stamped
    };
    if ((varbitplayer_30418 == 1)) {
        IF_SETHIDE(false, comp(1716, 185));  // trh81_zodiac:elite_task_4_stamped
    };
    if ((varbitplayer_30419 == 1)) {
        IF_SETHIDE(false, comp(1716, 108));  // trh81_zodiac:line_prize_1_stamped
    };
    if ((varbitplayer_30420 == 1)) {
        IF_SETHIDE(false, comp(1716, 112));  // trh81_zodiac:line_prize_2_stamped
    };
    if ((varbitplayer_30421 == 1)) {
        IF_SETHIDE(false, comp(1716, 116));  // trh81_zodiac:line_prize_3_stamped
    };
    if ((varbitplayer_30422 == 1)) {
        IF_SETHIDE(false, comp(1716, 120));  // trh81_zodiac:line_prize_4_stamped
    };
    if ((varbitplayer_30423 == 1)) {
        IF_SETHIDE(false, comp(1716, 130));  // trh81_zodiac:column_prize_1_stamped
    };
    if ((varbitplayer_30424 == 1)) {
        IF_SETHIDE(false, comp(1716, 136));  // trh81_zodiac:column_prize_2_stamped
    };
    if ((varbitplayer_30425 == 1)) {
        IF_SETHIDE(false, comp(1716, 142));  // trh81_zodiac:column_prize_3_stamped
    };
    if ((varbitplayer_30426 == 1)) {
        IF_SETHIDE(false, comp(1716, 148));  // trh81_zodiac:column_prize_4_stamped
    };
    if ((((varbitplayer_30427 == 1) && (varbitplayer_30445 == varbitplayer_30446)) && (varbitplayer_30445 > 0))) {
        IF_SETHIDE(false, comp(1716, 124));  // trh81_zodiac:complete_prize_stamped
    };
    IF_SETTEXT(inttostring(INV_TOTAL(93 as inv, 36761 as obj), 10), comp(1716, 56));  // trh81_zodiac:total_envelopes_number
    if ((varbitplayer_30446 != 0)) {
        IF_SETHIDE(false, comp(1716, 128));  // trh81_zodiac:column_one_prestige_prize
        IF_SETHIDE(false, comp(1716, 129));  // trh81_zodiac:column_one_prestige_charges
        IF_SETHIDE(true, comp(1716, 127));  // trh81_zodiac:column_one_prize
        IF_SETHIDE(false, comp(1716, 134));  // trh81_zodiac:column_two_prestige_prize
        IF_SETHIDE(false, comp(1716, 135));  // trh81_zodiac:column_two_prestige_charges
        IF_SETHIDE(true, comp(1716, 133));  // trh81_zodiac:column_two_prize
        IF_SETHIDE(false, comp(1716, 140));  // trh81_zodiac:column_three_prestige_prize
        IF_SETHIDE(false, comp(1716, 141));  // trh81_zodiac:column_three_prestige_charges
        IF_SETHIDE(true, comp(1716, 139));  // trh81_zodiac:column_three_prize
        IF_SETHIDE(false, comp(1716, 146));  // trh81_zodiac:column_four_prestige_prize
        IF_SETHIDE(false, comp(1716, 147));  // trh81_zodiac:column_four_prestige_charges
        IF_SETHIDE(true, comp(1716, 145));  // trh81_zodiac:column_four_prize
    };
    IF_SETTEXT(`Prestige ${inttostring(varbitplayer_30445, 10)}/5`, comp(1716, 52));  // trh81_zodiac:prestige_level
    script12211();
    return;
}