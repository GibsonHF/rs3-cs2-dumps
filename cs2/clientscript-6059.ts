//
function script6059(int0: number, int1: number): number {
    var int2 = -1;
    switch (int0) {
        case 1003: {
            int2 = 1;
            break;
        }
        case 1032: {
            int2 = 2;
            break;
        }
        case 1033: {
            int2 = 3;
            break;
        }
        case 1034: {
            int2 = 4;
            break;
        }
        case 1035: {
            int2 = 5;
            break;
        }
    };
    if (((int2 > 1) && (int1 == 1))) {
        int2 = (int2 - 1);
    };
    return int2;
}