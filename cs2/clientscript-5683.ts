//
function script5683(int0: number): void {
    CC_DELETEALL(79823094);
    CC_DELETEALL(79823095);
    CC_DELETEALL(79823093);
    varclient_1753 = int0;
    varclient_1754 = script12842(int0);
    var int1 = 0;
    var int2 = -1 as cs2enum;
    var int3 = 0;
    var int4 = 0;
    var int5 = 30;
    var int6 = 0;
    IF_SETHIDE(1, 79823091);
    IF_SETHIDE(0, 79823090);
    IF_SETHIDE(1, 79823096);
    if ((int0 > 0)) {
        IF_SETHIDE(0, 79823104);
        IF_SETHIDE(0, 79823107);
        IF_SETTEXT(enum_getvalue(0, 36, 108 as cs2enum, int0), 79822852);
        if ((varbitplayer_19007 == 1)) {
            IF_SETTEXT(`${inttostring(script11862(enum_getvalue(0, 17, 681 as cs2enum, int0)), 10)}</col>`, 79822853);
        } else {
            IF_SETTEXT(inttostring(STAT_BASE(enum_getvalue(0, 17, 681 as cs2enum, int0)), 10), 79822853);
        };
        int2 = enum_getvalue(0, 26, 5421 as cs2enum, int0);
        script10428(79823108, 79823109, int2, -1, "", varclient_1754, 0);
        script10428(79823105, 79823106, 14116 as cs2enum, -1, "", varclient_1755, 0);
    };
    IF_SETHIDE(1, 79822868);
    IF_SETHIDE(1, 79822884);
    IF_SETHIDE(1, 79822892);
    IF_SETHIDE(1, 79823013);
    IF_SETHIDE(1, 79823069);
    IF_SETHIDE(1, 79823061);
    IF_SETHIDE(1, 79822924);
    IF_SETHIDE(1, 79822900);
    IF_SETHIDE(1, 79822908);
    IF_SETHIDE(1, 79822917);
    IF_SETHIDE(1, 79822932);
    IF_SETHIDE(1, 79822980);
    IF_SETHIDE(1, 79822964);
    IF_SETHIDE(1, 79823037);
    IF_SETHIDE(1, 79823085);
    IF_SETHIDE(1, 79823029);
    IF_SETHIDE(1, 79822956);
    IF_SETHIDE(1, 79823005);
    IF_SETHIDE(1, 79822972);
    IF_SETHIDE(1, 79822860);
    IF_SETHIDE(1, 79823045);
    IF_SETHIDE(1, 79823053);
    IF_SETHIDE(1, 79822948);
    IF_SETHIDE(1, 79822988);
    IF_SETHIDE(1, 79823077);
    IF_SETHIDE(1, 79822940);
    IF_SETHIDE(1, 79822996);
    IF_SETHIDE(1, 79822876);
    IF_SETHIDE(1, 79823021);
    IF_SETHIDE(1, 79822864);
    IF_SETHIDE(1, 79822880);
    IF_SETHIDE(1, 79822888);
    IF_SETHIDE(1, 79823009);
    IF_SETHIDE(1, 79823065);
    IF_SETHIDE(1, 79823057);
    IF_SETHIDE(1, 79822920);
    IF_SETHIDE(1, 79822896);
    IF_SETHIDE(1, 79822904);
    IF_SETHIDE(1, 79822912);
    IF_SETHIDE(1, 79822928);
    IF_SETHIDE(1, 79822976);
    IF_SETHIDE(1, 79822960);
    IF_SETHIDE(1, 79823033);
    IF_SETHIDE(1, 79823081);
    IF_SETHIDE(1, 79823025);
    IF_SETHIDE(1, 79822952);
    IF_SETHIDE(1, 79823001);
    IF_SETHIDE(1, 79822968);
    IF_SETHIDE(1, 79822856);
    IF_SETHIDE(1, 79823041);
    IF_SETHIDE(1, 79823049);
    IF_SETHIDE(1, 79822944);
    IF_SETHIDE(1, 79822984);
    IF_SETHIDE(1, 79823073);
    IF_SETHIDE(1, 79822936);
    IF_SETHIDE(1, 79822992);
    IF_SETHIDE(1, 79822872);
    IF_SETHIDE(1, 79823017);
    switch (int0) {
        case 8: {
            IF_SETHIDE(0, 79822868);
            IF_SETHIDE(0, 79822864);
            break;
        }
        case 28: {
            IF_SETHIDE(0, 79822876);
            IF_SETHIDE(0, 79822872);
            break;
        }
        case 1: {
            IF_SETHIDE(0, 79822884);
            IF_SETHIDE(0, 79822880);
            break;
        }
        case 6: {
            IF_SETHIDE(0, 79822892);
            IF_SETHIDE(0, 79822888);
            break;
        }
        case 22: {
            IF_SETHIDE(0, 79822900);
            IF_SETHIDE(0, 79822896);
            break;
        }
        case 16: {
            IF_SETHIDE(0, 79822908);
            IF_SETHIDE(0, 79822904);
            break;
        }
        case 11: {
            IF_SETHIDE(0, 79822917);
            IF_SETHIDE(0, 79822912);
            break;
        }
        case 5: {
            IF_SETHIDE(0, 79822924);
            IF_SETHIDE(0, 79822920);
            break;
        }
        case 26: {
            IF_SETHIDE(0, 79822932);
            IF_SETHIDE(0, 79822928);
            break;
        }
        case 25: {
            IF_SETHIDE(0, 79822940);
            IF_SETHIDE(0, 79822936);
            break;
        }
        case 21: {
            IF_SETHIDE(0, 79822948);
            IF_SETHIDE(0, 79822944);
            break;
        }
        case 17: {
            IF_SETHIDE(0, 79822956);
            IF_SETHIDE(0, 79822952);
            break;
        }
        case 15: {
            IF_SETHIDE(0, 79822964);
            IF_SETHIDE(0, 79822960);
            break;
        }
        case 19: {
            IF_SETHIDE(0, 79822972);
            IF_SETHIDE(0, 79822968);
            break;
        }
        case 9: {
            IF_SETHIDE(0, 79822980);
            IF_SETHIDE(0, 79822976);
            break;
        }
        case 23: {
            IF_SETHIDE(0, 79822988);
            IF_SETHIDE(0, 79822984);
            break;
        }
        case 27: {
            IF_SETHIDE(0, 79822996);
            IF_SETHIDE(0, 79822992);
            break;
        }
        case 4: {
            IF_SETHIDE(0, 79823005);
            IF_SETHIDE(0, 79823001);
            break;
        }
        case 13: {
            IF_SETHIDE(0, 79823013);
            IF_SETHIDE(0, 79823009);
            break;
        }
        case 29: {
            IF_SETHIDE(0, 79823021);
            IF_SETHIDE(0, 79823017);
            break;
        }
        case 7: {
            IF_SETHIDE(0, 79823029);
            IF_SETHIDE(0, 79823025);
            break;
        }
        case 3: {
            IF_SETHIDE(0, 79823037);
            IF_SETHIDE(0, 79823033);
            break;
        }
        case 12: {
            IF_SETHIDE(0, 79823045);
            IF_SETHIDE(0, 79823041);
            break;
        }
        case 20: {
            IF_SETHIDE(0, 79823053);
            IF_SETHIDE(0, 79823049);
            break;
        }
        case 14: {
            IF_SETHIDE(0, 79823061);
            IF_SETHIDE(0, 79823057);
            break;
        }
        case 2: {
            IF_SETHIDE(0, 79823069);
            IF_SETHIDE(0, 79823065);
            break;
        }
        case 24: {
            IF_SETHIDE(0, 79823077);
            IF_SETHIDE(0, 79823073);
            break;
        }
        case 10: {
            IF_SETHIDE(0, 79823085);
            IF_SETHIDE(0, 79823081);
            break;
        }
        case 18: {
            IF_SETHIDE(0, 79822860);
            IF_SETHIDE(0, 79822856);
            break;
        }
    };
    return;
}