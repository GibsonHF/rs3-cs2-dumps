//
function script12300(int0: int, int1: int, int2: int): [int, int, int] {
    switch (int0) {
        case 1: {
            return [4, int1, int2];
        }
        case 2: {
            if (((int1 == 1) && (int2 == 15))) {
                return [int0, 0, 22];
            };
            break;
        }
        case 3: {
            if (((int1 == 1) && (int2 == 31))) {
                return [int0, 0, 36];
            };
            break;
        }
    };
    return [int0, int1, int2];
}