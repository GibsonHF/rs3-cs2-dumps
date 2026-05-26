//
function script9550(int0: number, int1: number, int2: number): number {
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