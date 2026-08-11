//
function script8095(int0: number): void {
    IF_SETHIDE(true, comp(1117, 6));  // clan_stronghold_skill_plot_overlay:selection_box_woodcutting
    IF_SETHIDE(true, comp(1117, 7));  // clan_stronghold_skill_plot_overlay:selection_box_mining
    IF_SETHIDE(true, comp(1117, 8));  // clan_stronghold_skill_plot_overlay:selection_box_firemaking
    IF_SETHIDE(true, comp(1117, 9));  // clan_stronghold_skill_plot_overlay:selection_box_smithing
    IF_SETHIDE(true, comp(1117, 10));  // clan_stronghold_skill_plot_overlay:selection_box_crafting
    IF_SETHIDE(true, comp(1117, 11));  // clan_stronghold_skill_plot_overlay:selection_box_summoning
    IF_SETHIDE(true, comp(1117, 14));  // clan_stronghold_skill_plot_overlay:selection_box_cooking
    switch (int0) {
        case 1: {
            IF_SETHIDE(false, comp(1117, 6));  // clan_stronghold_skill_plot_overlay:selection_box_woodcutting
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1117, 7));  // clan_stronghold_skill_plot_overlay:selection_box_mining
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1117, 8));  // clan_stronghold_skill_plot_overlay:selection_box_firemaking
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(1117, 9));  // clan_stronghold_skill_plot_overlay:selection_box_smithing
            break;
        }
        case 5: {
            IF_SETHIDE(false, comp(1117, 10));  // clan_stronghold_skill_plot_overlay:selection_box_crafting
            break;
        }
        case 7: {
            IF_SETHIDE(false, comp(1117, 11));  // clan_stronghold_skill_plot_overlay:selection_box_summoning
            break;
        }
        case 6: {
            IF_SETHIDE(false, comp(1117, 14));  // clan_stronghold_skill_plot_overlay:selection_box_cooking
            break;
        }
    };
    script8391(17, 0);
    return;
}