//
function script20691(int0: number, int1: number): [number, string] {
    if ((int0 == -1)) {
        return [-1, ""];
    };
    var int2 = -1;
    var string0 = "";
    var string1 = "";
    [int2, string0, string1] = dbrow_getfield(int0, 1445936, int1);
    return [int2, string0];
}