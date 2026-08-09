//
function script16600(): number {
    var int0 = script16596();
    if ((enum_hasoutput(0, 11249 as cs2enum, int0) == 0)) {
        script12478(`Unexpected modifier id: ${inttostring(int0, 10)}, returning base`);
        int0 = 0;
    };
    stack(749568);
    stack(int0);
    DB_FIND(0);
    var int1 = dbrow_findnext();
    if ((int1 == -1)) {
        script12478(`Unable to find droptable for modifier ${inttostring(int0, 10)}`);
        return 6127;
    };
    return dbrow_getfield(int1, 749680, 0);
}