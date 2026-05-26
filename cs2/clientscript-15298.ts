//
function script15298(): void {
    var int0 = script15291();
    var string0 = "Random!";
    var string1 = "";
    var string2 = "";
    var int1 = 0;
    var int2 = -1 as obj;
    var int3 = 0;
    var int4 = script13408(varbitplayer_48224);
    script16706(17760267, int0, varplayer_9595, script14580(), script15290(), 0);
    if ((int0 != -1 as obj)) {
        string0 = OC_NAME(int0);
    };
    IF_SETTEXT(string0, comp(271, 5));
    if ((int4 == 0)) {
        IF_SETHIDE(true, comp(271, 6));
    } else {
        IF_SETHIDE(false, comp(271, 6));
    };
    IF_SETGRAPHIC(10348 as graphic, comp(271, 2));
    IF_SETOBJECT(-1 as obj, -1, comp(271, 3));
    IF_SETPOSITION(0, 0, 1, 1, comp(271, 4));
    stack(dbrow_getfield(3792 as dbrow, 471040, int4));
    [string1, string2, int1, int2, int3] = stack();
    if ((int3 == 1)) {
        int3 = -1;
    };
    IF_SETTEXTFONT(60 as fontmetrics, comp(271, 4));
    IF_SETHIDE(true, comp(271, 10));
    IF_SETHIDE(false, comp(271, 11));
    switch (int4) {
        case 1: {
            IF_SETGRAPHIC(10350 as graphic, comp(271, 2));
            IF_SETTEXT("", comp(271, 4));
            IF_SETHIDE(false, comp(271, 10));
            IF_SETHIDE(true, comp(271, 11));
            break;
        }
        case 2: {
            IF_SETTEXT("X2", comp(271, 4));
            break;
        }
        case 3: {
            IF_SETTEXT("X3", comp(271, 4));
            break;
        }
        case 4: {
            IF_SETTEXT("X4", comp(271, 4));
            break;
        }
        case 5: {
            IF_SETTEXT("X5", comp(271, 4));
            break;
        }
        case 6: {
            IF_SETTEXT("X6", comp(271, 4));
            break;
        }
        case 7: {
            IF_SETTEXT("X7", comp(271, 4));
            break;
        }
        case 8: {
            IF_SETTEXT("X8", comp(271, 4));
            break;
        }
        case 9: {
            IF_SETTEXT("X9", comp(271, 4));
            break;
        }
        case 10: {
            IF_SETTEXT("X10", comp(271, 4));
            break;
        }
        case 11: {
            IF_SETGRAPHIC(10351 as graphic, comp(271, 2));
            IF_SETTEXT("", comp(271, 4));
            break;
        }
        case 12: {
            IF_SETGRAPHIC(10351 as graphic, comp(271, 2));
            IF_SETTEXT("", comp(271, 4));
            break;
        }
        default: {
            IF_SETOBJECT(int2, int3, comp(271, 3));
            IF_SETTEXT("+", comp(271, 4));
            IF_SETTEXTFONT(61 as fontmetrics, comp(271, 4));
            IF_SETPOSITION(-20, 0, 1, 1, comp(271, 4));
            break;
        }
    };
    return;
}