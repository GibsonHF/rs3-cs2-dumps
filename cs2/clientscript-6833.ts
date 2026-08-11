//
function script6833(): void {
    IF_SETHIDE(false, comp(754, 32));  // bslay_shop:items
    IF_SETHIDE(true, comp(754, 84));  // bslay_shop:effects
    IF_SETHIDE(true, comp(754, 238));  // bslay_shop:rewards
    IF_SETHIDE(false, comp(754, 8));  // bslay_shop:items_tab_selected_layer
    IF_SETHIDE(true, comp(754, 17));  // bslay_shop:effects_tab_selected_layer
    IF_SETHIDE(true, comp(754, 26));  // bslay_shop:rewards_tab_selected_layer
    IF_SETOBJECT(31869 as obj, 1, comp(754, 222));  // bslay_shop:overcharge_ring_of_death_model
    IF_SETHIDE(true, comp(754, 31));  // bslay_shop:scrollbar
    if ((varbitplayer_22905 < 40)) {
        script6834(49414177, 1);
    };
    if ((varbitplayer_22905 < 300)) {
        script6834(49414193, 1);
    };
    if (((varbitplayer_22905 < 25) && (varbitplayer_9071 < 250))) {
        script6834(49414209, 1);
    };
    return;
}