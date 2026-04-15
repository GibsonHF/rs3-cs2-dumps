//
function script4010(int0: dbrow): string {
    var string0 = "";
    string0 = strconcat(string0, dbrow_getfield(int0, 348208, 0));
    var int1 = dbrow_getfield(int0, 348256, 0);
    if ((int1 != -1 as obj)) {
        string0 = strconcat(string0, `<br><br>${OC_NAME(int1)}`);
        string0 = strconcat(string0, "<br>");
        string0 = strconcat(string0, "Familiar spell points");
        string0 = strconcat(string0, `: ${inttostring(script8251(int1), 10)}`);
        string0 = strconcat(string0, `<br>${dbrow_getfield(int0, 348272, 0)}`);
        string0 = strconcat(string0, `<br>${script14945(dbrow_getfield(int0, 348368, 0), 1)} cooldown.</col>`);
    };
    var string1 = "";
    if ((varbitplayer_23196 != 0)) {
        string1 = enum_getvalue(0, 36, 1663 as cs2enum, varbitplayer_23196);
    } else {
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
    };
    string0 = strconcat(string0, `<br><br>Current combat mode: ${string1}`);
    if ((dbrow_getfield(int0, 348352, 0) == true)) {
        if ((dbrow_getfield(int0, 348304, 0) == true)) {
            if ((varbitplayer_25413 > 0)) {
                string0 = strconcat(string0, `<br>Autofire rate: ${inttostring(varbitplayer_25413, 10)}`);
            } else {
                string0 = strconcat(string0, "<br>Autofire rate: Not set");
            };
            string0 = strconcat(string0, "<br>Autofire interval: Familiar attacks");
        } else {
            if ((varbitplayer_49035 > 0)) {
                string0 = strconcat(string0, `<br>Autofire rate: ${inttostring(script2475(varbitplayer_49035), 10)}`);
            } else {
                string0 = strconcat(string0, "<br>Autofire rate: Not set");
            };
            string0 = strconcat(string0, "<br>Autofire interval: Seconds");
        };
    };
    return string0;
}