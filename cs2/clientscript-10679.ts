//
function script10679(): void {
    script10680(varbitplayer_25485, 29178 as struct, comp(1544, 57), comp(1544, 19), comp(1544, 54), comp(1544, 55));
    script10680(varbitplayer_25495, 29176 as struct, comp(1544, 47), comp(1544, 17), comp(1544, 44), comp(1544, 45));
    script10680(varbitplayer_25487, 29181 as struct, comp(1544, 42), comp(1544, 18), comp(1544, 40), comp(1544, 39));
    script10680(varbitplayer_25489, 29177 as struct, comp(1544, 60), comp(1544, 16), comp(1544, 58), comp(1544, 33));
    script10680(varbitplayer_25486, 29179 as struct, comp(1544, 52), comp(1544, 14), comp(1544, 49), comp(1544, 50));
    script10680(varbitplayer_25488, 29180 as struct, comp(1544, 61), comp(1544, 15), comp(1544, 36), comp(1544, 35));
    IF_SETTEXT(TOSTRING_LOCALISED(INV_TOTAL(93 as inv, 32440 as obj), 1), comp(1544, 64));
    IF_SETHIDE(false, comp(1544, 23));
    IF_SETHIDE(true, comp(1544, 25));
    IF_SETHIDE(true, comp(1544, 27));
    IF_SETONOP(callback(script10682, 0), comp(1544, 29));
    return;
}