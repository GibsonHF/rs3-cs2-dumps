//
function script3507(int0: int): string {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int1, int2, int3] = DATE_RUNEDAY_TODATE(int0);
    var string0 = enum_getvalue(0, 36, 10037 as cs2enum, int2);
    return `${inttostring(int1, 10)} ${string0} ${inttostring(int3, 10)}`;
}