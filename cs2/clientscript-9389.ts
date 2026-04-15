//
function script9389(int0: component, int1: int, int2: int, int3: achievement): void {
    var int4 = -1 as stat;
    switch (int1) {
        case 5: {
            int4 = enum_getvalue(0, 17, 681 as cs2enum, int2);
            CC_SETONSTATTRANSMIT(callback(script9390, int0, CC_GETID(), int1, int2, int3, int4, 1));
            break;
        }
        case 3: {
            CC_SETONVARTRANSMIT(callback(script9390, int0, CC_GETID(), int1, int2, int3, 8731, 7124, 2));
            break;
        }
        case 4: {
            CC_SETONVARTRANSMIT(callback(script9390, int0, CC_GETID(), int1, int2, int3, 3240, 3241, 3242, 3243, 3244, 4767, 6));
            break;
        }
        case 7: {
            CC_SETONVARTRANSMIT(callback(script9390, int0, CC_GETID(), int1, int2, int3, 183, 8398, 190, 8398, 4));
            break;
        }
        case 8: {
            CC_SETONVARTRANSMIT(callback(script9390, int0, CC_GETID(), int1, int2, int3, 4519, 4519, 2));
            break;
        }
        case 9: {
            CC_SETONVARTRANSMIT(callback(script9390, int0, CC_GETID(), int1, int2, int3, 9083, 9084, 2));
            break;
        }
        case 10: {
            CC_SETONVARTRANSMIT(callback(script9390, int0, CC_GETID(), int1, int2, int3, 11362, 11363, 11364, 11365, 11366, 11367, 11368, 11369, 11370, 11371, 11372, 11373, 11374, 11375, 11376, 11377, 11378, 11379, 11380, 11381, 11382, 11383, 11384, 11385, 11386, 11387, 11388, 11389, 11390, 11391, 30));
            break;
        }
    };
    return;
}