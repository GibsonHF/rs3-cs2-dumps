//
function script18431(int0: int): string {
    stack(1122304);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int1 = stack();
    var string0 = "";
    if ((int1 == -1)) {
        return "";
    };
    string0 = dbrow_getfield(int1, 1122352, 0);
    if ((STRING_LENGTH(string0) == 0)) {
        string0 = dbrow_getfield(int1, 1122336, 0);
    };
    string0 = `<sprite=21341>${string0}`;
    var string1 = "";
    var int2 = DB_GETFIELDCOUNT(int1, 1122368);
    var int3 = 0;
    while ((int3 < int2)) {
        string1 = dbrow_getfield(int1, 1122368, int3);
        if ((STRING_LENGTH(string1) > 0)) {
            string0 = `${string0}<br><sprite=21341>${string1}`;
        };
        int3 = (int3 + 1);
    };
    return string0;
}