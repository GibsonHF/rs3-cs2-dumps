//
function script14648(int0: dbrow, int1: int, int2: int): string {
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    [int3, int4, int5] = script14647(int0, int1, int2);
    var string0 = script3382(-1, int3, int4, -1, 1, 1);
    if ((STRING_LENGTH(string0) > 0)) {
        return string0;
    };
    return "-";
}