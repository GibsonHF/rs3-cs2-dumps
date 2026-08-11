//
function script4230(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number): void {
    if ((int4 != 10)) {
        IF_SETHIDE(false, comp(495, 15));  // barbassault_turret:queen_icon_off
        IF_SETHIDE(true, comp(495, 16));  // barbassault_turret:queen_button
    } else if ((varplayer_4688 == 0)) {
        IF_SETHIDE(true, comp(495, 15));  // barbassault_turret:queen_icon_off
        IF_SETHIDE(false, comp(495, 16));  // barbassault_turret:queen_button
    } else {
        IF_SETHIDE(false, comp(495, 15));  // barbassault_turret:queen_icon_off
        IF_SETHIDE(true, comp(495, 16));  // barbassault_turret:queen_button
    };
    IF_SETTEXT(inttostring(int1, 10), comp(495, 312));  // barbassault_turret:red_eggs
    IF_SETTEXT(inttostring(int2, 10), comp(495, 301));  // barbassault_turret:blue_eggs
    IF_SETTEXT(inttostring(int0, 10), comp(495, 290));  // barbassault_turret:green_eggs
    IF_SETTEXT(inttostring(int3, 10), comp(495, 56));  // barbassault_turret:omega_eggs
    if ((int5 == 1)) {
        IF_SETHIDE(false, comp(495, 20));  // barbassault_turret:fighter_icon_off
    } else {
        IF_SETHIDE(true, comp(495, 20));  // barbassault_turret:fighter_icon_off
    };
    if ((int6 == 1)) {
        IF_SETHIDE(false, comp(495, 32));  // barbassault_turret:ranger_icon_off
    } else {
        IF_SETHIDE(true, comp(495, 32));  // barbassault_turret:ranger_icon_off
    };
    if ((int7 == 1)) {
        IF_SETHIDE(false, comp(495, 28));  // barbassault_turret:runner_icon_off
    } else {
        IF_SETHIDE(true, comp(495, 28));  // barbassault_turret:runner_icon_off
    };
    if ((int8 == 1)) {
        IF_SETHIDE(false, comp(495, 24));  // barbassault_turret:healer_icon_off
    } else {
        IF_SETHIDE(true, comp(495, 24));  // barbassault_turret:healer_icon_off
    };
    return;
}