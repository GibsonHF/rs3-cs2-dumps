//
function script11037(int0: int, int1: int): [int, int] {
    var int2 = 22;
    if ((script6431() == true)) {
        int2 = 44;
    };
    switch (int0) {
        case 1: {
            return [(int2 + int1), 17];
        }
        case 2: {
        }
        default: {
            return [0, 17];
        }
    };
    return [((int2 + int1) * 2), 17];
}