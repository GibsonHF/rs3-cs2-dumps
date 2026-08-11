//
function script15779(): void {
    IF_SETONRESIZE(callback(script15779), comp(685, 15));  // arch_journal:overview_layer
    var int0 = IF_GETHEIGHT(comp(685, 0));  // arch_journal:mainmodal_window
    var int1 = 25;
    var int2 = 110;
    var int3 = 292;
    var int4 = 15;
    if ((int0 <= 550)) {
        int1 = 25;
        int2 = 85;
        int3 = 262;
        int4 = 0;
    };
    IF_SETSIZE(0, int1, 1, 0, comp(685, 27));  // arch_journal:overview_title_text
    IF_SETPOSITION(0, int1, 1, 0, comp(685, 28));  // arch_journal:skill_layer
    IF_SETSIZE(0, int2, 1, 0, comp(685, 28));  // arch_journal:skill_layer
    IF_SETPOSITION(0, (int1 + int2), 1, 0, comp(685, 29));  // arch_journal:mastery_layer
    IF_SETSIZE(0, int1, 1, 0, comp(685, 52));  // arch_journal:overview_relic_title_text
    IF_SETSIZE(0, int3, 1, 0, comp(685, 51));  // arch_journal:overview_relic_layer
    IF_SETPOSITION(0, int4, 1, 2, comp(685, 55));  // arch_journal:overview_research_layer
    return;
}