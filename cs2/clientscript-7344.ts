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
    IF_SETGRAPHIC(enum_getvalue(0, 23, 1024 as cs2enum, varbitplayer_17462), 61669376);
    IF_SETTEXT(`${inttostring(varbitplayer_17463, 10)} ${enum_getvalue(0, 36, 2164 as cs2enum, varbitplayer_17462)}`, 61669377);
    IF_SETTEXT(`Available at ${inttostring(enum_getvalue(0, 0, 7162 as cs2enum, varbitplayer_17462), 10)} coins each`, 61669378);
    IF_SETTEXT(`Buy 1 for ${inttostring(enum_getvalue(0, 0, 7162 as cs2enum, varbitplayer_17462), 10)}`, 61669387);
    IF_SETTEXT(`Buy 5 for ${inttostring((5 * enum_getvalue(0, 0, 7162 as cs2enum, varbitplayer_17462)), 10)}`, 61669388);
    IF_SETTEXT(`Buy 10 for ${inttostring((10 * enum_getvalue(0, 0, 7162 as cs2enum, varbitplayer_17462)), 10)}`, 61669389);
    IF_SETTEXT(`Buy 50 for ${inttostring((50 * enum_getvalue(0, 0, 7162 as cs2enum, varbitplayer_17462)), 10)}`, 61669390);
    IF_SETTEXT(`Buy ${inttostring(varbitplayer_17463, 10)} for ${inttostring((varbitplayer_17463 * enum_getvalue(0, 0, 7162 as cs2enum, varbitplayer_17462)), 10)}`, 61669391);
    if ((varbitplayer_17463 < 50)) {
        IF_SETHIDE(1, 61669385);
        IF_SETHIDE(1, 61669390);
    };
    if ((varbitplayer_17463 < 10)) {
        IF_SETHIDE(1, 61669384);
        IF_SETHIDE(1, 61669389);
    };
    if ((varbitplayer_17463 < 5)) {
        IF_SETHIDE(1, 61669383);
        IF_SETHIDE(1, 61669388);
    };
    if ((varbitplayer_17463 < 1)) {
        IF_SETHIDE(1, 61669382);
        IF_SETHIDE(1, 61669387);
        IF_SETHIDE(1, 61669383);
        IF_SETHIDE(1, 61669388);
        IF_SETHIDE(1, 61669384);
        IF_SETHIDE(1, 61669389);
        IF_SETHIDE(1, 61669385);
        IF_SETHIDE(1, 61669390);
        IF_SETHIDE(1, 61669386);
        IF_SETHIDE(1, 61669391);
        IF_SETTEXT(`New stock available ${string1}`, 61669392);
        IF_SETHIDE(0, 61669392);
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
    IF_SETTEXT(`(You currently own ${inttostring(int3, 10)})`, 61669381);
    IF_SETTEXT(`Finish repairs for ${inttostring((varplayer_3417 * 20), 10)}k`, 61669396);
    return;
}