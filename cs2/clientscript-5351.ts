//
function script5351(int0: number): [number, number] {
    var int1 = script12422(6, 10, int0);
    var int2 = (int1 / 60);
    if ((int2 > 0)) {
        int1 = MODULO(int1, 60);
        if (((int1 > 0) && (int1 > 0))) {
            return [int2, int1];
        };
        return [int2, 0];
    };
    return [0, int1];
}