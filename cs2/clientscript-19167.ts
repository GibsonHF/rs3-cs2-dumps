//
function script19167(int0: number): void {
    var int1 = comp(1288, 32);  // trh_academy_shared_overlay:entity_loot_holder_0
    var int2 = comp(1288, 28);  // trh_academy_shared_overlay:entity_loot_holder_1
    var int3 = comp(1288, 24);  // trh_academy_shared_overlay:entity_loot_holder_2
    var int4 = comp(1288, 16);  // trh_academy_shared_overlay:entity_holder
    var int5 = comp(1288, 10);  // trh_academy_shared_overlay:generic_interaction_button
    var int6 = comp(1288, 14);  // trh_academy_shared_overlay:interaction_icon_layer
    var int7 = comp(1288, 47);  // trh_academy_shared_overlay:character_holder
    var int8 = comp(1288, 36);  // trh_academy_shared_overlay:entity_progress_bar
    switch (int0) {
        case 32986: {
            IF_SETONVARTRANSMIT(callback(script19185, int0, 0, 10601, 1), int1);
            IF_SETONVARTRANSMIT(callback(script19185, int0, 1, 10601, 1), int2);
            IF_SETONVARTRANSMIT(callback(script19185, int0, 2, 10601, 1), int3);
            IF_SETONVARTRANSMIT(callback(script19168, int0, 10601, 1), int4);
            IF_SETONVARTRANSMIT(callback(script19190, int0, 10600, 1), int7);
            IF_SETONVARTRANSMIT(callback(script16761, 10600, 1), int8);
            break;
        }
        case 50263: {
            IF_SETONVARTRANSMIT(callback(script19185, int0, 0, 11860, 1), int1);
            IF_SETONVARTRANSMIT(callback(script19185, int0, 1, 11860, 1), int2);
            IF_SETONVARTRANSMIT(callback(script19185, int0, 2, 11860, 1), int3);
            IF_SETONVARTRANSMIT(callback(script19168, int0, 11860, 1), int4);
            IF_SETONVARTRANSMIT(callback(script19196, int0, 11860, 1), int5);
            IF_SETONVARTRANSMIT(callback(script19197, int0, 11860, 1), int6);
            IF_SETONVARTRANSMIT(callback(script19190, int0, 11859, 1), int7);
            IF_SETONVARTRANSMIT(callback(script19160, 11859, 1), int8);
            break;
        }
        case 2951: {
            IF_SETONVARTRANSMIT(callback(script19185, int0, 0, 12170, 1), int1);
            IF_SETONVARTRANSMIT(callback(script19185, int0, 1, 12170, 1), int2);
            IF_SETONVARTRANSMIT(callback(script19185, int0, 2, 12170, 1), int3);
            IF_SETONVARTRANSMIT(callback(script19168, int0, 12170, 1), int4);
            IF_SETONVARTRANSMIT(callback(script19196, int0, 12170, 1), int5);
            IF_SETONVARTRANSMIT(callback(script19197, int0, 12170, 1), int6);
            IF_SETONVARTRANSMIT(callback(script19190, int0, 12169, 1), int7);
            IF_SETONVARTRANSMIT(callback(script19871, 12169, 1), int8);
            break;
        }
        default: {
            script12478(`Missed plugin point for promo ID ${inttostring(struct_getparam(int0, 8202), 10)}`);
            break;
        }
    };
    return;
}