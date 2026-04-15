//
function script18200(int0: dbrow): string {
    var string0 = "";
    var int1 = -1 as obj;
    if ((int0 != -1 as dbrow)) {
        if ((DB_GETFIELDCOUNT(int0, 667920) > 0)) {
            int1 = script15764(int0);
            if ((int1 != -1 as obj)) {
                return OC_NAME(int1);
            };
            return "";
        };
        if ((DB_GETFIELDCOUNT(int0, 667904) > 0)) {
            string0 = script18207(int0);
        };
        if ((STRING_LENGTH(string0) == 0)) {
            if ((DB_GETFIELDCOUNT(int0, 667696) > 0)) {
                string0 = dbrow_getfield(int0, 667696, 0);
            } else {
                string0 = dbrow_getfield(int0, 667680, 0);
            };
        };
    };
    return string0;
}