//
function script14890(): void {
    if ((varplayer_9290 != 0)) {
        return;
    };
    script10458(45416476, 45416528, -1, 45416530, -1, -1, -1, 0, 367);
    if ((IF_FIND(comp(693, 80)) == 1)) {  // arch_research_management:panel_window
        if ((cc_getparam(4520) <= 0)) {
            script13959(45416542, 28692, 0);
            IF_SETHIDE(true, comp(693, 30));  // arch_research_management:panel_background_layer
        } else {
            script13959(45416542, 28691, 0);
            IF_SETHIDE(false, comp(693, 30));  // arch_research_management:panel_background_layer
        };
    };
    return;
}