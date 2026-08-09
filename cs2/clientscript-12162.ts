//
function script12162(int0: number): string {
    stack(20480);
    stack(int0);
    DB_FIND(0);
    var int1 = dbrow_findnext();
    if ((int1 == -1)) {
        return "";
    };
    return `Discover: ${dbrow_getfield(int1, 20496, 0)}`;
}