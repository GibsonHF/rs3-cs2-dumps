//
function script14679(int0: number): [number, number] {
    var int1 = dbrow_getfield(int0, 372736, 0);
    var int2 = script14662();
    var int3 = 0;
    var int4 = 0;
    int3 = (int3 + 1);
    while ((int3 <= 1)) {
        int4 = 0;
        int4 = (int4 + 1);
        while ((int4 <= int2)) {
            if ((script14656(int3, int4) == int1)) {
                return [int3, int4];
            };
        };
    };
    return [-1, -1];
}