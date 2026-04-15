//
function script15321(int0: achievement): string {
    if ((int0 == -1 as achievement)) {
        return "";
    };
    var string0 = unk11081(int0, 0);
    var string1 = "";
    if ((script4148() == true)) {
        string1 = unk11081(int0, 1);
        if ((STRING_LENGTH(string1) > 0)) {
            string0 = string1;
        };
        if ((script19316() == true)) {
            switch (varbitplayer_56588) {
                case 2: {
                    string1 = unk11081(int0, 2);
                    break;
                }
                case 3: {
                    string1 = unk11081(int0, 3);
                    break;
                }
                case 4: {
                    string1 = unk11081(int0, 4);
                    break;
                }
                case 5: {
                    string1 = unk11081(int0, 5);
                    break;
                }
                default: {
                    string1 = "";
                    break;
                }
            };
            if ((STRING_LENGTH(string1) > 0)) {
                string0 = string1;
            };
        };
    };
    string0 = script19842(int0, string0);
    var int1 = 0;
    if ((enum_hasoutput(131, 7256 as cs2enum, int0) == 1)) {
        int1 = 1;
    };
    var int2 = 0;
    var int3 = 0;
    if ((int1 == 0)) {
        [int2, int3] = script15322(int0);
        if ((int3 > 0)) {
            string0 = strconcat(string0, ` (${TOSTRING_LOCALISED(int2, 1)}/${TOSTRING_LOCALISED(int3, 1)})`);
        } else {
            int3 = script19622(int0);
            if ((int3 > 1)) {
                int2 = script19623(int0);
                string0 = strconcat(string0, ` (${TOSTRING_LOCALISED(int2, 1)}/${TOSTRING_LOCALISED(int3, 1)})`);
            };
        };
    };
    return string0;
}