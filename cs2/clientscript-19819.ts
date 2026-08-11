//
function script19819(int0: number): void {
    varclient_8281 = int0;
    switch (int0) {
        case 0: {
            script13972(45285393, -1, 28595, IF_GETTEXT(comp(691, 19)), 1);  // arch_relic_management:loadout_0_active_tab_text
            script13972(45285396, -1, 28595, IF_GETTEXT(comp(691, 22)), 0);  // arch_relic_management:loadout_1_active_tab_text
            script13972(45285399, -1, 28595, IF_GETTEXT(comp(691, 25)), 0);  // arch_relic_management:loadout_2_active_tab_text
            script13972(45285402, -1, 28595, IF_GETTEXT(comp(691, 27)), 0);  // arch_relic_management:loadout_3_active_tab_text
            break;
        }
        case 1: {
            script13972(45285393, -1, 28595, IF_GETTEXT(comp(691, 19)), 0);  // arch_relic_management:loadout_0_active_tab_text
            script13972(45285396, -1, 28595, IF_GETTEXT(comp(691, 22)), 1);  // arch_relic_management:loadout_1_active_tab_text
            script13972(45285399, -1, 28595, IF_GETTEXT(comp(691, 25)), 0);  // arch_relic_management:loadout_2_active_tab_text
            script13972(45285402, -1, 28595, IF_GETTEXT(comp(691, 27)), 0);  // arch_relic_management:loadout_3_active_tab_text
            break;
        }
        case 2: {
            script13972(45285393, -1, 28595, IF_GETTEXT(comp(691, 19)), 0);  // arch_relic_management:loadout_0_active_tab_text
            script13972(45285396, -1, 28595, IF_GETTEXT(comp(691, 22)), 0);  // arch_relic_management:loadout_1_active_tab_text
            script13972(45285399, -1, 28595, IF_GETTEXT(comp(691, 25)), 1);  // arch_relic_management:loadout_2_active_tab_text
            script13972(45285402, -1, 28595, IF_GETTEXT(comp(691, 27)), 0);  // arch_relic_management:loadout_3_active_tab_text
            break;
        }
        case 3: {
            script13972(45285393, -1, 28595, IF_GETTEXT(comp(691, 19)), 0);  // arch_relic_management:loadout_0_active_tab_text
            script13972(45285396, -1, 28595, IF_GETTEXT(comp(691, 22)), 0);  // arch_relic_management:loadout_1_active_tab_text
            script13972(45285399, -1, 28595, IF_GETTEXT(comp(691, 25)), 0);  // arch_relic_management:loadout_2_active_tab_text
            script13972(45285402, -1, 28595, IF_GETTEXT(comp(691, 27)), 1);  // arch_relic_management:loadout_3_active_tab_text
            break;
        }
    };
    switch (varbitplayer_57205) {
        case 0: {
            IF_SETHIDE(false, comp(691, 19));  // arch_relic_management:loadout_0_active_tab_text
            IF_SETHIDE(true, comp(691, 22));  // arch_relic_management:loadout_1_active_tab_text
            IF_SETHIDE(true, comp(691, 25));  // arch_relic_management:loadout_2_active_tab_text
            IF_SETHIDE(true, comp(691, 27));  // arch_relic_management:loadout_3_active_tab_text
            break;
        }
        case 1: {
            IF_SETHIDE(true, comp(691, 19));  // arch_relic_management:loadout_0_active_tab_text
            IF_SETHIDE(false, comp(691, 22));  // arch_relic_management:loadout_1_active_tab_text
            IF_SETHIDE(true, comp(691, 25));  // arch_relic_management:loadout_2_active_tab_text
            IF_SETHIDE(true, comp(691, 27));  // arch_relic_management:loadout_3_active_tab_text
            break;
        }
        case 2: {
            IF_SETHIDE(true, comp(691, 19));  // arch_relic_management:loadout_0_active_tab_text
            IF_SETHIDE(true, comp(691, 22));  // arch_relic_management:loadout_1_active_tab_text
            IF_SETHIDE(false, comp(691, 25));  // arch_relic_management:loadout_2_active_tab_text
            IF_SETHIDE(true, comp(691, 27));  // arch_relic_management:loadout_3_active_tab_text
            break;
        }
        case 3: {
            IF_SETHIDE(true, comp(691, 19));  // arch_relic_management:loadout_0_active_tab_text
            IF_SETHIDE(true, comp(691, 22));  // arch_relic_management:loadout_1_active_tab_text
            IF_SETHIDE(true, comp(691, 25));  // arch_relic_management:loadout_2_active_tab_text
            IF_SETHIDE(false, comp(691, 27));  // arch_relic_management:loadout_3_active_tab_text
            break;
        }
    };
    return;
}