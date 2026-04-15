//
function script12162(int0: int): string {
    stack(20480);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int1 = stack();
    if ((int1 == -1)) {
        return "";
    };
    return `Discover: ${dbrow_getfield(int1, 20496, 0)}`;
}