//
function script19167(int0: struct): void {
    var int1 = 84410400;
    var int2 = 84410396;
    var int3 = 84410392;
    var int4 = 84410384;
    var int5 = 84410378;
    var int6 = 84410382;
    var int7 = 84410415;
    var int8 = 84410404;
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