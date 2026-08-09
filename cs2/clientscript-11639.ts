//
function script11639(int0: number, int1: number, int2: number, int3: number, int4: number): [number, number] {
    var int2 = (int2 - 1);
    var int3 = (int3 - 1);
    switch (int4) {
        case 1: {
            return [int1, ((0 - int0) - int3)];
        }
        case 2: {
            return [((0 - int0) - int2), ((0 - int1) - int3)];
        }
        case 3: {
            break;
        }
        default: {
            return [int0, int1];
        }
    };
    return [((0 - int1) - int2), int0];
}