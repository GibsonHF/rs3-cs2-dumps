//
function script12161(int0: number): string {
    var int1 = db_find_with_count(16384, int0, 0);
    if ((int1 == 0)) {
        return "";
    };
    var int2 = dbrow_findnext();
    return dbrow_getfield(int2, 16432, 0);
}