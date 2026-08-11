//
function script10093(int0: number): void {
    IF_SETTRANS(255, int0);
    IF_SETHIDE(true, comp(1515, 16));  // sb_overlay:qte_controls
    IF_SETHIDE(true, comp(1515, 18));  // sb_overlay:progress_holder
    IF_SETHIDE(false, comp(1515, 19));  // sb_overlay:buff_layer
    IF_SETHIDE(true, comp(1515, 21));  // sb_overlay:buff_adds
    IF_SETHIDE(true, comp(1515, 23));  // sb_overlay:buff_acid
    IF_SETHIDE(true, comp(1515, 24));  // sb_overlay:buff_heal
    IF_SETTRANS(255, comp(1515, 12));  // sb_overlay:low_detail_darkness
    return;
}