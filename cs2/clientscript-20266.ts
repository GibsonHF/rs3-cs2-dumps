//
function script20266(int0: number, int1: number, int2: number, int3: number): [number, number] {
    var int4 = dbrow_getfield(int0, 1347616, 0);
    var string0 = dbrow_getfield(int0, 1347600, 0);
    if ((int4 == -1)) {
        return script19615(0, int1, int2, int3, string0);
    };
    var int5 = MAX(50, script20478(string0, (int3 - 60), 2100, 0));
    stack(94568467);
    stack(int1);
    var int1 = (int1 + 1);
    script17949(0, (int2 + MAX(0, ((int5 - 50) / 2))), 0, 0, 50, 50, 0, 0, int4, 1);
    stack(94568467);
    stack(int1);
    int1 = (int1 + 1);
    script2995(0, int2, 2, 0, 60, int5, 1, 0, 2100, string0);
    CC_SETTEXTALIGN(0, 1, 0);
    return [int1, ((int2 + int5) + 4)];
}