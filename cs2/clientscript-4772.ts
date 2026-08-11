//
function script4772(int0: number): void {
    switch (int0) {
        case 1: {
            IF_SETHIDE(false, comp(1115, 33));  // clan_build_jobs:list_downgrade_tab
            IF_SETHIDE(true, comp(1115, 49));  // clan_build_jobs:list_upkeep_tab
            IF_SETHIDE(true, comp(1115, 50));  // clan_build_jobs:list_upgrade_tab
            IF_SETHIDE(false, comp(1115, 0));  // clan_build_jobs:downgrade_front_button
            IF_SETHIDE(true, comp(1115, 1));  // clan_build_jobs:upkeep_front_button
            IF_SETHIDE(true, comp(1115, 2));  // clan_build_jobs:upgrade_front_button
            IF_SETHIDE(true, comp(1115, 26));  // clan_build_jobs:list_downgrade_tab_active_layer
            IF_SETHIDE(false, comp(1115, 27));  // clan_build_jobs:list_upkeep_tab_active_layer
            IF_SETHIDE(false, comp(1115, 28));  // clan_build_jobs:list_upgrade_tab_active_layer
            break;
        }
        case 2: {
            IF_SETHIDE(true, comp(1115, 33));  // clan_build_jobs:list_downgrade_tab
            IF_SETHIDE(false, comp(1115, 49));  // clan_build_jobs:list_upkeep_tab
            IF_SETHIDE(true, comp(1115, 50));  // clan_build_jobs:list_upgrade_tab
            IF_SETHIDE(true, comp(1115, 0));  // clan_build_jobs:downgrade_front_button
            IF_SETHIDE(false, comp(1115, 1));  // clan_build_jobs:upkeep_front_button
            IF_SETHIDE(true, comp(1115, 2));  // clan_build_jobs:upgrade_front_button
            IF_SETHIDE(false, comp(1115, 26));  // clan_build_jobs:list_downgrade_tab_active_layer
            IF_SETHIDE(true, comp(1115, 27));  // clan_build_jobs:list_upkeep_tab_active_layer
            IF_SETHIDE(false, comp(1115, 28));  // clan_build_jobs:list_upgrade_tab_active_layer
            break;
        }
        case 3: {
            IF_SETHIDE(true, comp(1115, 33));  // clan_build_jobs:list_downgrade_tab
            IF_SETHIDE(true, comp(1115, 49));  // clan_build_jobs:list_upkeep_tab
            IF_SETHIDE(false, comp(1115, 50));  // clan_build_jobs:list_upgrade_tab
            IF_SETHIDE(true, comp(1115, 0));  // clan_build_jobs:downgrade_front_button
            IF_SETHIDE(true, comp(1115, 1));  // clan_build_jobs:upkeep_front_button
            IF_SETHIDE(false, comp(1115, 2));  // clan_build_jobs:upgrade_front_button
            IF_SETHIDE(false, comp(1115, 26));  // clan_build_jobs:list_downgrade_tab_active_layer
            IF_SETHIDE(false, comp(1115, 27));  // clan_build_jobs:list_upkeep_tab_active_layer
            IF_SETHIDE(true, comp(1115, 28));  // clan_build_jobs:list_upgrade_tab_active_layer
            break;
        }
    };
    script4775();
    return;
}