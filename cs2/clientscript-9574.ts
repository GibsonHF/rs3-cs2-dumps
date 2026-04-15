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
    stack(enum_getvalue(0, 23, 1024 as cs2enum, varbitplayer_21322));
    stack(67371008);
    IF_SETGRAPHIC();
    stack(inttostring(varbitplayer_21323, 10));
    stack(" ");
    stack(0);
    stack(36);
    stack(2164);
    stack(varbitplayer_21322);
    enum_getvalue();
    IF_SETTEXT(`${stack()}`, 67371009);
    stack("Available at ");
    stack(inttostring(int2, 10));
    stack(" ");
    stack(0);
    stack(36);
    stack(2164);
    stack(varbitplayer_21324);
    enum_getvalue();
    IF_SETTEXT(`${stack()} each`, 67371010);
    IF_SETTEXT(`Buy 1 for ${inttostring(int2, 10)}`, 67371018);
    IF_SETTEXT(`Buy 5 for ${inttostring((int2 * 5), 10)}`, 67371019);
    IF_SETTEXT(`Buy 10 for ${inttostring((int2 * 10), 10)}`, 67371020);
    IF_SETTEXT(`Buy ${inttostring(varbitplayer_21323, 10)} for ${inttostring((int2 * varbitplayer_21323), 10)}`, 67371021);
    if ((varbitplayer_21323 < 1)) {
        IF_SETHIDE(true, comp(1028, 6));
        IF_SETHIDE(true, comp(1028, 10));
        IF_SETHIDE(true, comp(1028, 7));
        IF_SETHIDE(true, comp(1028, 11));
        IF_SETHIDE(true, comp(1028, 8));
        IF_SETHIDE(true, comp(1028, 12));
        IF_SETHIDE(true, comp(1028, 9));
        IF_SETHIDE(true, comp(1028, 13));
        IF_SETTEXT(`New stock available in ${string0}.`, comp(1028, 14));
        IF_SETHIDE(false, comp(1028, 14));
    } else if ((varbitplayer_21323 == 1)) {
        IF_SETHIDE(true, comp(1028, 7));
        IF_SETHIDE(true, comp(1028, 11));
        IF_SETHIDE(true, comp(1028, 8));
        IF_SETHIDE(true, comp(1028, 12));
        IF_SETHIDE(true, comp(1028, 9));
        IF_SETHIDE(true, comp(1028, 13));
    } else if ((varbitplayer_21323 < 5)) {
        IF_SETHIDE(true, comp(1028, 7));
        IF_SETHIDE(true, comp(1028, 11));
        IF_SETHIDE(true, comp(1028, 8));
        IF_SETHIDE(true, comp(1028, 12));
    } else if ((varbitplayer_21323 == 5)) {
        IF_SETHIDE(true, comp(1028, 8));
        IF_SETHIDE(true, comp(1028, 12));
        IF_SETHIDE(true, comp(1028, 9));
        IF_SETHIDE(true, comp(1028, 13));
    } else if ((varbitplayer_21323 < 10)) {
        IF_SETHIDE(true, comp(1028, 8));
        IF_SETHIDE(true, comp(1028, 12));
    } else if ((varbitplayer_21323 == 10)) {
        IF_SETHIDE(true, comp(1028, 9));
        IF_SETHIDE(true, comp(1028, 13));
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
        IF_SETTEXT(`(You currently own ${inttostring(int3, 10)})`, comp(1028, 5));
    } else {
        IF_SETTEXT("<col=FF0000>You do not have enough resources!", comp(1028, 5));
    };
    return;
}