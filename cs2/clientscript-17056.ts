//
function script17056(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    IF_SETHIDE(true, comp(1082, 59));  // trh189_overlay:right_modifier
    IF_SETHIDE(true, comp(1082, 60));  // trh189_overlay:right_modifiers
    IF_SETHIDE(true, comp(1082, 74));  // trh189_overlay:left_modifier
    IF_SETHIDE(true, comp(1082, 73));  // trh189_overlay:left_modifier_shadow
    IF_SETHIDE(true, comp(1082, 75));  // trh189_overlay:left_modifiers
    IF_SETHIDE(true, comp(1082, 82));  // trh189_overlay:left_modifier_plus
    IF_SETHIDE(true, comp(1082, 44));  // trh189_overlay:skin_select_button
    IF_SETHIDE(true, comp(1082, 45));  // trh189_overlay:shop_button
    IF_SETHIDE(true, comp(1082, 46));  // trh189_overlay:promo_prize_button
    IF_SETMODELANIM(int4, int1);
    IF_SETMODELANIM(int2, int0);
    IF_SETONTIMER(callback(script17059, SEQLENGTH(int2), int3, int0), int0);
    IF_SETONTIMER(callback(script17057, SEQLENGTH(int4), int1), int1);
    IF_SETONTIMER(callback(script17058, (SEQLENGTH(int4) - 60), int1), comp(1082, 48));  // trh189_overlay:lunar_layer
    return;
}