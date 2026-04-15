//
function script19118(int0: dbrow, int1: unknown_int): string {
    if ((int0 == -1 as dbrow)) {
        return "";
    };
    if ((DB_GETFIELDCOUNT(int0, 667904) != 0)) {
        return script18207(int0);
    };
    var string0 = "";
    if ((DB_GETFIELDCOUNT(int0, 667696) > 0)) {
        string0 = dbrow_getfield(int0, 667696, 0);
    } else {
        string0 = dbrow_getfield(int0, 667680, 0);
    };
    if ((strcmp(string0, "") != 0)) {
        if ((int1 == 1)) {
            switch (dbrow_getfield(int0, 667952, 0)) {
                case 0: {
                    string0 = `${string0} (Male)`;
                    break;
                }
                case 1: {
                    string0 = `${string0} (Female)`;
                    break;
                }
            };
        };
        if ((dbrow_getfield(int0, 667728, 0) == 3)) {
            string0 = strconcat(string0, " Title");
        };
    };
    return string0;
}