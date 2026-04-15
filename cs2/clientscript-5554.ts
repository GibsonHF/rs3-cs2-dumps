//
function script5554(int0: obj): string {
    stack(348240);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int1 = stack();
    var string0 = "This familiar has no special ability.";
    if ((int1 == -1)) {
        return string0;
    };
    var int2 = dbrow_getfield(int1, 348256, 0);
    if ((int2 != -1 as obj)) {
        string0 = OC_NAME(int2);
        string0 = strconcat(string0, "<br>");
        string0 = strconcat(string0, "Familiar spell points");
        string0 = strconcat(string0, `: ${inttostring(script8251(int2), 10)}`);
        string0 = strconcat(string0, `<br>${dbrow_getfield(int1, 348272, 0)}`);
        string0 = strconcat(string0, `<br>${script14945(dbrow_getfield(int1, 348368, 0), 1)} cooldown.</col>`);
    };
    return string0;
}