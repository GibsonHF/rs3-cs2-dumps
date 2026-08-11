//
function script9056(): void {
    IF_SETHIDE(true, comp(1851, 30));  // achievements_sub:cheevo_reward_popup_layer
    IF_SETTEXT("", comp(1851, 83));  // achievements_sub:info_description
    CC_DELETEALL(comp(1851, 84));  // achievements_sub:info_panel_scrollbar_layer
    if ((IF_FIND(comp(1851, 83)) == 1)) {  // achievements_sub:info_description
        CC_SETSIZE(10, 30, 1, 1);
        CC_SETSCROLLSIZE(0, 0);
        CC_SETSCROLLPOS(0, 0);
    };
    return;
}