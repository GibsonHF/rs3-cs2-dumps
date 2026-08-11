//
function script794(): void {
    CC_DELETEALL(comp(753, 4));  // bslay_boss_info:boss_name_builder_layer
    CC_DELETEALL(comp(753, 6));  // bslay_boss_info:boss_name_scrollbar_layer
    IF_SETHIDE(true, comp(753, 107));  // bslay_boss_info:monster_layer
    IF_SETONVARCTRANSMIT(callback(script3869, 4485, 1), comp(753, 0));  // bslay_boss_info:main
    script6732();
    script5511();
    return;
}