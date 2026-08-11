//
function script336(): void {
    var int0 = 0;
    if ((varbitclient_31168 == 0)) {
        return;
    };
    IF_SETPOSITION(0, 0, 1, 0, comp(1216, 5));  // levelup:info
    IF_SETGRAPHIC(enum_getvalue(0, 23, 745 as cs2enum, varbitclient_31168), comp(1216, 17));  // levelup:levelup_icon
    IF_SETTRANS(0, comp(1216, 17));  // levelup:levelup_icon
    IF_SETTRANS(0, comp(1216, 11));  // levelup:trim_left
    IF_SETTRANS(0, comp(1216, 12));  // levelup:trim_right
    IF_SETTRANS(0, comp(1216, 10));  // levelup:trim_centre
    IF_SETTRANS(0, comp(1216, 13));  // levelup:levelup_text
    IF_SETTRANS(255, comp(1216, 14));  // levelup:number_left
    IF_SETTRANS(255, comp(1216, 16));  // levelup:number_right
    IF_SETTRANS(255, comp(1216, 15));  // levelup:number_centre
    IF_SETTRANS(0, comp(1216, 8));  // levelup:wheel
    IF_SETTRANS(0, comp(1216, 7));  // levelup:levelup_bg
    IF_SETHIDE(true, comp(1216, 3));  // levelup:max_firework
    IF_SETHIDE(true, comp(1216, 4));  // levelup:firework_effect_delayed
    IF_SETHIDE(true, comp(1216, 2));  // levelup:firework_effect
    var int1 = 0;
    var int2 = enum_getvalue(0, 17, 681 as cs2enum, varbitclient_31168);
    IF_SETGRAPHIC(27160 as graphic, comp(1216, 7));  // levelup:levelup_bg
    IF_SETGRAPHIC(27167 as graphic, comp(1216, 10));  // levelup:trim_centre
    IF_SETGRAPHIC(27166 as graphic, comp(1216, 11));  // levelup:trim_left
    IF_SETGRAPHIC(27168 as graphic, comp(1216, 12));  // levelup:trim_right
    IF_SET2DANGLE(0, comp(1216, 8));  // levelup:wheel
    switch (MAP_LANG()) {
        case 1: {
            IF_SETSIZE(240, 33, 0, 0, comp(1216, 9));  // levelup:text_layer
            IF_SETGRAPHIC(27169 as graphic, comp(1216, 13));  // levelup:levelup_text
            break;
        }
        case 2: {
            IF_SETSIZE(240, 33, 0, 0, comp(1216, 9));  // levelup:text_layer
            IF_SETGRAPHIC(27170 as graphic, comp(1216, 13));  // levelup:levelup_text
            break;
        }
        case 3: {
            IF_SETSIZE(220, 33, 0, 0, comp(1216, 9));  // levelup:text_layer
            IF_SETGRAPHIC(27171 as graphic, comp(1216, 13));  // levelup:levelup_text
            break;
        }
        case 6: {
            IF_SETSIZE(220, 33, 0, 0, comp(1216, 9));  // levelup:text_layer
            IF_SETGRAPHIC(27173 as graphic, comp(1216, 13));  // levelup:levelup_text
            break;
        }
        default: {
            IF_SETSIZE(150, 33, 0, 0, comp(1216, 9));  // levelup:text_layer
            IF_SETGRAPHIC(27172 as graphic, comp(1216, 13));  // levelup:levelup_text
            break;
        }
    };
    if ((enum_getvalue(17, 17, 744 as cs2enum, int2) == -1 as stat)) {
        IF_SETGRAPHIC(27193 as graphic, comp(1216, 7));  // levelup:levelup_bg
        IF_SETGRAPHIC(27186 as graphic, comp(1216, 10));  // levelup:trim_centre
        IF_SETGRAPHIC(27185 as graphic, comp(1216, 11));  // levelup:trim_left
        IF_SETGRAPHIC(27187 as graphic, comp(1216, 12));  // levelup:trim_right
        switch (MAP_LANG()) {
            case 1: {
                IF_SETSIZE(240, 33, 0, 0, comp(1216, 9));  // levelup:text_layer
                IF_SETGRAPHIC(27188 as graphic, comp(1216, 13));  // levelup:levelup_text
                break;
            }
            case 2: {
                IF_SETSIZE(240, 33, 0, 0, comp(1216, 9));  // levelup:text_layer
                IF_SETGRAPHIC(27189 as graphic, comp(1216, 13));  // levelup:levelup_text
                break;
            }
            case 3: {
                IF_SETSIZE(220, 33, 0, 0, comp(1216, 9));  // levelup:text_layer
                IF_SETGRAPHIC(27190 as graphic, comp(1216, 13));  // levelup:levelup_text
                break;
            }
            case 6: {
                IF_SETSIZE(220, 33, 0, 0, comp(1216, 9));  // levelup:text_layer
                IF_SETGRAPHIC(27192 as graphic, comp(1216, 13));  // levelup:levelup_text
                break;
            }
            default: {
                IF_SETSIZE(150, 33, 0, 0, comp(1216, 9));  // levelup:text_layer
                IF_SETGRAPHIC(27191 as graphic, comp(1216, 13));  // levelup:levelup_text
                break;
            }
        };
    };
    IF_SETHIDE(false, comp(1216, 14));  // levelup:number_left
    IF_SETHIDE(false, comp(1216, 15));  // levelup:number_centre
    IF_SETHIDE(false, comp(1216, 16));  // levelup:number_right
    if ((varbitclient_31169 < 10)) {
        IF_SETPOSITION(0, 45, 1, 0, comp(1216, 14));  // levelup:number_left
        IF_SETHIDE(true, comp(1216, 16));  // levelup:number_right
        IF_SETHIDE(true, comp(1216, 15));  // levelup:number_centre
        script517(varbitclient_31169, 79691790);
    } else if ((varbitclient_31169 < 100)) {
        IF_SETPOSITION(-10, 45, 1, 0, comp(1216, 14));  // levelup:number_left
        IF_SETPOSITION(10, 45, 1, 0, comp(1216, 16));  // levelup:number_right
        script517((varbitclient_31169 / 10), 79691790);
        script517(MODULO(varbitclient_31169, 10), 79691792);
        IF_SETHIDE(true, comp(1216, 15));  // levelup:number_centre
    } else {
        IF_SETPOSITION(-20, 45, 1, 0, comp(1216, 14));  // levelup:number_left
        IF_SETPOSITION(0, 45, 1, 0, comp(1216, 15));  // levelup:number_centre
        IF_SETPOSITION(20, 45, 1, 0, comp(1216, 16));  // levelup:number_right
        script517((varbitclient_31169 / 100), 79691790);
        script517(((varbitclient_31169 - 100) / 10), 79691791);
        script517(MODULO(varbitclient_31169, 10), 79691792);
    };
    if (((varbitclient_31169 == 99) || (varbitclient_31169 == 120))) {
        IF_SETHIDE(false, comp(1216, 3));  // levelup:max_firework
        IF_SETMODEL(32143 as model, comp(1216, 2));  // levelup:firework_effect
        int0 = 8;
    } else {
        IF_SETMODEL(32167 as model, comp(1216, 2));  // levelup:firework_effect
    };
    if ((enum_getvalue(17, 17, 744 as cs2enum, int2) == -1 as stat)) {
        int1 = 1;
    };
    if ((varbitplayer_20940 == 30)) {
        IF_SETONTIMER(callback(script3336, (CLIENTCLOCK() + 100), (CLIENTCLOCK() + 200), (CLIENTCLOCK() + 5000000), varbitclient_31168), comp(1216, 0));  // levelup:levelup_layer
    } else {
        IF_SETONTIMER(callback(script3336, (CLIENTCLOCK() + 100), (CLIENTCLOCK() + 200), (CLIENTCLOCK() + 500), varbitclient_31168), comp(1216, 0));  // levelup:levelup_layer
    };
    IF_SETHIDE(false, comp(1216, 5));  // levelup:info
    IF_SETHIDE(true, comp(1213, 1));  // xp_popup:xp_ring_layer
    var int3 = RANDOM(150);
    var int4 = RANDOM(50);
    if ((MODULO(varbitclient_31169, 10) == 0)) {
        int0 = 4;
    };
    if ((int0 > 0)) {
        IF_SETONTIMER(callback(script337, int0, (CLIENTCLOCK() + 25)), comp(1216, 7));  // levelup:levelup_bg
    };
    varclient_5188 = 0;
    return;
}