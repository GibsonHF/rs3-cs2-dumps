//
function script19874(): void {
    IF_SETHIDE(false, comp(1288, 0));  // trh_academy_shared_overlay:splash_screen
    IF_SETHIDE(true, comp(1288, 1));  // trh_academy_shared_overlay:universe
    IF_SETHIDE(true, comp(1288, 151));  // trh_academy_shared_overlay:splash_screen_title
    IF_SETHIDE(false, comp(1288, 153));  // trh_academy_shared_overlay:splash_screen_title_graphic
    script4170(84410521, 34838, 34839, 34840, 34841);
    IF_SETPOSITION(0, 75, 1, 0, comp(1288, 152));  // trh_academy_shared_overlay:splash_screen_desc
    IF_SETSIZE(325, 200, 0, 0, comp(1288, 152));  // trh_academy_shared_overlay:splash_screen_desc
    IF_SETTEXTFONT(209 as fontmetrics, comp(1288, 152));  // trh_academy_shared_overlay:splash_screen_desc
    IF_SETPOSITION(0, 0, 1, 0, comp(1288, 149));  // trh_academy_shared_overlay:splash_screen_desc_shadow
    IF_SETSIZE(325, 450, 0, 0, comp(1288, 149));  // trh_academy_shared_overlay:splash_screen_desc_shadow
    IF_SETTEXT("Beat different encounters to increase your mage's level!<br><br>Reach level milestones to unlock<br>new <col=3366FF>Saradominist</col> and <col=E80404>Zamorakian <col=F0BE79>themed capes, amulets,</col> and <col=F0BE79>combat overrides</col>!", comp(1288, 152));  // trh_academy_shared_overlay:splash_screen_desc
    IF_SETGRAPHIC(34828 as graphic, comp(1288, 85));  // trh_academy_shared_overlay:splash_screen_bg
    IF_SETPOSITION(0, 4, 1, 2, comp(1288, 85));  // trh_academy_shared_overlay:splash_screen_bg
    IF_SETNPCMODEL(31650 as npc, comp(1288, 162));  // trh_academy_shared_overlay:splash_screen_npc_large_model_1
    IF_SETPOSITION(-29, -3, 1, 1, comp(1288, 162));  // trh_academy_shared_overlay:splash_screen_npc_large_model_1
    IF_SETPOSITION(-29, -3, 1, 1, comp(1288, 161));  // trh_academy_shared_overlay:reward_preview_player_1_spotanim_model
    IF_SETNPCMODEL(31651 as npc, comp(1288, 163));  // trh_academy_shared_overlay:splash_screen_npc_large_model_2
    IF_SETPOSITION(29, -3, 1, 1, comp(1288, 163));  // trh_academy_shared_overlay:splash_screen_npc_large_model_2
    IF_SETPOSITION(29, -3, 1, 1, comp(1288, 147));  // trh_academy_shared_overlay:reward_preview_player_2_spotanim_model
    IF_SETHIDE(false, comp(1288, 155));  // trh_academy_shared_overlay:reward_preview_grid
    IF_SETOPBASE("<col=FF00>Amulets", comp(1288, 164));  // trh_academy_shared_overlay:reward_preview_1_layer
    IF_SETOPBASE("<col=FF00>Concentrated Blast", comp(1288, 168));  // trh_academy_shared_overlay:reward_preview_2_layer
    IF_SETOPBASE("<col=FF00>Chain", comp(1288, 171));  // trh_academy_shared_overlay:reward_preview_3_layer
    IF_SETOPBASE("<col=FF00>Wild Magic", comp(1288, 172));  // trh_academy_shared_overlay:reward_preview_4_layer
    IF_SETOPBASE("<col=FF00>Capes", comp(1288, 173));  // trh_academy_shared_overlay:reward_preview_5_layer
    script19876(1);
    return;
}