//
function script15119(int0: unknown_int, int1: dbrow): int {
    if ((DB_GETROWTABLE(int1) != 107)) {
        script12478(`Invalid event passed into get_npc_level_cap, Defaulting to ${inttostring(30, 10)}`);
        return 30;
    };
    var int2 = dbrow_getfield(int1, 438320, 0);
    if ((int2 <= 0)) {
        script12478(`Crafter cap, is an invalid number. Defaulting to ${inttostring(30, 10)}`);
        return 30;
    };
    return int2;
}