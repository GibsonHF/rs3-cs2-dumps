//
function script18073(int0: dbrow): string {
    var int1 = dbrow_getfield(int0, 1019969, 0);
    if ((int1 == -1 as dbrow)) {
        return "";
    };
    var string0 = "";
    if ((DB_GETFIELDCOUNT(int1, 1024000) > 0)) {
        string0 = `+${inttostring(dbrow_getfield(int0, 1019970, 0), 10)}% mission progress whilst training <col=2EF8FF>${dbrow_getfield(int1, 1024000, 0)}</col>`;
    };
    return string0;
}