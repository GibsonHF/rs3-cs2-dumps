//
function script12563(int0: number): void {
    var int1 = 8;
    IF_SETPOSITION(0, 0, 1, 0, comp(1216, 5));  // levelup:info
    switch (int0) {
        case 1: {
            IF_SETGRAPHIC(27278 as graphic, comp(1216, 17));  // levelup:levelup_icon
            break;
        }
        case 2: {
            IF_SETGRAPHIC(27531 as graphic, comp(1216, 17));  // levelup:levelup_icon
            break;
        }
        case 3: {
            IF_SETGRAPHIC(27280 as graphic, comp(1216, 17));  // levelup:levelup_icon
            break;
        }
    };
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
    var int2 = 1;
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
    var int3 = 99;
    IF_SETHIDE(false, comp(1216, 14));  // levelup:number_left
    IF_SETHIDE(false, comp(1216, 15));  // levelup:number_centre
    IF_SETHIDE(false, comp(1216, 16));  // levelup:number_right
    IF_SETPOSITION(-10, 45, 1, 0, comp(1216, 14));  // levelup:number_left
    IF_SETPOSITION(10, 45, 1, 0, comp(1216, 16));  // levelup:number_right
    script517((int3 / 10), 79691790);
    script517(MODULO(int3, 10), 79691792);
    IF_SETHIDE(true, comp(1216, 15));  // levelup:number_centre
    IF_SETHIDE(false, comp(1216, 3));  // levelup:max_firework
    IF_SETMODEL(32143 as model, comp(1216, 2));  // levelup:firework_effect
    IF_SETONTIMER(callback(script3336, (CLIENTCLOCK() + 100), (CLIENTCLOCK() + 200), (CLIENTCLOCK() + 500), varclient_1756), comp(1216, 0));  // levelup:levelup_layer
    IF_SETHIDE(false, comp(1216, 5));  // levelup:info
    IF_SETHIDE(true, comp(1213, 1));  // xp_popup:xp_ring_layer
    var int4 = RANDOM(150);
    var int5 = RANDOM(50);
    IF_SETONTIMER(callback(script337, int1, (CLIENTCLOCK() + 25)), comp(1216, 7));  // levelup:levelup_bg
    return;
}