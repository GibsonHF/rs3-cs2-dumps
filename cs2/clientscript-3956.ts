//
function script3956(int0: dbrow): string {
    var string0 = "";
    string0 = strconcat(string0, `Summoning level: ${inttostring(dbrow_getfield(int0, 348176, 0), 10)}`);
    string0 = strconcat(string0, `<br>Duration: ${inttostring(dbrow_getfield(int0, 348192, 0), 10)} minutes`);
    string0 = strconcat(string0, `<br>${dbrow_getfield(int0, 348208, 0)}`);
    var int1 = dbrow_getfield(int0, 348256, 0);
    if ((int1 != -1 as obj)) {
        if ((OC_MEMBERS(int1) == 1)) {
            string0 = strconcat(string0, `<br><br><col=F8D56B>${OC_NAME(int1)}</col>`);
        } else {
            string0 = strconcat(string0, `<br><br><col=B8D1D1>${OC_NAME(int1)}</col>`);
        };
        string0 = strconcat(string0, `<br>${dbrow_getfield(int0, 348272, 0)}`);
        string0 = strconcat(string0, `<br>${script14945(dbrow_getfield(int0, 348368, 0), 1)} cooldown.</col>`);
    };
    var string1 = "";
    switch (dbrow_getfield(int0, 348448, 0)) {
        case 1: {
            string1 = "Passive";
            break;
        }
        case 2: {
            string1 = "Cannot fight";
            break;
        }
        default: {
            string1 = "Aggressive";
            break;
        }
    };
    string0 = strconcat(string0, `<br><br>Default combat mode: ${string1}`);
    return string0;
}