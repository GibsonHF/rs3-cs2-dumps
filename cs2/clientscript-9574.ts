//
function script9574(): void {
    var int0 = 0;
    var int1 = 0;
    [int0, int1] = script4187();
    var string0 = "";
    if ((int0 == 0)) {
        string0 = `${inttostring(int1, 10)}m`;
    } else {
        string0 = `${inttostring(int0, 10)}h`;
    };
    var int2 = script9575();
    IF_SETGRAPHIC(enum_getvalue(0, 23, 1024 as cs2enum, varbitplayer_21322), comp(1028, 0));  // pop_trader:trader_goods_icon
    IF_SETTEXT(`${inttostring(varbitplayer_21323, 10)} ${enum_getvalue(0, 36, 2164 as cs2enum, varbitplayer_21322)}`, comp(1028, 1));  // pop_trader:trader_goods_text
    IF_SETTEXT(`Available at ${inttostring(int2, 10)} ${enum_getvalue(0, 36, 2164, varbitplayer_21324)} each`, comp(1028, 2));  // pop_trader:trader_price
    IF_SETTEXT(`Buy 1 for ${inttostring(int2, 10)}`, comp(1028, 10));  // pop_trader:buy_title_1
    IF_SETTEXT(`Buy 5 for ${inttostring((int2 * 5), 10)}`, comp(1028, 11));  // pop_trader:buy_title_2
    IF_SETTEXT(`Buy 10 for ${inttostring((int2 * 10), 10)}`, comp(1028, 12));  // pop_trader:buy_title_3
    IF_SETTEXT(`Buy ${inttostring(varbitplayer_21323, 10)} for ${inttostring((int2 * varbitplayer_21323), 10)}`, comp(1028, 13));  // pop_trader:buy_title_5
    if ((varbitplayer_21323 < 1)) {
        IF_SETHIDE(true, comp(1028, 6));  // pop_trader:buy_1
        IF_SETHIDE(true, comp(1028, 10));  // pop_trader:buy_title_1
        IF_SETHIDE(true, comp(1028, 7));  // pop_trader:buy_2
        IF_SETHIDE(true, comp(1028, 11));  // pop_trader:buy_title_2
        IF_SETHIDE(true, comp(1028, 8));  // pop_trader:buy_3
        IF_SETHIDE(true, comp(1028, 12));  // pop_trader:buy_title_3
        IF_SETHIDE(true, comp(1028, 9));  // pop_trader:buy_5
        IF_SETHIDE(true, comp(1028, 13));  // pop_trader:buy_title_5
        IF_SETTEXT(`New stock available in ${string0}.`, comp(1028, 14));  // pop_trader:buy_none_left
        IF_SETHIDE(false, comp(1028, 14));  // pop_trader:buy_none_left
    } else if ((varbitplayer_21323 == 1)) {
        IF_SETHIDE(true, comp(1028, 7));  // pop_trader:buy_2
        IF_SETHIDE(true, comp(1028, 11));  // pop_trader:buy_title_2
        IF_SETHIDE(true, comp(1028, 8));  // pop_trader:buy_3
        IF_SETHIDE(true, comp(1028, 12));  // pop_trader:buy_title_3
        IF_SETHIDE(true, comp(1028, 9));  // pop_trader:buy_5
        IF_SETHIDE(true, comp(1028, 13));  // pop_trader:buy_title_5
    } else if ((varbitplayer_21323 < 5)) {
        IF_SETHIDE(true, comp(1028, 7));  // pop_trader:buy_2
        IF_SETHIDE(true, comp(1028, 11));  // pop_trader:buy_title_2
        IF_SETHIDE(true, comp(1028, 8));  // pop_trader:buy_3
        IF_SETHIDE(true, comp(1028, 12));  // pop_trader:buy_title_3
    } else if ((varbitplayer_21323 == 5)) {
        IF_SETHIDE(true, comp(1028, 8));  // pop_trader:buy_3
        IF_SETHIDE(true, comp(1028, 12));  // pop_trader:buy_title_3
        IF_SETHIDE(true, comp(1028, 9));  // pop_trader:buy_5
        IF_SETHIDE(true, comp(1028, 13));  // pop_trader:buy_title_5
    } else if ((varbitplayer_21323 < 10)) {
        IF_SETHIDE(true, comp(1028, 8));  // pop_trader:buy_3
        IF_SETHIDE(true, comp(1028, 12));  // pop_trader:buy_title_3
    } else if ((varbitplayer_21323 == 10)) {
        IF_SETHIDE(true, comp(1028, 9));  // pop_trader:buy_5
        IF_SETHIDE(true, comp(1028, 13));  // pop_trader:buy_title_5
    };
    var int3 = 0;
    switch (varbitplayer_21324) {
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
    if ((int3 >= int2)) {
        IF_SETTEXT(`(You currently own ${inttostring(int3, 10)})`, comp(1028, 5));  // pop_trader:trader_current
    } else {
        IF_SETTEXT("<col=FF0000>You do not have enough resources!", comp(1028, 5));  // pop_trader:trader_current
    };
    return;
}