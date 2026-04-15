//
function script19131(int0: int): string {
    stack(1200128);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int1 = stack();
    if ((int1 == -1)) {
        script12478(`Unable to locate runecrafting_altars dbrow with id = ${inttostring(int0, 10)}`);
        return "Unknown";
    };
    return dbrow_getfield(int1, 1200144, 0);
}