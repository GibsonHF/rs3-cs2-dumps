//
function script18003(int0: component, int1: int, int2: int, int3: boolean, int4: boolean, int5: unknown_int, int6: int, int7: int): void {
    var string0 = "";
    var int8 = true;
    if ((int3 == true)) {
        string0 = "<col=00FF00>You've already claimed this reward.";
        int8 = false;
    } else {
        if (((int4 == true) && (script17865(7906 as dbrow) == 0))) {
            if ((STRING_LENGTH(string0) > 0)) {
                string0 = `${string0}<br>`;
            };
            string0 = `${string0}Premier Pass required`;
            int8 = false;
        };
        if ((int5 == 1)) {
            if ((STRING_LENGTH(string0) > 0)) {
                string0 = `${string0}<br>`;
            };
            string0 = `${string0}Level ${inttostring(int2, 10)} required`;
            int8 = false;
        };
    };
    var string1 = `Claim selected ${script4583(int6, "reward", "rewards")}`;
    string1 = "Claim";
    var int9 = 0;
    if (((int8 == true) && (IF_FIND(int0) == 1))) {
        switch (int7) {
            case 2: {
                int9 = script17893(varplayer_11339);
                if ((int9 > 1)) {
                    string1 = strconcat(string1, ` (x${TOSTRING_LOCALISED(int9, 1)})`);
                };
                script7858(0, int2, 0, 0, 1, 1, 0, 0, 1, 1, script17989(22), `<col=E0D471>${string1}`);
                CC_SETOP(1, string1);
                CC_SETTEXTFONT(57 as fontmetrics);
                break;
            }
            default: {
                script7858(0, int2, 0, 0, 1, 1, 30, 0, 1, 1, script17989(22), `<col=E0D471>${string1}`);
                CC_SETOP(1, string1);
                CC_SETTEXTFONT(57 as fontmetrics);
                break;
            }
        };
    };
    IF_SETHIDE(script6430(int8), int0);
    var int10 = comp(1227, 13);
    IF_SETHIDE(int8, int10);
    IF_SETTEXT(string0, int10);
    return;
}