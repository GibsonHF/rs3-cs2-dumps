//
function script18860(int0: int): string {
    stack(1163264);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int1 = stack();
    if ((int1 != -1)) {
        return dbrow_getfield(int1, 1163312, 0);
    };
    return "";
}