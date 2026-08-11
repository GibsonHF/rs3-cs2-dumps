//
function script11089(int0: number): void {
    var int1 = 0;
    int1 = SCALE(IF_GETHEIGHT(comp(1593, 9)), 40, int0);  // sliske2_vault_door:sliske2_vault_door_light
    IF_SETSIZE(IF_GETWIDTH(comp(1593, 9) /*sliske2_vault_door:sliske2_vault_door_light*/), int1, 0, 0, comp(1593, 10) /*sliske2_vault_door:sliske2_vault_door_light_fill*/);
    int1 = SCALE(IF_GETHEIGHT(comp(1593, 11)), 40, MAX((40 - int0), 0));  // sliske2_vault_door:sliske2_vault_door_shadow
    IF_SETSIZE(IF_GETWIDTH(comp(1593, 11) /*sliske2_vault_door:sliske2_vault_door_shadow*/), int1, 0, 0, comp(1593, 12) /*sliske2_vault_door:sliske2_vault_door_shadow_fill*/);
    return;
}