//
function script2843(): void {
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
    IF_SETHIDE(true, comp(473, 146));  // barbassault_reward_shop_new:roles_layer
    IF_SETHIDE(true, comp(473, 376));  // barbassault_reward_shop_new:armour_layer
    IF_SETHIDE(false, comp(473, 276));  // barbassault_reward_shop_new:weapons_layer
    IF_SETHIDE(true, comp(473, 15));  // barbassault_reward_shop_new:misc_layer
    IF_SETHIDE(true, comp(473, 3));  // barbassault_reward_shop_new:titles_layer
    IF_SETHIDE(true, comp(473, 561));  // barbassault_reward_shop_new:roles_tab_selected_layer
    IF_SETHIDE(true, comp(473, 569));  // barbassault_reward_shop_new:armour_tab_selected_layer
    IF_SETHIDE(false, comp(473, 577));  // barbassault_reward_shop_new:weapons_tab_selected_layer
    IF_SETHIDE(true, comp(473, 593));  // barbassault_reward_shop_new:misc_tab_selected_layer
    IF_SETHIDE(true, comp(473, 585));  // barbassault_reward_shop_new:titles_tab_selected_layer
    return;
}