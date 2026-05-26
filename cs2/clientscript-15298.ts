//
function script15298(): void {
    var int0 = script15291();
    var string0 = "Random!";
    var string1 = "";
    var string2 = "";
    var int1 = 0;
    var int2 = -1;
    var int3 = 0;
    var int4 = script13408(varbitplayer_48224);
    script16706(17760267, int0, varplayer_9595, script14580(), script15290(), 0);
    if ((int0 != -1)) {
        string0 = OC_NAME(int0);
    };
    IF_SETTEXT(string0, 17760261);
    if ((int4 == 0)) {
        IF_SETHIDE(1, 17760262);
    } else {
        IF_SETHIDE(0, 17760262);
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
    IF_SETTEXTFONT(60, 17760260);
    IF_SETHIDE(1, 17760266);
    IF_SETHIDE(0, 17760267);
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
            IF_SETTEXT("X2", 17760260);
            break;
        }
        case 3: {
            IF_SETTEXT("X3", 17760260);
            break;
        }
        case 4: {
            IF_SETTEXT("X4", 17760260);
            break;
        }
        case 5: {
            IF_SETTEXT("X5", 17760260);
            break;
        }
        case 6: {
            IF_SETTEXT("X6", 17760260);
            break;
        }
        case 7: {
            IF_SETTEXT("X7", 17760260);
            break;
        }
        case 8: {
            IF_SETTEXT("X8", 17760260);
            break;
        }
        case 9: {
            IF_SETTEXT("X9", 17760260);
            break;
        }
        case 10: {
            IF_SETTEXT("X10", 17760260);
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
            IF_SETOBJECT(int2, int3, 17760259);
            IF_SETTEXT("+", 17760260);
            IF_SETTEXTFONT(61, 17760260);
            IF_SETPOSITION(-20, 0, 1, 1, 17760260);
            break;
        }
    };
    return;
}