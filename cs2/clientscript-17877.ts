//
function script17877(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): number {
    var int6 = -1;
    switch (int0) {
        case 0: {
            int6 = int1;
            break;
        }
        case 1: {
            int6 = int2;
            break;
        }
        case 2: {
            int6 = int3;
            break;
        }
        case 3: {
            int6 = int4;
            break;
        }
        case 4: {
            int6 = int5;
            break;
        }
        default: {
            script12478("Index out of range");
            break;
        }
    };
    return int6;
}