//
function script11037(int0: number, int1: number): [number, number] {
    var int2 = 22;
    if ((script6431() == 1)) {
        int2 = 44;
    };
    switch (int0) {
        case 1: {
            return [(int2 + int1), 17];
        }
        case 2: {
            break;
        }
        default: {
            return [0, 17];
        }
    };
    return [((int2 + int1) * 2), 17];
}