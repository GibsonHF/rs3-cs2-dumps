//
function script14973(int0: dbrow): string {
    if ((int0 == -1 as dbrow)) {
        return "";
    };
    var int1 = dbrow_getfield(int0, 364640, 0);
    if ((int1 != -1 as obj)) {
        return OC_NAME(int1);
    };
    return "";
}