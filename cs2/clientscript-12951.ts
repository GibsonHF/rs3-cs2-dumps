//
function script12951(int0: component, int1: unknown_int): void {
    var int2 = 0;
    switch (int1) {
        case 0: {
            int2 = 0;
            break;
        }
        case 4: {
            int2 = 57344;
            break;
        }
        case 1: {
            int2 = 49152;
            break;
        }
        case 5: {
            int2 = 40960;
            break;
        }
        case 2: {
            int2 = 32768;
            break;
        }
        case 6: {
            int2 = 24576;
            break;
        }
        case 3: {
            int2 = 16384;
            break;
        }
        case 7: {
            int2 = 8192;
            break;
        }
    };
    IF_SET2DANGLE(int2, int0);
    script13961(int0, 7248 as struct, false, 0);
    return;
}