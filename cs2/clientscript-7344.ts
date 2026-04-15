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
    stack(enum_getvalue(0, 23, 1024 as cs2enum, varbitplayer_17462));
    stack(61669376);
    IF_SETGRAPHIC();
    stack(inttostring(varbitplayer_17463, 10));
    stack(" ");
    stack(0);
    stack(36);
    stack(2164);
    stack(varbitplayer_17462);
    enum_getvalue();
    IF_SETTEXT(`${stack()}`, 61669377);
    stack("Available at ");
    stack(0);
    stack(0);
    stack(7162);
    stack(varbitplayer_17462);
    enum_getvalue();
    IF_SETTEXT(`${stack()}${inttostring(stack(), 10)} coins each`, 61669378);
    stack("Buy 1 for ");
    stack(0);
    stack(0);
    stack(7162);
    stack(varbitplayer_17462);
    enum_getvalue();
    IF_SETTEXT(`${stack()}${inttostring(stack(), 10)}`, 61669387);
    stack("Buy 5 for ");
    stack(5);
    stack(0);
    stack(0);
    stack(7162);
    stack(varbitplayer_17462);
    enum_getvalue();
    IF_SETTEXT(`${stack()}${inttostring(operator("*", stack()), 10)}`, 61669388);
    stack("Buy 10 for ");
    stack(10);
    stack(0);
    stack(0);
    stack(7162);
    stack(varbitplayer_17462);
    enum_getvalue();
    IF_SETTEXT(`${stack()}${inttostring(operator("*", stack()), 10)}`, 61669389);
    stack("Buy 50 for ");
    stack(50);
    stack(0);
    stack(0);
    stack(7162);
    stack(varbitplayer_17462);
    enum_getvalue();
    IF_SETTEXT(`${stack()}${inttostring(operator("*", stack()), 10)}`, 61669390);
    stack("Buy ");
    stack(inttostring(varbitplayer_17463, 10));
    stack(" for ");
    stack(varbitplayer_17463);
    stack(0);
    stack(0);
    stack(7162);
    stack(varbitplayer_17462);
    enum_getvalue();
    IF_SETTEXT(`${stack()}${inttostring(operator("*", stack()), 10)}`, 61669391);
    if ((varbitplayer_17463 < 50)) {
        IF_SETHIDE(true, comp(941, 9));
        IF_SETHIDE(true, comp(941, 14));
    };
    if ((varbitplayer_17463 < 10)) {
        IF_SETHIDE(true, comp(941, 8));
        IF_SETHIDE(true, comp(941, 13));
    };
    if ((varbitplayer_17463 < 5)) {
        IF_SETHIDE(true, comp(941, 7));
        IF_SETHIDE(true, comp(941, 12));
    };
    if ((varbitplayer_17463 < 1)) {
        IF_SETHIDE(true, comp(941, 6));
        IF_SETHIDE(true, comp(941, 11));
        IF_SETHIDE(true, comp(941, 7));
        IF_SETHIDE(true, comp(941, 12));
        IF_SETHIDE(true, comp(941, 8));
        IF_SETHIDE(true, comp(941, 13));
        IF_SETHIDE(true, comp(941, 9));
        IF_SETHIDE(true, comp(941, 14));
        IF_SETHIDE(true, comp(941, 10));
        IF_SETHIDE(true, comp(941, 15));
        IF_SETTEXT(`New stock available ${string1}`, comp(941, 16));
        IF_SETHIDE(false, comp(941, 16));
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
    IF_SETTEXT(`(You currently own ${inttostring(int3, 10)})`, comp(941, 5));
    IF_SETTEXT(`Finish repairs for ${inttostring((varplayer_3417 * 20), 10)}k`, comp(941, 20));
    return;
}