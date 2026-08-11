//
function script14811(int0: number): void {
    var int1 = -1 as graphic;
    var int2 = 0;
    switch (int0) {
        case 0: {
            int1 = 10536 as graphic;
            int2 = IF_GETX(comp(685, 113));  // arch_journal:tab_general_layer
            break;
        }
        case 1: {
            int1 = 10524 as graphic;
            int2 = IF_GETX(comp(685, 114));  // arch_journal:tab_armadylean_layer
            break;
        }
        case 2: {
            int1 = 10528 as graphic;
            int2 = IF_GETX(comp(685, 115));  // arch_journal:tab_bandosian_layer
            break;
        }
        case 3: {
            int1 = 10532 as graphic;
            int2 = IF_GETX(comp(685, 116));  // arch_journal:tab_dragonkin_layer
            break;
        }
        case 4: {
            int1 = 36045 as graphic;
            int2 = IF_GETX(comp(685, 117));  // arch_journal:tab_guthixian_layer
            break;
        }
        case 5: {
            int1 = 10540 as graphic;
            int2 = IF_GETX(comp(685, 118));  // arch_journal:tab_saradominist_layer
            break;
        }
        case 6: {
            int1 = 10544 as graphic;
            int2 = IF_GETX(comp(685, 119));  // arch_journal:tab_zamorakian_layer
            break;
        }
        case 7: {
            int1 = 10548 as graphic;
            int2 = IF_GETX(comp(685, 120));  // arch_journal:tab_zarosian_layer
            break;
        }
    };
    if ((int1 != -1 as graphic)) {
        IF_SETGRAPHIC(int1, comp(685, 128));  // arch_journal:tab_active_context_graphic
        IF_SETPOSITION(int2, 0, 0, 0, comp(685, 128));  // arch_journal:tab_active_context_graphic
        script14824(int0);
        script14841(int0);
    };
    return;
}