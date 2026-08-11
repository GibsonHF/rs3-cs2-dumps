//
function script11081(): void {
    IF_SETHIDE(false, comp(753, 118));  // bslay_boss_info:static_dropdown
    IF_SETTEXT("Learn", comp(753, 50));  // bslay_boss_info:learn_button_text
    IF_SETHIDE(false, comp(753, 32));  // bslay_boss_info:boss_requirements_wrapper
    IF_SETHIDE(false, comp(753, 2));  // bslay_boss_info:bos_name_wrapper
    IF_SETHIDE(true, comp(753, 36));  // bslay_boss_info:boss_tactics_scrollbar_layer
    IF_SETSIZE(519, 0, 0, 1, comp(753, 7));  // bslay_boss_info:boss_info_wrapper
    IF_SETSIZE(10, 125, 1, 0, comp(753, 27));  // bslay_boss_info:boss_desc_wrapper
    IF_SETSIZE(16, 0, 1, 1, comp(753, 28));  // bslay_boss_info:boss_desc_build_layer
    IF_SETSIZE(0, 0, 1, 1, comp(753, 29));  // bslay_boss_info:boss_desc_text
    IF_SETHIDE(true, comp(753, 20));  // bslay_boss_info:wiki_button_wrapper
    IF_SETSIZE(16384, 25, 2, 0, comp(753, 15));  // bslay_boss_info:boss_combat_level_wrapper
    IF_SETSIZE(16384, 25, 2, 0, comp(753, 17));  // bslay_boss_info:group_size_layer
    IF_SETSIZE(16384, 25, 2, 0, comp(753, 19));  // bslay_boss_info:nearest_lodestone_layer
    CC_DELETEALL(comp(753, 27));  // bslay_boss_info:boss_desc_wrapper
    CC_DELETEALL(comp(753, 38));  // bslay_boss_info:boss_model_wrapper
    script11074();
    IF_SETSCROLLSIZE(0, 0, comp(753, 27));  // bslay_boss_info:boss_desc_wrapper
    IF_SETSCROLLPOS(0, 0, comp(753, 27));  // bslay_boss_info:boss_desc_wrapper
    IF_SETNPCMODEL(struct_getparam(varclient_4485, 1347), comp(753, 40));  // bslay_boss_info:boss_model
    IF_SETMODELANIM(BAS_GETANIM_READY(varclient_4484), comp(753, 40));  // bslay_boss_info:boss_model
    return;
}