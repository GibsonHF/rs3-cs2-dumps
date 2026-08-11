//
function script14807(int0: number): void {
    IF_SETHIDE(true, comp(685, 15));  // arch_journal:overview_layer
    IF_SETHIDE(true, comp(685, 16));  // arch_journal:mysteries_layer
    IF_SETHIDE(true, comp(685, 21));  // arch_journal:restoration_layer
    IF_SETHIDE(true, comp(685, 22));  // arch_journal:research_layer
    var int1 = 0;
    var int2 = -1 as graphic;
    var int3 = true;
    switch (int0) {
        case 0: {
            IF_SETHIDE(false, comp(685, 15));  // arch_journal:overview_layer
            int2 = 10513 as graphic;
            int1 = IF_GETX(comp(685, 6));  // arch_journal:tab_overview_layer
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(685, 21));  // arch_journal:restoration_layer
            int2 = 10519 as graphic;
            int1 = IF_GETX(comp(685, 7));  // arch_journal:tab_restoration_layer
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(685, 16));  // arch_journal:mysteries_layer
            int2 = 10510 as graphic;
            int1 = IF_GETX(comp(685, 8));  // arch_journal:tab_mysteries_layer
            int3 = false;
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(685, 22));  // arch_journal:research_layer
            int2 = 10516 as graphic;
            int1 = IF_GETX(comp(685, 9));  // arch_journal:tab_research_layer
            int3 = false;
            break;
        }
    };
    IF_SETGRAPHIC(int2, comp(685, 122));  // arch_journal:tab_active_bookmark_graphic
    IF_SETPOSITION(int1, 0, 0, 0, comp(685, 122));  // arch_journal:tab_active_bookmark_graphic
    IF_SETHIDE(int3, comp(685, 112));  // arch_journal:tab_context_layer
    IF_SETHIDE(int3, comp(685, 13));  // arch_journal:tab_active_context_layer
    return;
}