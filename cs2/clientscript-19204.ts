//
function script19204(): void {
    IF_SETHIDE(true, comp(1288, 0));  // trh_academy_shared_overlay:splash_screen
    IF_SETHIDE(false, comp(1288, 1));  // trh_academy_shared_overlay:universe
    script16198(1, 84410368);
    IF_SETONTIMER(callback(), comp(1288, 127));  // trh_academy_shared_overlay:npc_model_1
    IF_SETONTIMER(callback(), comp(1288, 133));  // trh_academy_shared_overlay:npc_model_2
    IF_SETONTIMER(callback(), comp(1288, 141));  // trh_academy_shared_overlay:npc_model_3
    script19996();
    return;
}