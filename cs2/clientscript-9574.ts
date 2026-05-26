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
    IF_SETGRAPHIC(enum_getvalue(0, 23, 1024 as cs2enum, varbitplayer_21322), 67371008);
    IF_SETTEXT(`${inttostring(varbitplayer_21323, 10)} ${enum_getvalue(0, 36, 2164 as cs2enum, varbitplayer_21322)}`, 67371009);
    IF_SETTEXT(`Available at ${inttostring(int2, 10)} ${enum_getvalue(0, 36, 2164 as cs2enum, varbitplayer_21324)} each`, 67371010);
    IF_SETTEXT(`Buy 1 for ${inttostring(int2, 10)}`, 67371018);
    IF_SETTEXT(`Buy 5 for ${inttostring((int2 * 5), 10)}`, 67371019);
    IF_SETTEXT(`Buy 10 for ${inttostring((int2 * 10), 10)}`, 67371020);
    IF_SETTEXT(`Buy ${inttostring(varbitplayer_21323, 10)} for ${inttostring((int2 * varbitplayer_21323), 10)}`, 67371021);
    if ((varbitplayer_21323 < 1)) {
        IF_SETHIDE(1, 67371014);
        IF_SETHIDE(1, 67371018);
        IF_SETHIDE(1, 67371015);
        IF_SETHIDE(1, 67371019);
        IF_SETHIDE(1, 67371016);
        IF_SETHIDE(1, 67371020);
        IF_SETHIDE(1, 67371017);
        IF_SETHIDE(1, 67371021);
        IF_SETTEXT(`New stock available in ${string0}.`, 67371022);
        IF_SETHIDE(0, 67371022);
    } else if ((varbitplayer_21323 == 1)) {
        IF_SETHIDE(1, 67371015);
        IF_SETHIDE(1, 67371019);
        IF_SETHIDE(1, 67371016);
        IF_SETHIDE(1, 67371020);
        IF_SETHIDE(1, 67371017);
        IF_SETHIDE(1, 67371021);
    } else if ((varbitplayer_21323 < 5)) {
        IF_SETHIDE(1, 67371015);
        IF_SETHIDE(1, 67371019);
        IF_SETHIDE(1, 67371016);
        IF_SETHIDE(1, 67371020);
    } else if ((varbitplayer_21323 == 5)) {
        IF_SETHIDE(1, 67371016);
        IF_SETHIDE(1, 67371020);
        IF_SETHIDE(1, 67371017);
        IF_SETHIDE(1, 67371021);
    } else if ((varbitplayer_21323 < 10)) {
        IF_SETHIDE(1, 67371016);
        IF_SETHIDE(1, 67371020);
    } else if ((varbitplayer_21323 == 10)) {
        IF_SETHIDE(1, 67371017);
        IF_SETHIDE(1, 67371021);
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
        IF_SETTEXT(`(You currently own ${inttostring(int3, 10)})`, 67371013);
    } else {
        IF_SETTEXT("<col=FF0000>You do not have enough resources!", 67371013);
    };
    return;
}