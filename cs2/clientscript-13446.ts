//
function script13446(): void {
    CC_DELETEALL(comp(1875, 78));  // repmodal:progress_join_layer
    CC_DELETEALL(comp(1875, 79));  // repmodal:progress_rewards_layer
    CC_DELETEALL(comp(1875, 83));  // repmodal:progress_join_bar_layer
    CC_DELETEALL(comp(1875, 81));  // repmodal:progress_value_bounds_layer
    CC_DELETEALL(comp(1875, 0));  // repmodal:progress_value_graphic_layer
    CC_DELETEALL(comp(1875, 75));  // repmodal:progress_background_layer
    IF_SETHIDE(true, comp(1875, 75));  // repmodal:progress_background_layer
    return;
}