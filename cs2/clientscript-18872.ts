//
function script18872(int0: dbrow, int1: unknown_int): string {
    var int2 = DB_GETROWTABLE(int0);
    var string0 = "";
    var int3 = 1;
    var int4 = -1 as dbrow;
    var int5 = -1 as struct;
    var int6 = -1 as quest;
    if ((int0 != -1 as dbrow)) {
        switch (int2) {
            case 285: {
                string0 = script18921(int0, 6);
                int3 = script18920(int0, 33);
                switch (int1) {
                    case 0: {
                        if ((int3 == 1)) {
                            string0 = strconcat(string0, "<br><br>For more information, press the button below to read about everything going on in RuneScape this week.");
                        } else {
                            string0 = strconcat(string0, "<br><br>For more information, press the button below to read on.");
                        };
                        break;
                    }
                    case 4: {
                        string0 = strconcat(string0, `<br><br>Start Time: ${script18847(int0, -1, -1)}`);
                        switch (script18920(int0, 13)) {
                            case 1: {
                                string0 = strconcat(string0, "<br><br>Press the button below to visit the RuneScape Twitch channel.");
                                break;
                            }
                            case 4: {
                                string0 = strconcat(string0, "<br><br>Press the button below to visit the official RuneScape Discord.");
                                break;
                            }
                        };
                        break;
                    }
                    case 5: {
                        string0 = script18874(int0, string0);
                        break;
                    }
                };
                if ((STRING_LENGTH(string0) > 0)) {
                    return string0;
                };
                int4 = script18923(int0, 14);
                if ((int4 != -1 as dbrow)) {
                    return script18872(int4, int1);
                };
                int5 = script18924(int0, 15);
                if ((int5 != -1 as struct)) {
                    return script18873(int5, int1);
                };
                int6 = script18925(int0, 16);
                if ((int6 != -1 as quest)) {
                    return script18851(int6);
                };
                break;
            }
            case 77: {
                string0 = dbrow_getfield(int0, 315408, 0);
                if ((STRING_LENGTH(string0) > 0)) {
                    return string0;
                };
                break;
            }
            case 113: {
                string0 = dbrow_getfield(int0, 462944, 0);
                if ((STRING_LENGTH(string0) > 0)) {
                    return string0;
                };
                break;
            }
        };
    };
    return "";
}