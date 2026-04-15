//
function script18430(int0: int): string {
    stack(1122304);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int1 = stack();
    if ((int1 != -1)) {
        return dbrow_getfield(int1, 1122336, 0);
    };
    return "";
}