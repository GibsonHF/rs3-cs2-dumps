//
function script3836(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = 0;
    var int5 = -1;
    var int6 = 0;
    var int7 = 5;
    CC_DELETEALL(comp(1311, 531));  // mtxmgt:modular_pet_armour_build
    CC_DELETEALL(comp(1311, 532));  // mtxmgt:modular_pet_armour_control
    IF_SETHIDE(false, comp(1311, 557));  // mtxmgt:multi_appearance_buttons
    CC_DELETEALL(comp(1311, 558));  // mtxmgt:multi_appearance_build
    CC_DELETEALL(comp(1311, 559));  // mtxmgt:multi_appearance_control
    IF_SETHIDE(true, comp(1311, 541));  // mtxmgt:modular_pet_buttons_armour_sets
    IF_SETHIDE(true, comp(1311, 533));  // mtxmgt:modular_pet_slot_arrows
    CC_DELETEALL(comp(1311, 552));  // mtxmgt:modular_pet_set_build
    CC_DELETEALL(comp(1311, 553));  // mtxmgt:modular_pet_set_control
    varclient_6784 = 0;
    script13325(int0, int1, int3);
    if ((int1 > 0)) {
        script13630(int0, (int1 - 1), int2, int3);
    };
    return;
}