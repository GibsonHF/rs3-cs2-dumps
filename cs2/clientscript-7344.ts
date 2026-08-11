//
function script7344(): void {
    var int0 = 0;
    var int1 = 0;
    [int0, int1] = script4187();
    var string0 = "";
    var int2 = script20664();
    var string1 = "tomorrow.";
    if ((int2 > 1)) {
        string1 = `in ${inttostring(int2, 10)} days.`;
    };
    IF_SETGRAPHIC(enum_getvalue(0, 23, 1024 as cs2enum, varbitplayer_17462), comp(941, 0));  // pop_smuggler:smuggler_goods_icon
    IF_SETTEXT(`${inttostring(varbitplayer_17463, 10)} ${enum_getvalue(0, 36, 2164 as cs2enum, varbitplayer_17462)}`, comp(941, 1));  // pop_smuggler:smuggler_goods_text
    IF_SETTEXT(`Available at ${inttostring(enum_getvalue(0, 0, 7162, varbitplayer_17462), 10)} coins each`, comp(941, 2));  // pop_smuggler:smuggler_price
    IF_SETTEXT(`Buy 1 for ${inttostring(enum_getvalue(0, 0, 7162, varbitplayer_17462), 10)}`, comp(941, 11));  // pop_smuggler:buy_title_1
    IF_SETTEXT(`Buy 5 for ${inttostring((5 * enum_getvalue(0, 0, 7162, varbitplayer_17462)), 10)}`, comp(941, 12));  // pop_smuggler:buy_title_2
    IF_SETTEXT(`Buy 10 for ${inttostring((10 * enum_getvalue(0, 0, 7162, varbitplayer_17462)), 10)}`, comp(941, 13));  // pop_smuggler:buy_title_3
    IF_SETTEXT(`Buy 50 for ${inttostring((50 * enum_getvalue(0, 0, 7162, varbitplayer_17462)), 10)}`, comp(941, 14));  // pop_smuggler:buy_title_4
    IF_SETTEXT(`Buy ${inttostring(varbitplayer_17463, 10)} for ${inttostring((varbitplayer_17463 * enum_getvalue(0, 0, 7162, varbitplayer_17462)), 10)}`, comp(941, 15));  // pop_smuggler:buy_title_5
    if ((varbitplayer_17463 < 50)) {
        IF_SETHIDE(true, comp(941, 9));  // pop_smuggler:buy_4
        IF_SETHIDE(true, comp(941, 14));  // pop_smuggler:buy_title_4
    };
    if ((varbitplayer_17463 < 10)) {
        IF_SETHIDE(true, comp(941, 8));  // pop_smuggler:buy_3
        IF_SETHIDE(true, comp(941, 13));  // pop_smuggler:buy_title_3
    };
    if ((varbitplayer_17463 < 5)) {
        IF_SETHIDE(true, comp(941, 7));  // pop_smuggler:buy_2
        IF_SETHIDE(true, comp(941, 12));  // pop_smuggler:buy_title_2
    };
    if ((varbitplayer_17463 < 1)) {
        IF_SETHIDE(true, comp(941, 6));  // pop_smuggler:buy_1
        IF_SETHIDE(true, comp(941, 11));  // pop_smuggler:buy_title_1
        IF_SETHIDE(true, comp(941, 7));  // pop_smuggler:buy_2
        IF_SETHIDE(true, comp(941, 12));  // pop_smuggler:buy_title_2
        IF_SETHIDE(true, comp(941, 8));  // pop_smuggler:buy_3
        IF_SETHIDE(true, comp(941, 13));  // pop_smuggler:buy_title_3
        IF_SETHIDE(true, comp(941, 9));  // pop_smuggler:buy_4
        IF_SETHIDE(true, comp(941, 14));  // pop_smuggler:buy_title_4
        IF_SETHIDE(true, comp(941, 10));  // pop_smuggler:buy_5
        IF_SETHIDE(true, comp(941, 15));  // pop_smuggler:buy_title_5
        IF_SETTEXT(`New stock available ${string1}`, comp(941, 16));  // pop_smuggler:buy_none_left
        IF_SETHIDE(false, comp(941, 16));  // pop_smuggler:buy_none_left
    };
    var int3 = 0;
    switch (varbitplayer_17462) {
        case 1: {
            int3 = varplayer_3441;
            break;
        }
        case 2: {
            int3 = varplayer_3442;
            break;
        }
        case 3: {
            int3 = varplayer_3443;
            break;
        }
        case 4: {
            int3 = varplayer_3444;
            break;
        }
        case 5: {
            int3 = varplayer_3445;
            break;
        }
        case 6: {
            int3 = varplayer_3446;
            break;
        }
        case 7: {
            int3 = varplayer_3447;
            break;
        }
        case 8: {
            int3 = varplayer_4038;
            break;
        }
        case 9: {
            int3 = varplayer_4039;
            break;
        }
    };
    IF_SETTEXT(`(You currently own ${inttostring(int3, 10)})`, comp(941, 5));  // pop_smuggler:smuggler_current
    IF_SETTEXT(`Finish repairs for ${inttostring((varplayer_3417 * 20), 10)}k`, comp(941, 20));  // pop_smuggler:buy_title_6
    return;
}