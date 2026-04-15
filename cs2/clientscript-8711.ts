//
function script8711(int0: int, int1: int, int2: int, int3: int): int {
    var int4 = 10;
    switch (int1) {
        case 0: {
            return int0;
        }
        case 1: {
            return (((int3 / 2) - (int2 / 2)) + int0);
        }
        case 2: {
        }
        default: {
            switch (int0) {
                case 0: {
                    return 0;
                }
                case 2048: {
                    return ((int3 / 2) - (int2 / 2));
                }
                case 4095: {
                    return (int3 - int2);
                }
            };
            var int0 = (int0 * int4);
            var int2 = (int2 * int4);
            var int3 = (int3 * int4);
            int0 = INTERPOLATE(((0 - int3) / 2), (int3 / 2), (0 * int4), (4095 * int4), int0);
            int0 = ((int0 - (int2 / 2)) + (int3 / 2));
            int0 = MAX(0, MIN(int0, (int3 - int2)));
            return (int0 / int4);
        }
    };
    return ((int3 - int2) - int0);
}