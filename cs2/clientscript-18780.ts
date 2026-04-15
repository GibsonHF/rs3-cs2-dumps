//
function script18780(int0: dbrow, int1: int): dbrow {
    var int2 = DB_GETFIELDCOUNT(int0, 1077344);
    if (((int2 == 0) || (int1 > int2))) {
        script12478(`Trying to get an out of bounds overhead emote variant: ${inttostring(int1, 10)}.`);
        return int0;
    };
    var int3 = dbrow_getfield(int0, 1077344, 0);
    return enum_getvalue(0, 74, int3, int1);
}