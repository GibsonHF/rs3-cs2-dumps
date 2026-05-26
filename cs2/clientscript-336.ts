//
function script336(): void {
    var int0 = 0;
    if ((varbitclient_31168 == 0)) {
        return;
    };
    IF_SETPOSITION(0, 0, 1, 0, 79691781);
    IF_SETGRAPHIC(enum_getvalue(0, 23, 745 as cs2enum, varbitclient_31168), 79691793);
    IF_SETTRANS(0, 79691793);
    IF_SETTRANS(0, 79691787);
    IF_SETTRANS(0, 79691788);
    IF_SETTRANS(0, 79691786);
    IF_SETTRANS(0, 79691789);
    IF_SETTRANS(255, 79691790);
    IF_SETTRANS(255, 79691792);
    IF_SETTRANS(255, 79691791);
    IF_SETTRANS(0, 79691784);
    IF_SETTRANS(0, 79691783);
    IF_SETHIDE(1, 79691779);
    IF_SETHIDE(1, 79691780);
    IF_SETHIDE(1, 79691778);
    var int1 = 0;
    var int2 = enum_getvalue(0, 17, 681 as cs2enum, varbitclient_31168);
    IF_SETGRAPHIC(27160 as graphic, 79691783);
    IF_SETGRAPHIC(27167 as graphic, 79691786);
    IF_SETGRAPHIC(27166 as graphic, 79691787);
    IF_SETGRAPHIC(27168 as graphic, 79691788);
    IF_SET2DANGLE(0, 79691784);
    switch (MAP_LANG()) {
        case 1: {
            IF_SETSIZE(240, 33, 0, 0, 79691785);
            IF_SETGRAPHIC(27169 as graphic, 79691789);
            break;
        }
        case 2: {
            IF_SETSIZE(240, 33, 0, 0, 79691785);
            IF_SETGRAPHIC(27170 as graphic, 79691789);
            break;
        }
        case 3: {
            IF_SETSIZE(220, 33, 0, 0, 79691785);
            IF_SETGRAPHIC(27171 as graphic, 79691789);
            break;
        }
        case 6: {
            IF_SETSIZE(220, 33, 0, 0, 79691785);
            IF_SETGRAPHIC(27173 as graphic, 79691789);
            break;
        }
        default: {
            IF_SETSIZE(150, 33, 0, 0, 79691785);
            IF_SETGRAPHIC(27172 as graphic, 79691789);
            break;
        }
    };
    if ((enum_getvalue(17, 17, 744 as cs2enum, int2) == -1 as stat)) {
        IF_SETGRAPHIC(27193 as graphic, 79691783);
        IF_SETGRAPHIC(27186 as graphic, 79691786);
        IF_SETGRAPHIC(27185 as graphic, 79691787);
        IF_SETGRAPHIC(27187 as graphic, 79691788);
        switch (MAP_LANG()) {
            case 1: {
                IF_SETSIZE(240, 33, 0, 0, 79691785);
                IF_SETGRAPHIC(27188 as graphic, 79691789);
                break;
            }
            case 2: {
                IF_SETSIZE(240, 33, 0, 0, 79691785);
                IF_SETGRAPHIC(27189 as graphic, 79691789);
                break;
            }
            case 3: {
                IF_SETSIZE(220, 33, 0, 0, 79691785);
                IF_SETGRAPHIC(27190 as graphic, 79691789);
                break;
            }
            case 6: {
                IF_SETSIZE(220, 33, 0, 0, 79691785);
                IF_SETGRAPHIC(27192 as graphic, 79691789);
                break;
            }
            default: {
                IF_SETSIZE(150, 33, 0, 0, 79691785);
                IF_SETGRAPHIC(27191 as graphic, 79691789);
                break;
            }
        };
    };
    IF_SETHIDE(0, 79691790);
    IF_SETHIDE(0, 79691791);
    IF_SETHIDE(0, 79691792);
    if ((varbitclient_31169 < 10)) {
        IF_SETPOSITION(0, 45, 1, 0, 79691790);
        IF_SETHIDE(1, 79691792);
        IF_SETHIDE(1, 79691791);
        script517(varbitclient_31169, 79691790);
    } else if ((varbitclient_31169 < 100)) {
        IF_SETPOSITION(-10, 45, 1, 0, 79691790);
        IF_SETPOSITION(10, 45, 1, 0, 79691792);
        script517((varbitclient_31169 / 10), 79691790);
        script517(MODULO(varbitclient_31169, 10), 79691792);
        IF_SETHIDE(1, 79691791);
    } else {
        IF_SETPOSITION(-20, 45, 1, 0, 79691790);
        IF_SETPOSITION(0, 45, 1, 0, 79691791);
        IF_SETPOSITION(20, 45, 1, 0, 79691792);
        script517((varbitclient_31169 / 100), 79691790);
        script517(((varbitclient_31169 - 100) / 10), 79691791);
        script517(MODULO(varbitclient_31169, 10), 79691792);
    };
    if (((varbitclient_31169 == 99) || (varbitclient_31169 == 120))) {
        IF_SETHIDE(0, 79691779);
        IF_SETMODEL(32143, 79691778);
        int0 = 8;
    } else {
        IF_SETMODEL(32167, 79691778);
    };
    if ((enum_getvalue(17, 17, 744 as cs2enum, int2) == -1 as stat)) {
        int1 = 1;
    };
    if ((varbitplayer_20940 == 30)) {
        IF_SETONTIMER(callback(script3336, (CLIENTCLOCK() + 100), (CLIENTCLOCK() + 200), (CLIENTCLOCK() + 5000000), varbitclient_31168), 79691776);
    } else {
        IF_SETONTIMER(callback(script3336, (CLIENTCLOCK() + 100), (CLIENTCLOCK() + 200), (CLIENTCLOCK() + 500), varbitclient_31168), 79691776);
    };
    IF_SETHIDE(0, 79691781);
    IF_SETHIDE(1, 79495169);
    var int3 = RANDOM(150);
    var int4 = RANDOM(50);
    if ((MODULO(varbitclient_31169, 10) == 0)) {
        int0 = 4;
    };
    if ((int0 > 0)) {
        IF_SETONTIMER(callback(script337, int0, (CLIENTCLOCK() + 25)), 79691783);
    };
    varclient_5188 = 0;
    return;
}