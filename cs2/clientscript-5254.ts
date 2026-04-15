//
function script5254(int0: struct): string {
    var string0 = "";
    var int1 = script5275(int0);
    var int2 = script5335(int0);
    if ((int1 > 0)) {
        string0 = `Restores <col=00ff00>${inttostring(int1, 10)} health</col>`;
    } else if ((int1 < 0)) {
        string0 = `Deals <col=ff0000>${inttostring(ABS(int1), 10)} damage</col>`;
    };
    if ((int2 > 0)) {
        if ((STRING_LENGTH(string0) > 0)) {
            string0 = strconcat(string0, `, and renews <col=00ff00>${inttostring(int2, 10)} health</col> over the duration`);
        } else {
            string0 = strconcat(string0, `Renews <col=00ff00>${inttostring(int2, 10)} health</col> over the duration`);
        };
    } else if ((int2 < 0)) {
        if ((STRING_LENGTH(string0) > 0)) {
            string0 = strconcat(string0, `, and deals <col=ff0000>${inttostring(ABS(int2), 10)} damage</col> over the duration`);
        } else {
            string0 = strconcat(string0, `Deals <col=ff0000>${inttostring(ABS(int2), 10)} damage</col> over the duration`);
        };
    };
    if ((STRING_LENGTH(string0) > 0)) {
        string0 = strconcat(string0, ".");
    };
    return string0;
}