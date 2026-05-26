//
function script5845(int0: number, int1: number, int2: number): [number, number] {
    if ((int0 == 0)) {
        return [3, 0];
    };
    var int3 = script2072();
    if ((int0 > 0)) {
        var int0 = MIN(int0, (int3 - int1));
        if ((int0 == 0)) {
            return [1, 0];
        };
    };
    var int4 = script5844(int2);
    if ((int0 < 0)) {
        int0 = MAX(int0, script12626(int4));
        if ((int4 == 0)) {
            return [2, 0];
        };
    };
    return [0, int0];
}