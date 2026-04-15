//
function script19236(int0: int): int {
    stack(1208320);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int1 = stack();
    var int2 = -1;
    if ((int1 != -1)) {
        int2 = dbrow_getfield(int1, 1208352, 0);
        if ((int2 != -1 as cs2enum)) {
            return enum_getvalue(0, 0, int2, script15113());
        };
    };
    script12478(`Couldn't get an active boss for Halloween gauntlet section ${inttostring(int0, 10)} because either the dbrow for this section couldn't be found or the dbrow had no schedule attached.`);
    return 0;
}