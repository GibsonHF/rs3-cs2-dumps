//
function script8246(int0: number, int1: number, int2: number): number {
    var int3 = script11803();
    if ((int1 == 1)) {
        if ((++int0 > int3)) {
            if ((int2 == 1)) {
                return 1;
            };
            return -1;
        };
    } else if ((--int0 <= 0)) {
        if ((int2 == 0)) {
            return -1;
        };
        return int3;
    };
    return int0;
}