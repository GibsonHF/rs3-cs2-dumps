//
function script5521(int0: dbrow): string {
    var string0 = "";
    var int1 = dbrow_getfield(int0, 348240, 0);
    if ((OC_MEMBERS(int1) == 1)) {
        string0 = strconcat(string0, `Familiar: <col=F8D56B>${OC_NAME(int1)}</col>`);
    } else {
        string0 = strconcat(string0, `Familiar: <col=B8D1D1>${OC_NAME(int1)}</col>`);
    };
    string0 = strconcat(string0, "<br>");
    string0 = strconcat(string0, "Familiar spell points");
    string0 = strconcat(string0, `: ${inttostring(script8251(dbrow_getfield(int0, 348256, 0)), 10)}`);
    string0 = strconcat(string0, `<br>${dbrow_getfield(int0, 348272, 0)}`);
    string0 = strconcat(string0, `<br>${script14945(dbrow_getfield(int0, 348368, 0), 1)} cooldown.</col>`);
    return string0;
}