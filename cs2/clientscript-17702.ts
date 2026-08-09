//
function script17702(int0: number, int1: number, int2: number): number {
    var int3 = -1;
    var string0 = "<col=00ff00>";
    var int4 = 0;
    var int5 = -1;
    var int6 = -1;
    var string1 = "";
    if ((script14617(int1) == 1)) {
        return script7482("<col=FF00>Relic</col>", 10319, -1, `Relic Power: ${dbrow_getfield(2898 as dbrow, 385040, 0)}`, script7484(int0, int2));
    };
    if ((((struct_getparam(int1, 2806) == 4) || (struct_getparam(int1, 2806) == 27)) || (struct_getparam(int1, 2806) == 28))) {
        if (((int1 == varplayer_3170) && (varbitplayer_0 == 2))) {
            var int1 = 14874;
        };
        int6 = -1;
        int3 = (int3 + 1);
        while ((int3 < 16)) {
            switch (int3) {
                case 0: {
                    int4 = script18436(int1, 556);
                    int5 = 556;
                    string1 = "Air rune.";
                    break;
                }
                case 1: {
                    int4 = script18436(int1, 558);
                    int5 = 558;
                    string1 = "Mind rune.";
                    break;
                }
                case 2: {
                    int4 = script18436(int1, 555);
                    int5 = 555;
                    string1 = "Water rune.";
                    break;
                }
                case 3: {
                    int4 = script18436(int1, 557);
                    int5 = 557;
                    string1 = "Earth rune.";
                    break;
                }
                case 4: {
                    int4 = script18436(int1, 554);
                    int5 = 554;
                    string1 = "Fire rune.";
                    break;
                }
                case 5: {
                    int4 = script18436(int1, 559);
                    int5 = 559;
                    string1 = "Body rune.";
                    break;
                }
                case 6: {
                    int4 = script18436(int1, 564);
                    int5 = 564;
                    string1 = "Cosmic rune.";
                    break;
                }
                case 7: {
                    int4 = script18436(int1, 562);
                    int5 = 562;
                    string1 = "Chaos rune.";
                    break;
                }
                case 8: {
                    int4 = script18436(int1, 9075);
                    int5 = 9075;
                    string1 = "Astral rune.";
                    break;
                }
                case 9: {
                    int4 = script18436(int1, 561);
                    int5 = 561;
                    string1 = "Nature rune.";
                    break;
                }
                case 10: {
                    int4 = script18436(int1, 563);
                    int5 = 563;
                    string1 = "Law rune.";
                    break;
                }
                case 11: {
                    int4 = script18436(int1, 560);
                    int5 = 560;
                    string1 = "Death rune.";
                    break;
                }
                case 12: {
                    int4 = script18436(int1, 565);
                    int5 = 565;
                    string1 = "Blood rune.";
                    break;
                }
                case 13: {
                    int4 = script18436(int1, 566);
                    int5 = 566;
                    string1 = "Soul rune.";
                    break;
                }
                case 14: {
                    int4 = script18436(int1, 58450);
                    int5 = 58450;
                    string1 = "Time rune.";
                    break;
                }
                case 15: {
                    int4 = script18436(int1, 21773);
                    int5 = 21773;
                    string1 = "Armadyl rune.";
                    break;
                }
            };
            if ((int4 > 0)) {
                if ((script339(int1, struct_getparam(int1, 2871)) <= 0)) {
                    if ((script19(int5) < int4)) {
                        if ((script6572(int1) == 0)) {
                            string0 = "<col=ff0000>";
                        } else {
                            string0 = "<col=00ff00>";
                        };
                    } else {
                        string0 = "<col=00ff00>";
                    };
                } else {
                    string0 = "<col=00ff00>";
                };
                if ((int6 != -1)) {
                    var int0 = script7482(`${string0}${inttostring(int4, 10)}</col>`, int6, -1, string1, script7484(int0, int2));
                } else {
                    int0 = script7482(`${string0}${inttostring(int4, 10)}</col>`, -1, int5, string1, script7484(int0, int2));
                };
            };
        };
    };
    return int0;
}