//
function script9049(int0: int): void {
    if ((int0 == DATE_RUNEDAY())) {
        return;
    };
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int1, int2, int3] = DATE_RUNEDAY_TODATE(DATE_RUNEDAY());
    MES_TYPED(99, 0, `CLIENT date is currently: Runeday ${inttostring(DATE_RUNEDAY(), 10)}, ${inttostring(int1, 10)}-${enum_getvalue(0, 36, 10036 as cs2enum, int2)}-${inttostring(int3, 10)}`);
    return;
}