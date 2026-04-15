//
function script18072(int0: dbrow): [string, string] {
    var int1 = dbrow_getfield(int0, 1019936, 0);
    var string0 = "";
    if ((DB_GETFIELDCOUNT(int1, 1024000) > 0)) {
        string0 = dbrow_getfield(int1, 1024000, 0);
    } else if ((DB_GETFIELDCOUNT(int1, 1024048) > 0)) {
        string0 = "Get # Hero points via %";
        string0 = script2332(string0, "%", enum_getvalue(17, 36, 680 as cs2enum, dbrow_getfield(int1, 1024048, 0)));
    };
    string0 = script2332(string0, "#", inttostring(dbrow_getfield(int0, 1019984, 0), 10));
    var string1 = "";
    if ((DB_GETFIELDCOUNT(int1, 1024016) > 0)) {
        string1 = dbrow_getfield(int1, 1024016, 0);
    } else {
        script17927();
    };
    return [string0, string1];
}