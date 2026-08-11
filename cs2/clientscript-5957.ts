//
function script5957(): void {
    if ((IF_GETGRAPHIC(comp(1260, 87)) == 5917 as graphic)) {  // clan_stronghold_main_resources:lock_on_target_checkbox
        IF_SETGRAPHIC(5919 as graphic, comp(1260, 87));  // clan_stronghold_main_resources:lock_on_target_checkbox
    } else if ((IF_GETGRAPHIC(comp(1260, 87)) == 5919 as graphic)) {  // clan_stronghold_main_resources:lock_on_target_checkbox
        IF_SETGRAPHIC(5917 as graphic, comp(1260, 87));  // clan_stronghold_main_resources:lock_on_target_checkbox
        IF_SETGRAPHIC(5919 as graphic, comp(1260, 89));  // clan_stronghold_main_resources:manual_lock_checkbox
    };
    return;
}