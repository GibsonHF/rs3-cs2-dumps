//
function script3188(int0: number): string {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = 0;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    if ((STRING_LENGTH(dbrow_getfield(script3602(int0), 303120, 0)) > 0)) {
        return dbrow_getfield(script3602(int0), 303120, 0);
    };
    [int1, int2, int3, int4, int6, int7, int8, string0] = dbrow_getfield(script3602(int0), 303344, 0);
    return string0;
}