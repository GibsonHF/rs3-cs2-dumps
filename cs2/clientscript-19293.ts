//
function script19293(): void {
    IF_SETONTIMER(callback(), comp(1290, 83));  // trh_dungeon_crawl_overlay:boss_encounter_npc_model
    IF_SETHIDE(true, comp(1290, 89));  // trh_dungeon_crawl_overlay:boss_encounter_dungeon_reward_layer
    IF_SETHIDE(false, comp(1290, 91));  // trh_dungeon_crawl_overlay:boss_encounter_footer_layer
    CC_DELETEALL(comp(1290, 86));  // trh_dungeon_crawl_overlay:boss_left_reward_grid
    CC_DELETEALL(comp(1290, 87));  // trh_dungeon_crawl_overlay:boss_right_reward_grid
    unk10997(84541470);
    return;
}