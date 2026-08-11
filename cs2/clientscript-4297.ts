//
function script4297(int0: number, int1: number): void {
    var int2 = IF_GETWIDTH(comp(1185, 7));  // nature_boss_healthbar_second_bar:health_bar_red
    var int3 = (30 + SCALE(195, 100, (100 - int1)));
    var int4 = (225 - SCALE(195, 100, (100 - int1)));
    var int5 = 0;
    var int6 = 1;
    switch (varbitplayer_40595) {
        case 0: {
            break;
        }
        case 2: {
            int3 = 179;
            int4 = 36;
            int5 = 0;
            IF_SETCOLOUR(script693(int3, int4, int5), comp(1185, 11));  // nature_boss_healthbar_second_bar:health_bar_fill
            break;
        }
        case 3: {
            int3 = 255;
            int4 = 51;
            int5 = 153;
            IF_SETCOLOUR(script693(int3, int4, int5), comp(1185, 11));  // nature_boss_healthbar_second_bar:health_bar_fill
            break;
        }
        case 1: {
            int3 = 163;
            int4 = 0;
            int5 = 200;
            IF_SETCOLOUR(script693(int3, int4, int5), comp(1185, 11));  // nature_boss_healthbar_second_bar:health_bar_fill
            break;
        }
    };
    if ((int2 < int0)) {
        if ((int2 < (int0 - 10))) {
            int6 = 5;
        };
        IF_SETSIZE((int2 + int6), 19, 0, 0, comp(1185, 7));  // nature_boss_healthbar_second_bar:health_bar_red
        IF_SETSIZE((int2 + int6), 19, 0, 0, comp(1185, 9));  // nature_boss_healthbar_second_bar:red_wave_effect
        IF_SETCOLOUR(script693(int3, int4, 0), comp(1185, 6));  // nature_boss_healthbar_second_bar:health_diamond_left
        IF_SETCOLOUR(script693(int3, int4, 0), comp(1185, 5));  // nature_boss_healthbar_second_bar:health_diamond_right
    } else if ((int2 > int0)) {
        if ((int2 > (int0 + 10))) {
            int6 = 5;
        };
        IF_SETSIZE((int2 - int6), 19, 0, 0, comp(1185, 7));  // nature_boss_healthbar_second_bar:health_bar_red
        IF_SETSIZE((int2 - int6), 19, 0, 0, comp(1185, 9));  // nature_boss_healthbar_second_bar:red_wave_effect
        IF_SETCOLOUR(script693(int3, int4, int3), comp(1185, 6));  // nature_boss_healthbar_second_bar:health_diamond_left
        IF_SETCOLOUR(script693(int3, int4, int5), comp(1185, 5));  // nature_boss_healthbar_second_bar:health_diamond_right
    } else {
        IF_SETONTIMER(callback(), comp(1185, 6));  // nature_boss_healthbar_second_bar:health_diamond_left
    };
    return;
}