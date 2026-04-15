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
    script16706(comp(271, 11), int0, varplayer_9595, script14580(), script15290(), 0);
    if ((int0 != -1 as obj)) {
        string0 = OC_NAME(int0);
    };
    IF_SETTEXT(string0, comp(271, 5));
    if ((int4 == 0)) {
        IF_SETHIDE(true, comp(271, 6));
    } else {
        IF_SETHIDE(false, comp(271, 6));
    };
    stack(10348);
    stack(17760258);
    IF_SETGRAPHIC();
    IF_SETOBJECT(-1, -1, 17760259);
    IF_SETPOSITION(0, 0, 1, 1, 17760260);
    stack(3792);
    stack(471040);
    stack(int4);
    dbrow_getfield();
    [string1, string2, int1, int2, int3] = stack();
    if ((int3 == 1)) {
        int3 = -1;
    };
    IF_SETTEXTFONT(60 as fontmetrics, comp(271, 4));
    IF_SETHIDE(true, comp(271, 10));
    IF_SETHIDE(false, comp(271, 11));
    switch (int4) {
        case 1: {
            stack(10350);
            stack(17760258);
            IF_SETGRAPHIC();
            IF_SETTEXT("", 17760260);
            IF_SETHIDE(0, 17760266);
            IF_SETHIDE(1, 17760267);
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
            stack(10351);
            stack(17760258);
            IF_SETGRAPHIC();
            IF_SETTEXT("", 17760260);
            break;
        }
        case 12: {
            stack(10351);
            stack(17760258);
            IF_SETGRAPHIC();
            IF_SETTEXT("", 17760260);
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