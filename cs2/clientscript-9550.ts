//
function script9550(int0: unknown_int, int1: int, int2: int): int {
    switch (int0) {
        case 0: {
            return int1;
        }
        case 1: {
            return (int2 - int1);
        }
        case 2: {
            return SCALE(int1, 16384, int2);
        }
    };
    return int1;
}