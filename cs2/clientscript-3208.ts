//
function script3208(): void {
    IF_SETHIDE(true, comp(502, 17));
    IF_SETHIDE(false, comp(502, 18));
    IF_SETHIDE(false, comp(502, 19));
    var int0 = comp(502, 58);
    var int1 = comp(502, 59);
    var int2 = comp(502, 60);
    var int3 = comp(502, 61);
    var int4 = comp(502, 35);
    var int5 = comp(502, 37);
    var int6 = 1;
    var int7 = varbitplayer_39954;
    var int8 = false;
    var string0 = "";
    while ((int6 <= 7)) {
        int8 = false;
        switch (int6) {
            case 1: {
                int7 = varbitplayer_39954;
                int0 = comp(502, 58);
                int1 = comp(502, 59);
                int2 = comp(502, 60);
                int3 = comp(502, 61);
                int4 = comp(502, 35);
                int5 = comp(502, 37);
                break;
            }
            case 2: {
                int7 = varbitplayer_39955;
                int0 = comp(502, 63);
                int1 = comp(502, 64);
                int2 = comp(502, 65);
                int3 = comp(502, 66);
                int4 = comp(502, 32);
                int5 = comp(502, 34);
                break;
            }
            case 3: {
                int7 = varbitplayer_39956;
                int0 = comp(502, 68);
                int1 = comp(502, 69);
                int2 = comp(502, 70);
                int3 = comp(502, 71);
                int4 = comp(502, 29);
                int5 = comp(502, 31);
                break;
            }
            case 4: {
                int7 = varbitplayer_39957;
                int0 = comp(502, 73);
                int1 = comp(502, 74);
                int2 = comp(502, 75);
                int3 = comp(502, 76);
                int4 = comp(502, 26);
                int5 = comp(502, 28);
                break;
            }
            case 5: {
                if ((varbitplayer_39978 == 1)) {
                    int8 = true;
                } else {
                    int8 = false;
                };
                int7 = varbitplayer_39958;
                int0 = comp(502, 78);
                int1 = comp(502, 79);
                int2 = comp(502, 80);
                int3 = comp(502, 81);
                int4 = comp(502, 23);
                int5 = comp(502, 25);
                break;
            }
            case 6: {
                if ((varbitplayer_39978 == 1)) {
                    int8 = true;
                } else {
                    int8 = false;
                };
                int7 = varbitplayer_39959;
                int0 = comp(502, 83);
                int1 = comp(502, 84);
                int2 = comp(502, 85);
                int3 = comp(502, 86);
                int4 = comp(502, 20);
                int5 = comp(502, 22);
                break;
            }
            case 7: {
                if ((varbitplayer_39978 == 1)) {
                    int8 = true;
                } else {
                    int8 = false;
                };
                int7 = varbitplayer_39960;
                int0 = comp(502, 3);
                int1 = comp(502, 4);
                int2 = comp(502, 5);
                int3 = comp(502, 6);
                int4 = comp(502, 0);
                int5 = comp(502, 2);
                break;
            }
        };
        switch (int7) {
            case 0: {
                int8 = true;
                IF_SETHIDE(true, int0);
                IF_SETHIDE(true, int1);
                IF_SETHIDE(true, int2);
                IF_SETHIDE(true, int3);
                IF_SETCOLOUR(0, int0);
                IF_SETCOLOUR(0, int1);
                IF_SETCOLOUR(0, int2);
                IF_SETCOLOUR(0, int3);
                IF_SETTEXT("", int5);
                break;
            }
            case 1: {
                int8 = false;
                IF_SETHIDE(false, int0);
                IF_SETHIDE(true, int1);
                IF_SETHIDE(true, int2);
                IF_SETHIDE(true, int3);
                IF_SETCOLOUR(0, int0);
                IF_SETCOLOUR(0, int1);
                IF_SETCOLOUR(0, int2);
                IF_SETCOLOUR(0, int3);
                switch (int5) {
                    case 32899074: {
                        string0 = "- Destroy the ship!";
                        break;
                    }
                    case 32899094: {
                        string0 = "- Destroy the cannon!";
                        break;
                    }
                    case 32899097: {
                        string0 = "- Destroy the bridges!";
                        break;
                    }
                    case 32899100: {
                        string0 = "Repair the barricades!";
                        break;
                    }
                    case 32899103: {
                        string0 = "- Help the pirate to his feet!";
                        break;
                    }
                    case 32899106: {
                        string0 = "- Sink the zomboats!";
                        break;
                    }
                    case 32899109: {
                        string0 = "- Sink the zomboats!";
                        break;
                    }
                };
                IF_SETTEXT(string0, int5);
                break;
            }
            case 2: {
                int8 = false;
                IF_SETHIDE(false, int0);
                IF_SETHIDE(false, int1);
                IF_SETHIDE(true, int2);
                IF_SETHIDE(true, int3);
                IF_SETCOLOUR(0, int0);
                IF_SETCOLOUR(0, int1);
                IF_SETCOLOUR(0, int2);
                IF_SETCOLOUR(0, int3);
                switch (int5) {
                    case 32899074: {
                        string0 = "-Kill the captains and barrelchest<br>- Destroy the ship!";
                        break;
                    }
                    case 32899094: {
                        string0 = "- Destroy the cannon!";
                        break;
                    }
                    case 32899097: {
                        string0 = "- Destroy the bridges!";
                        break;
                    }
                    case 32899100: {
                        string0 = "- Repair the barricades!";
                        break;
                    }
                    case 32899103: {
                        string0 = "- Kill the captains<br>- Help the pirate to his feet!";
                        break;
                    }
                    case 32899106: {
                        string0 = "- Sink the zomboats!";
                        break;
                    }
                    case 32899109: {
                        string0 = "- Sink the zomboats!";
                        break;
                    }
                };
                IF_SETTEXT(string0, int5);
                break;
            }
            case 3: {
                int8 = false;
                IF_SETHIDE(false, int0);
                IF_SETHIDE(false, int1);
                IF_SETHIDE(false, int2);
                IF_SETHIDE(true, int3);
                IF_SETCOLOUR(0, int0);
                IF_SETCOLOUR(0, int1);
                IF_SETCOLOUR(0, int2);
                IF_SETCOLOUR(0, int3);
                switch (int5) {
                    case 32899074: {
                        string0 = "-Kill the captains and barrelchest<br>- Destroy the ship!";
                        break;
                    }
                    case 32899094: {
                        string0 = "- Kill the captains and barrelchest<br>- Destroy the cannon!";
                        break;
                    }
                    case 32899097: {
                        string0 = "- Kill the captains<br>- Destroy the bridges!";
                        break;
                    }
                    case 32899100: {
                        string0 = "- Kill the captains and barrelchest<br>- Repair the barricades!";
                        break;
                    }
                    case 32899103: {
                        string0 = "- Kill the captains<br>- Help the pirate to his feet!";
                        break;
                    }
                    case 32899106: {
                        string0 = "- Kill the captains<br>- Sink the zomboats!";
                        break;
                    }
                    case 32899109: {
                        string0 = "- Kill the captains<br>- Sink the zomboats!";
                        break;
                    }
                };
                IF_SETTEXT(string0, int5);
                break;
            }
            case 4: {
                int8 = false;
                IF_SETHIDE(false, int0);
                IF_SETHIDE(false, int1);
                IF_SETHIDE(false, int2);
                IF_SETHIDE(false, int3);
                IF_SETCOLOUR(0, int0);
                IF_SETCOLOUR(0, int1);
                IF_SETCOLOUR(0, int2);
                IF_SETCOLOUR(0, int3);
                switch (int5) {
                    case 32899074: {
                        string0 = "-Kill the captains and barrelchest<br>- Destroy the ship!";
                        break;
                    }
                    case 32899094: {
                        string0 = "- Kill the captains and barrelchest<br>- Destroy the cannon!";
                        break;
                    }
                    case 32899097: {
                        string0 = "- Kill the captains<br>- Destroy the bridges!";
                        break;
                    }
                    case 32899100: {
                        string0 = "- Kill the captains and barrelchest<br>- Repair the barricades!";
                        break;
                    }
                    case 32899103: {
                        string0 = "- Kill the captains<br>- Help the pirate to his feet!";
                        break;
                    }
                    case 32899106: {
                        string0 = "- Kill the captains<br>- Sink the zomboats!";
                        break;
                    }
                    case 32899109: {
                        string0 = "- Kill the captains<br>- Sink the zomboats!";
                        break;
                    }
                };
                IF_SETTEXT(string0, int5);
                break;
            }
            case 5: {
                int8 = false;
                IF_SETHIDE(false, int0);
                IF_SETHIDE(false, int1);
                IF_SETHIDE(false, int2);
                IF_SETHIDE(false, int3);
                IF_SETCOLOUR(16711680, int0);
                IF_SETCOLOUR(16711680, int1);
                IF_SETCOLOUR(16711680, int2);
                IF_SETCOLOUR(16711680, int3);
                switch (int5) {
                    case 32899074: {
                        string0 = "<col=ff0000>Zombies are spreading to other areas</col><col=7592a0><br>-Kill the captains and barrelchest<br>- Destroy the ship!";
                        break;
                    }
                    case 32899094: {
                        string0 = "<col=ff0000>Zombies are spreading to other areas</col><col=7592a0><br>- Kill the captains and barrelchest<br>- Destroy the cannon!";
                        break;
                    }
                    case 32899097: {
                        string0 = "<col=ff0000>Zombies are spreading to other areas</col><col=7592a0><br>- Kill the captains<br>- Destroy the bridges!";
                        break;
                    }
                    case 32899100: {
                        string0 = "<col=ff0000>Zombies are spreading to other areas</col><col=7592a0><br>- Kill the captains and barrelchest<br>- Repair the barricades!";
                        break;
                    }
                    case 32899103: {
                        string0 = "<col=ff0000>Zombies are spreading to other areas</col><col=7592a0><br>- Kill the captains<br>- Help the pirate to his feet!";
                        break;
                    }
                    case 32899106: {
                        string0 = "<col=ff0000>Zombies are spreading to other areas</col><col=7592a0><br>- Kill the captains<br>- Sink the zomboats!";
                        break;
                    }
                    case 32899109: {
                        string0 = "<col=ff0000>Zombies are spreading to other areas</col><col=7592a0><br>- Kill the captains<br>- Sink the zomboats!";
                        break;
                    }
                };
                IF_SETTEXT(string0, int5);
                break;
            }
        };
        IF_SETHIDE(int8, int4);
        int6 = (int6 + 1);
    };
    return;
}