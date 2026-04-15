//
function script7626(int0: dbrow, int1: int, string0: string): string {
    switch (int0) {
        case 4075: {
            if ((int1 == 0)) {
                var string0 = strconcat(`<col=ffffff>Charge Remaining:</col> ${inttostring(varbitplayer_49361, 10)}%<br><br>`, string0);
            } else {
                string0 = strconcat(`<col=ffffff>Charge Remaining:</col> ${inttostring(varbitplayer_49361, 10)}%<br><col=ffffff>Charge Cost:</col> ${script2700(int1)}%<br><br>`, string0);
            };
            break;
        }
        case 5162: {
            if (((int1 == 0) && (script8245() > 0))) {
                string0 = strconcat(`<col=ffffff>Active Week:</col> ${inttostring(script8245(), 10)}<br><br>`, string0);
            } else if ((enum_getvalue(0, 74, 8429 as cs2enum, int1) != -1 as dbrow)) {
                string0 = strconcat(`<col=ffffff>Active:</col> ${script7025(script16024(enum_getvalue(0, 0, 8431 as cs2enum, int1)))} - ${script7025(script16025(enum_getvalue(0, 0, 8431 as cs2enum, int1)))}<br><br>`, string0);
            };
            break;
        }
        case 6108: {
            if ((int1 == (2 - 1))) {
                string0 = strconcat(string0, script16781());
            };
            break;
        }
    };
    return string0;
}