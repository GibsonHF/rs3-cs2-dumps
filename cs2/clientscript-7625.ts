//
function script7625(int0: dbrow, int1: int, string0: string, string1: string, string2: string, string3: string, string4: string, string5: string, string6: string, string7: string, string8: string, string9: string, string10: string, string11: string, string12: string, string13: string, string14: string, string15: string, string16: string, string17: string, string18: string, string19: string): [int, string, string] {
    var int2 = 0;
    var string20 = "";
    var string21 = "";
    var int3 = false;
    if ((int0 == -1 as dbrow)) {
        switch (int1) {
            case 0: {
                string20 = string0;
                string21 = string1;
                break;
            }
            case 1: {
                string20 = string2;
                string21 = string3;
                break;
            }
            case 2: {
                string20 = string4;
                string21 = string5;
                break;
            }
            case 3: {
                string20 = string6;
                string21 = string7;
                break;
            }
            case 4: {
                string20 = string8;
                string21 = string9;
                break;
            }
            case 5: {
                string20 = string10;
                string21 = string11;
                break;
            }
            case 6: {
                string20 = string12;
                string21 = string13;
                break;
            }
            case 7: {
                string20 = string14;
                string21 = string15;
                break;
            }
            case 8: {
                string20 = string16;
                string21 = string17;
                break;
            }
            case 9: {
                string20 = string18;
                string21 = string19;
                break;
            }
        };
        if ((strcmp(string20, "") == 0)) {
            stack(0);
            stack("");
            stack("");
            [int2, string20, string21] = stack();
        } else {
            int2 = 1;
        };
    } else {
        if ((DB_GETFIELDCOUNT(int0, 532496) < int1)) {
            return [0, "", ""];
        };
        stack(dbrow_getfield(int0, 532496, int1));
        [int2, int3, string20, string21] = stack();
        int2 = 1;
        string20 = script16336(int0, int1, string20);
        string21 = script7626(int0, int1, string21);
    };
    return [int2, string20, string21];
}