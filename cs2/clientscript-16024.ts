//
function script16024(int0: int): int {
    var int1 = script16023(int0);
    var int2 = DATE_RUNEDAY();
    if ((int1 != -1 as dbrow)) {
        int2 = DATE_RUNEDAY_FROMDATE(dbrow_getfield(int1, 315456, 0));
    } else {
        script12478(`Event information cannot be found from provided event ID: ${inttostring(int0, 10)}.`);
    };
    return int2;
}