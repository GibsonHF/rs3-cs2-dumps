//
function script336(): void {
    var int0 = 0;
    if ((varbitclient_31168 == 0)) {
        return;
    };
    IF_SETPOSITION(0, 0, 1, 0, comp(1216, 5));
    stack(enum_getvalue(0, 23, 745 as cs2enum, varbitclient_31168));
    stack(79691793);
    IF_SETGRAPHIC();
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
    stack(0);
    stack(17);
    stack(681);
    stack(varbitclient_31168);
    enum_getvalue();
    var int2 = stack();
    stack(27160);
    stack(79691783);
    IF_SETGRAPHIC();
    stack(27167);
    stack(79691786);
    IF_SETGRAPHIC();
    stack(27166);
    stack(79691787);
    IF_SETGRAPHIC();
    stack(27168);
    stack(79691788);
    IF_SETGRAPHIC();
    IF_SET2DANGLE(0, 79691784);
    switch (MAP_LANG()) {
        case 1: {
            IF_SETSIZE(240, 33, 0, 0, comp(1216, 9));
            stack(27169);
            stack(79691789);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            IF_SETSIZE(240, 33, 0, 0, comp(1216, 9));
            stack(27170);
            stack(79691789);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            IF_SETSIZE(220, 33, 0, 0, comp(1216, 9));
            stack(27171);
            stack(79691789);
            IF_SETGRAPHIC();
            break;
        }
        case 6: {
            IF_SETSIZE(220, 33, 0, 0, comp(1216, 9));
            stack(27173);
            stack(79691789);
            IF_SETGRAPHIC();
            break;
        }
        default: {
            IF_SETSIZE(150, 33, 0, 0, comp(1216, 9));
            stack(27172);
            stack(79691789);
            IF_SETGRAPHIC();
            break;
        }
    };
    if ((enum_getvalue(17, 17, 744 as cs2enum, int2) == -1 as stat)) {
        stack(27193);
        stack(79691783);
        IF_SETGRAPHIC();
        stack(27186);
        stack(79691786);
        IF_SETGRAPHIC();
        stack(27185);
        stack(79691787);
        IF_SETGRAPHIC();
        stack(27187);
        stack(79691788);
        IF_SETGRAPHIC();
        switch (MAP_LANG()) {
            case 1: {
                IF_SETSIZE(240, 33, 0, 0, comp(1216, 9));
                stack(27188);
                stack(79691789);
                IF_SETGRAPHIC();
                break;
            }
            case 2: {
                IF_SETSIZE(240, 33, 0, 0, comp(1216, 9));
                stack(27189);
                stack(79691789);
                IF_SETGRAPHIC();
                break;
            }
            case 3: {
                IF_SETSIZE(220, 33, 0, 0, comp(1216, 9));
                stack(27190);
                stack(79691789);
                IF_SETGRAPHIC();
                break;
            }
            case 6: {
                IF_SETSIZE(220, 33, 0, 0, comp(1216, 9));
                stack(27192);
                stack(79691789);
                IF_SETGRAPHIC();
                break;
            }
            default: {
                IF_SETSIZE(150, 33, 0, 0, comp(1216, 9));
                stack(27191);
                stack(79691789);
                IF_SETGRAPHIC();
                break;
            }
        };
    };
    IF_SETHIDE(false, comp(1216, 14));
    IF_SETHIDE(false, comp(1216, 15));
    IF_SETHIDE(false, comp(1216, 16));
    if ((varbitclient_31169 < 10)) {
        IF_SETPOSITION(0, 45, 1, 0, comp(1216, 14));
        IF_SETHIDE(true, comp(1216, 16));
        IF_SETHIDE(true, comp(1216, 15));
        script517(varbitclient_31169, 79691790);
    } else if ((varbitclient_31169 < 100)) {
        IF_SETPOSITION(-10, 45, 1, 0, comp(1216, 14));
        IF_SETPOSITION(10, 45, 1, 0, comp(1216, 16));
        script517((varbitclient_31169 / 10), 79691790);
        script517(MODULO(varbitclient_31169, 10), 79691792);
        IF_SETHIDE(true, comp(1216, 15));
    } else {
        IF_SETPOSITION(-20, 45, 1, 0, comp(1216, 14));
        IF_SETPOSITION(0, 45, 1, 0, comp(1216, 15));
        IF_SETPOSITION(20, 45, 1, 0, comp(1216, 16));
        script517((varbitclient_31169 / 100), 79691790);
        script517(((varbitclient_31169 - 100) / 10), 79691791);
        script517(MODULO(varbitclient_31169, 10), 79691792);
    };
    if (((varbitclient_31169 == 99) || (varbitclient_31169 == 120))) {
        IF_SETHIDE(false, comp(1216, 3));
        IF_SETMODEL(32143 as model, comp(1216, 2));
        int0 = 8;
    } else {
        IF_SETMODEL(32167 as model, comp(1216, 2));
    };
    if ((enum_getvalue(17, 17, 744 as cs2enum, int2) == -1 as stat)) {
        int1 = 1;
    };
    if ((varbitplayer_20940 == 30)) {
        IF_SETONTIMER(callback(script3336, (CLIENTCLOCK() + 100), (CLIENTCLOCK() + 200), (CLIENTCLOCK() + 5000000), varbitclient_31168), 79691776);
    } else {
        IF_SETONTIMER(callback(script3336, (CLIENTCLOCK() + 100), (CLIENTCLOCK() + 200), (CLIENTCLOCK() + 500), varbitclient_31168), 79691776);
    };
    IF_SETHIDE(false, comp(1216, 5));
    IF_SETHIDE(true, comp(1213, 1));
    var int3 = RANDOM(150);
    var int4 = RANDOM(50);
    if ((MODULO(varbitclient_31169, 10) == 0)) {
        int0 = 4;
    };
    if ((int0 > 0)) {
        IF_SETONTIMER(callback(script337, int0, (CLIENTCLOCK() + 25)), comp(1216, 7));
    };
    varclient_5188 = 0;
    return;
}