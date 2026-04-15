//
function script18967(int0: dbrow): string {
    if ((int0 == -1 as dbrow)) {
        return "";
    };
    var string0 = dbrow_getfield(int0, 1175568, 0);
    if ((STRING_LENGTH(string0) == 0)) {
        if ((script18968(int0) != -1 as obj)) {
            string0 = OC_NAME(dbrow_getfield(int0, 1175600, 0));
        } else {
            string0 = "Memory";
        };
    };
    return string0;
}