//
function script19291(): void {
    IF_SETMODEL(-1 as model, comp(1290, 83));  // trh_dungeon_crawl_overlay:boss_encounter_npc_model
    IF_SETHIDE(true, comp(1290, 88));  // trh_dungeon_crawl_overlay:boss_encounter_examine_layer
    IF_SETTEXT("Claim Prizes", comp(1290, 204));  // trh_dungeon_crawl_overlay:boss_encounter_button_text
    IF_SETHIDE(false, comp(1290, 89));  // trh_dungeon_crawl_overlay:boss_encounter_dungeon_reward_layer
    IF_SETHIDE(false, comp(1290, 91));  // trh_dungeon_crawl_overlay:boss_encounter_footer_layer
    return;
}