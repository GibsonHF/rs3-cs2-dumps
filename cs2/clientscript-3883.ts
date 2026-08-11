//
function script3883(): void {
    IF_SETSIZE(1, 20, 0, 0, comp(580, 4));  // choice_v2_overlay:option_1
    IF_SETSIZE(1, 20, 0, 0, comp(580, 11));  // choice_v2_overlay:option_2
    IF_SETSIZE(1, 20, 0, 0, comp(580, 18));  // choice_v2_overlay:option_3
    IF_SETSIZE(1, 20, 0, 0, comp(580, 25));  // choice_v2_overlay:option_4
    IF_SETSIZE(1, 20, 0, 0, comp(580, 32));  // choice_v2_overlay:option_5
    IF_SETONTIMER(callback(script3884, 38010884, 38010889), comp(580, 4));  // choice_v2_overlay:option_1
    IF_SETONTIMER(callback(script3884, 38010891, 38010896), comp(580, 11));  // choice_v2_overlay:option_2
    IF_SETONTIMER(callback(script3884, 38010898, 38010903), comp(580, 18));  // choice_v2_overlay:option_3
    IF_SETONTIMER(callback(script3884, 38010905, 38010910), comp(580, 25));  // choice_v2_overlay:option_4
    IF_SETONTIMER(callback(script3884, 38010912, 38010917), comp(580, 32));  // choice_v2_overlay:option_5
    return;
}