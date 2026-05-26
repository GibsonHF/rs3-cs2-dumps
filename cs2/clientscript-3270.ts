//
function script3270(int0: number, int1: number): number {
    var int2 = 3;
    if ((((int0 + int2) - 1) < int1)) {
        return (int0 + int2);
    };
    if ((((int0 - int2) - 1) > int1)) {
        return (int0 - int2);
    };
    return int1;
}