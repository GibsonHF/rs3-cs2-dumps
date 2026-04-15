//
function script14329(int0: unknown_int, int1: component, int2: component): void {
    var int3 = 0;
    var int4 = -1 as obj;
    switch (int2) {
        case 92274702: {
            script14331(varbitplayer_18339, 19805 as obj, int1, int2);
            IF_SETONVARTRANSMIT(callback(script14330, int1, int2, 3594, 1), int0);
            break;
        }
        case 92274706: {
            int3 = varbitplayer_18340;
            if (((int3 > 1) && (varbitplayer_18338 >= 1000))) {
                int4 = 28084 as obj;
                int3 = 1;
            } else {
                int4 = 19808 as obj;
            };
            script14331(int3, int4, int1, int2);
            IF_SETONVARTRANSMIT(callback(script14330, int1, int2, 1199, 3594, 2), int0);
            break;
        }
        case 92274715: {
            script14331(varbitplayer_18341, 19809 as obj, int1, int2);
            IF_SETONVARTRANSMIT(callback(script14330, int1, int2, 3594, 1), int0);
            break;
        }
        case 92274717: {
            script14331(varbitplayer_18342, 19819 as obj, int1, int2);
            IF_SETONVARTRANSMIT(callback(script14330, int1, int2, 3594, 1), int0);
            break;
        }
        case 92274719: {
            script14331(varbitplayer_18343, 19814 as obj, int1, int2);
            IF_SETONVARTRANSMIT(callback(script14330, int1, int2, 3594, 1), int0);
            break;
        }
        case 92274721: {
            script14331(varbitplayer_18344, 19824 as obj, int1, int2);
            IF_SETONVARTRANSMIT(callback(script14330, int1, int2, 1200, 1), int0);
            break;
        }
        case 92274723: {
            script14331(varbitplayer_18345, 28085 as obj, int1, int2);
            IF_SETONVARTRANSMIT(callback(script14330, int1, int2, 1199, 1), int0);
            break;
        }
    };
    return;
}