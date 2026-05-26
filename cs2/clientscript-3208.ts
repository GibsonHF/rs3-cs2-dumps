//
function script3208(): void {
    IF_SETHIDE(1, 32899089);
    IF_SETHIDE(0, 32899090);
    IF_SETHIDE(0, 32899091);
    var int0 = 32899130;
    var int1 = 32899131;
    var int2 = 32899132;
    var int3 = 32899133;
    var int4 = 32899107;
    var int5 = 32899109;
    var int6 = 1;
    var int7 = varbitplayer_39954;
    var int8 = 0;
    var string0 = "";
    while ((int6 <= 7)) {
        int8 = 0;
        switch (int6) {
            case 1: {
                int7 = varbitplayer_39954;
                int0 = 32899130;
                int1 = 32899131;
                int2 = 32899132;
                int3 = 32899133;
                int4 = 32899107;
                int5 = 32899109;
                break;
            }
            case 2: {
                int7 = varbitplayer_39955;
                int0 = 32899135;
                int1 = 32899136;
                int2 = 32899137;
                int3 = 32899138;
                int4 = 32899104;
                int5 = 32899106;
                break;
            }
            case 3: {
                int7 = varbitplayer_39956;
                int0 = 32899140;
                int1 = 32899141;
                int2 = 32899142;
                int3 = 32899143;
                int4 = 32899101;
                int5 = 32899103;
                break;
            }
            case 4: {
                int7 = varbitplayer_39957;
                int0 = 32899145;
                int1 = 32899146;
                int2 = 32899147;
                int3 = 32899148;
                int4 = 32899098;
                int5 = 32899100;
                break;
            }
            case 5: {
                if ((varbitplayer_39978 == 1)) {
                    int8 = 1;
                } else {
                    int8 = 0;
                };
                int7 = varbitplayer_39958;
                int0 = 32899150;
                int1 = 32899151;
                int2 = 32899152;
                int3 = 32899153;
                int4 = 32899095;
                int5 = 32899097;
                break;
            }
            case 6: {
                if ((varbitplayer_39978 == 1)) {
                    int8 = 1;
                } else {
                    int8 = 0;
                };
                int7 = varbitplayer_39959;
                int0 = 32899155;
                int1 = 32899156;
                int2 = 32899157;
                int3 = 32899158;
                int4 = 32899092;
                int5 = 32899094;
                break;
            }
            case 7: {
                if ((varbitplayer_39978 == 1)) {
                    int8 = 1;
                } else {
                    int8 = 0;
                };
                int7 = varbitplayer_39960;
                int0 = 32899075;
                int1 = 32899076;
                int2 = 32899077;
                int3 = 32899078;
                int4 = 32899072;
                int5 = 32899074;
                break;
            }
        };
        switch (int7) {
            case 0: {
                int8 = 1;
                IF_SETHIDE(1, int0);
                IF_SETHIDE(1, int1);
                IF_SETHIDE(1, int2);
                IF_SETHIDE(1, int3);
                IF_SETCOLOUR(0, int0);
                IF_SETCOLOUR(0, int1);
                IF_SETCOLOUR(0, int2);
                IF_SETCOLOUR(0, int3);
                IF_SETTEXT("", int5);
                break;
            }
            case 1: {
                int8 = 0;
                IF_SETHIDE(0, int0);
                IF_SETHIDE(1, int1);
                IF_SETHIDE(1, int2);
                IF_SETHIDE(1, int3);
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
                int8 = 0;
                IF_SETHIDE(0, int0);
                IF_SETHIDE(0, int1);
                IF_SETHIDE(1, int2);
                IF_SETHIDE(1, int3);
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
                int8 = 0;
                IF_SETHIDE(0, int0);
                IF_SETHIDE(0, int1);
                IF_SETHIDE(0, int2);
                IF_SETHIDE(1, int3);
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
                int8 = 0;
                IF_SETHIDE(0, int0);
                IF_SETHIDE(0, int1);
                IF_SETHIDE(0, int2);
                IF_SETHIDE(0, int3);
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
                int8 = 0;
                IF_SETHIDE(0, int0);
                IF_SETHIDE(0, int1);
                IF_SETHIDE(0, int2);
                IF_SETHIDE(0, int3);
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