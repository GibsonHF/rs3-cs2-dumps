//
function script13627(int0: unknown_int, int1: int, int2: int, int3: int, int4: int, int5: int, string0: string, string1: unknown_string): void {
    var string2 = "";
    if ((int3 > 0)) {
        if ((int3 > 1)) {
            string2 = `${inttostring(int3, 10)} days`;
        } else {
            string2 = `${inttostring(int3, 10)} day`;
        };
    } else if ((int4 > 0)) {
        if ((int4 > 1)) {
            string2 = `${inttostring(int4, 10)} hours`;
        } else {
            string2 = `${inttostring(int4, 10)} hour`;
        };
    } else if ((int5 > 0)) {
        if ((int5 > 1)) {
            string2 = `${inttostring(int5, 10)} minutes`;
        } else {
            string2 = `${inttostring(int5, 10)} minute`;
        };
    };
    var string3 = `Seasonal Hiscore<br>${string0}<br>Ends in: ${string2}<br>---<br>`;
    if ((int1 > 0)) {
        string3 = strconcat(string3, `Rank: ${inttostring(int1, 10)}<br>`);
    } else {
        string3 = strconcat(string3, "Rank: Not Ranked<br>");
    };
    if ((int2 > 0)) {
        if ((int0 == 1)) {
            string3 = strconcat(string3, `Score: ${script5729(script4705(int2), true, false)}`);
        } else {
            string3 = strconcat(string3, `Score: ${inttostring(int2, 10)}`);
        };
    } else {
        string3 = strconcat(string3, "Score: -");
    };
    if ((STRING_LENGTH(varclient_6275) == 0)) {
        varclient_6275 = string3;
    } else if ((STRING_LENGTH(varclient_6276) == 0)) {
        varclient_6276 = string3;
    };
    return;
}