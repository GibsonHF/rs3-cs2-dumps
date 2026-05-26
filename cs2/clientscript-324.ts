//[clientscript,ntk_timer]
function script324(int0: number, int1: number, int2: number): void {
    var int3 = MIN(varbitplayer_5126, 500);
    IF_SETSIZE(0, SCALE((500 - int3), 500, 16384), 1, 2, int0);
    var int4 = (164 + SCALE(int3, 500, 91));
    var int5 = (164 - SCALE(int3, 500, 164));
    var int6 = (41 - SCALE(int3, 500, 41));
    var int7 = script693(int4, int5, int6);
    IF_SETCOLOUR(int7, int0);
    IF_SETCOLOUR(int7, int1);
    switch (SCALE((int3 + 5), 500, 25)) {
        case 0: {
            IF_SETMODEL(16353, int2);
            break;
        }
        case 1: {
            IF_SETMODEL(16354, int2);
            break;
        }
        case 2: {
            IF_SETMODEL(16355, int2);
            break;
        }
        case 3: {
            IF_SETMODEL(16356, int2);
            break;
        }
        case 4: {
            IF_SETMODEL(16357, int2);
            break;
        }
        case 5: {
            IF_SETMODEL(16358, int2);
            break;
        }
        case 6: {
            IF_SETMODEL(16359, int2);
            break;
        }
        case 7: {
            IF_SETMODEL(16360, int2);
            break;
        }
        case 8: {
            IF_SETMODEL(16361, int2);
            break;
        }
        case 9: {
            IF_SETMODEL(16362, int2);
            break;
        }
        case 10: {
            IF_SETMODEL(16363, int2);
            break;
        }
        case 11: {
            IF_SETMODEL(16364, int2);
            break;
        }
        case 12: {
            IF_SETMODEL(16365, int2);
            break;
        }
        case 13: {
            IF_SETMODEL(16366, int2);
            break;
        }
        case 14: {
            IF_SETMODEL(16367, int2);
            break;
        }
        case 15: {
            IF_SETMODEL(16368, int2);
            break;
        }
        case 16: {
            IF_SETMODEL(16369, int2);
            break;
        }
        case 17: {
            IF_SETMODEL(16370, int2);
            break;
        }
        case 18: {
            IF_SETMODEL(16371, int2);
            break;
        }
        case 19: {
            IF_SETMODEL(16372, int2);
            break;
        }
        case 20: {
            IF_SETMODEL(16373, int2);
            break;
        }
        case 21: {
            IF_SETMODEL(16374, int2);
            break;
        }
        case 22: {
            IF_SETMODEL(16375, int2);
            break;
        }
        case 23: {
            IF_SETMODEL(16376, int2);
            break;
        }
        case 24: {
            IF_SETMODEL(16377, int2);
            break;
        }
        default: {
            IF_SETMODEL(16378, int2);
            break;
        }
    };
    return;
}