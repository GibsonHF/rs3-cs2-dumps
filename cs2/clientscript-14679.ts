//
function script14679(int0: dbrow): [int, int] {
    var int1 = dbrow_getfield(int0, 372736, 0);
    var int2 = script14662();
    var int3 = 0;
    var int4 = 0;
    while ((++int3 <= 1)) {
        int4 = 0;
        while ((++int4 <= int2)) {
            if ((script14656(int3, int4) == int1)) {
                return [int3, int4];
            };
        };
    };
    return [-1, -1];
}