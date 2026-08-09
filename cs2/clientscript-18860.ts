//
function script18860(int0: number): string {
    stack(1163264);
    stack(int0);
    DB_FIND(0);
    var int1 = dbrow_findnext();
    if ((int1 != -1)) {
        return dbrow_getfield(int1, 1163312, 0);
    };
    return "";
}