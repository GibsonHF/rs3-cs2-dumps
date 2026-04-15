//
function script1811(int0: unknown_int, int1: component, int2: component): void {
    if ((STRING_LENGTH(varclient_2409) == 0)) {
        script1812("", int2);
        return;
    };
    var int3 = script1960();
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var int7 = -1 as chatphrase;
    var string5 = "";
    var int8 = -1;
    var int9 = MAX(0, (int3 - 100));
    var string6 = "";
    var int10 = -1;
    var int11 = -1;
    while ((int9 <= int3)) {
        stack(unk11059(int9));
        [int5, string0, int6, string1, string2, string3, string4, int7, string5, int8, int11] = stack();
        switch (int5) {
            case 1:
            case 2:
            case 3:
            case 7:
            case 9:
            case 11:
            case 17:
            case 18:
            case 20:
            case 24:
            case 22:
            case 25:
            case 23:
            case 41:
            case 42:
            case 44:
            case 45: {
                if ((strcmp(LOWERCASE(REMOVETAGS(string1)), varclient_2409) == 0)) {
                    string6 = string5;
                    int10 = int9;
                };
                break;
            }
        };
        int9 = (int9 + 1);
    };
    if ((int10 < 0)) {
        varclient_267 = -1;
        script1812("", int2);
        return;
    };
    if ((((varclient_267 == -1) || (int10 <= varclient_267)) || (strcmp(string6, varclient_2410) != 0))) {
        script1812(string6, int2);
    };
    varclient_267 = int10;
    return;
}