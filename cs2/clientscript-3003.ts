//
function script3003(int0: number): void {
    var int1 = comp(1552, 8);  // elfcity_hefin_serenity_side:pose1_button_active_layer
    var int2 = comp(1552, 17);  // elfcity_hefin_serenity_side:pose2_button_active_layer
    var int3 = comp(1552, 35);  // elfcity_hefin_serenity_side:pose3_button_active_layer
    var int4 = comp(1552, 26);  // elfcity_hefin_serenity_side:pose4_button_active_layer
    var int5 = script10405(17);
    var int6 = comp(-1, 65535);
    if ((int5 != -1)) {
        int6 = struct_getparam(int5, 3505);
    };
    if (((int6 != comp(-1, 65535)) && (IF_HASSUBOVERLAY(int6, 1669 as overlayinterface) == 1))) {
        int1 = comp(1669, 10);  // seren_purification_side:pose1_button_active_layer
        int2 = comp(1669, 19);  // seren_purification_side:pose2_button_active_layer
        int3 = comp(1669, 28);  // seren_purification_side:pose3_button_active_layer
        int4 = comp(1669, 37);  // seren_purification_side:pose4_button_active_layer
    };
    if ((int0 == 1)) {
        script8844(1, 16, 8, int1, -1);
        script8844(1, 17, 8, int2, -1);
        script8844(1, 18, 8, int3, -1);
        script8844(1, 19, 8, int4, -1);
    } else {
        IF_SETOPKEY(1, 0, 0, int1);
        IF_SETOPKEY(1, 0, 0, int2);
        IF_SETOPKEY(1, 0, 0, int3);
        IF_SETOPKEY(1, 0, 0, int4);
    };
    return;
}