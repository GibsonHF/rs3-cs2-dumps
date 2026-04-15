//
function script5735(int0: int, int1: int, int2: unknown_int): void {
    if (((MODULO(CLIENTCLOCK(), 50) != 0) && (int2 == 0))) {
        return;
    };
    var int3 = ((int0 + int1) - DATE_RUNEDAY());
    var int4 = ((DATE_MINUTES_FROMRUNEDAY((DATE_RUNEDAY() + 1)) - DATE_MINUTES()) / 60);
    var int5 = MODULO((DATE_MINUTES_FROMRUNEDAY((DATE_RUNEDAY() + 1)) - DATE_MINUTES()), 60);
    var string0 = "days";
    var string1 = "hours";
    var string2 = "minutes";
    if ((int3 == 1)) {
        string0 = "day";
    };
    if ((int4 == 1)) {
        string1 = "hour";
    };
    if ((int5 == 1)) {
        string2 = "minute";
    };
    if ((CC_FIND(comp(1864, 5), 1) == 1)) {
        CC_SETTEXT(`${inttostring(int3, 10)} ${string0}  ${inttostring(int4, 10)} ${string1}  ${inttostring(int5, 10)} ${string2}`);
    };
    return;
}