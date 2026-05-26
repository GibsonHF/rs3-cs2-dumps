//
function script17386(int0: number, int1: number, int2: number): [number, number] {
    if ((script17378(int0) == 1)) {
        if ((script17378(int1) == 1)) {
            if ((script17378(int2) == 1)) {
                var int1 = -1;
            } else {
                int1 = int2;
            };
        } else if (((int1 == -1) && (script17378(int2) == 0))) {
            int1 = int2;
        };
    } else if (((int1 == -1) && (script17378(int2) == 0))) {
        int1 = int2;
    };
    return [int0, int1];
}