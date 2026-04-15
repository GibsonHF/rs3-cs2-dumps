//
function script13044(int0: dbrow): string {
    if ((int0 == -1 as dbrow)) {
        return "";
    };
    var string0 = dbrow_getfield(int0, 331792, 0);
    if ((STRING_LENGTH(string0) == 0)) {
        if ((script18962(int0) != -1 as obj)) {
            string0 = OC_NAME(dbrow_getfield(int0, 331824, 0));
        } else {
            string0 = "Book";
        };
    };
    return string0;
}