//
function script14641(int0: dbrow, int1: int): string {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    [int2, int3, int4] = script14640(int0, int1);
    var string0 = script3382(-1, int2, int3, -1, 1, 1);
    if ((STRING_LENGTH(string0) > 0)) {
        return string0;
    };
    return "-";
}