//
function script18430(int0: number): string {
    stack(1122304);
    stack(int0);
    DB_FIND(0);
    var int1 = dbrow_findnext();
    if ((int1 != -1)) {
        return dbrow_getfield(int1, 1122336, 0);
    };
    return "";
}