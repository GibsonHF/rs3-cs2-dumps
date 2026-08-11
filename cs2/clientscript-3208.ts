//
function script3208(): void {
    IF_SETHIDE(true, comp(502, 17));  // piratefinale_invasion_overlay:main_layer
    IF_SETHIDE(false, comp(502, 18));  // piratefinale_invasion_overlay:test_map_layer
    IF_SETHIDE(false, comp(502, 19));  // piratefinale_invasion_overlay:test_skulls
    var int0 = comp(502, 58);  // piratefinale_invasion_overlay:skull_1_point_1
    var int1 = comp(502, 59);  // piratefinale_invasion_overlay:skull_2_point_1
    var int2 = comp(502, 60);  // piratefinale_invasion_overlay:skull_3_point_1
    var int3 = comp(502, 61);  // piratefinale_invasion_overlay:skull_4_point_1
    var int4 = comp(502, 35);  // piratefinale_invasion_overlay:skulls_layer_1
    var int5 = comp(502, 37);  // piratefinale_invasion_overlay:secannon_info
    var int6 = 1;
    var int7 = varbitplayer_39954;
    var int8 = false;
    var string0 = "";
    while ((int6 <= 7)) {
        int8 = false;
        switch (int6) {
            case 1: {
                int7 = varbitplayer_39954;
                int0 = comp(502, 58);  // piratefinale_invasion_overlay:skull_1_point_1
                int1 = comp(502, 59);  // piratefinale_invasion_overlay:skull_2_point_1
                int2 = comp(502, 60);  // piratefinale_invasion_overlay:skull_3_point_1
                int3 = comp(502, 61);  // piratefinale_invasion_overlay:skull_4_point_1
                int4 = comp(502, 35);  // piratefinale_invasion_overlay:skulls_layer_1
                int5 = comp(502, 37);  // piratefinale_invasion_overlay:secannon_info
                break;
            }
            case 2: {
                int7 = varbitplayer_39955;
                int0 = comp(502, 63);  // piratefinale_invasion_overlay:skull_1_point_2
                int1 = comp(502, 64);  // piratefinale_invasion_overlay:skull_2_point_2
                int2 = comp(502, 65);  // piratefinale_invasion_overlay:skull_3_point_2
                int3 = comp(502, 66);  // piratefinale_invasion_overlay:skull_4_point_2
                int4 = comp(502, 32);  // piratefinale_invasion_overlay:skulls_layer_2
                int5 = comp(502, 34);  // piratefinale_invasion_overlay:swcannon_info
                break;
            }
            case 3: {
                int7 = varbitplayer_39956;
                int0 = comp(502, 68);  // piratefinale_invasion_overlay:skull_1_point_3
                int1 = comp(502, 69);  // piratefinale_invasion_overlay:skull_2_point_3
                int2 = comp(502, 70);  // piratefinale_invasion_overlay:skull_3_point_3
                int3 = comp(502, 71);  // piratefinale_invasion_overlay:skull_4_point_3
                int4 = comp(502, 29);  // piratefinale_invasion_overlay:skulls_layer_3
                int5 = comp(502, 31);  // piratefinale_invasion_overlay:wall_info
                break;
            }
            case 4: {
                int7 = varbitplayer_39957;
                int0 = comp(502, 73);  // piratefinale_invasion_overlay:skull_1_point_4
                int1 = comp(502, 74);  // piratefinale_invasion_overlay:skull_2_point_4
                int2 = comp(502, 75);  // piratefinale_invasion_overlay:skull_3_point_4
                int3 = comp(502, 76);  // piratefinale_invasion_overlay:skull_4_point_4
                int4 = comp(502, 26);  // piratefinale_invasion_overlay:skulls_layer_4
                int5 = comp(502, 28);  // piratefinale_invasion_overlay:maingate_info
                break;
            }
            case 5: {
                if ((varbitplayer_39978 == 1)) {
                    int8 = true;
                } else {
                    int8 = false;
                };
                int7 = varbitplayer_39958;
                int0 = comp(502, 78);  // piratefinale_invasion_overlay:skull_1_point_5
                int1 = comp(502, 79);  // piratefinale_invasion_overlay:skull_2_point_5
                int2 = comp(502, 80);  // piratefinale_invasion_overlay:skull_3_point_5
                int3 = comp(502, 81);  // piratefinale_invasion_overlay:skull_4_point_5
                int4 = comp(502, 23);  // piratefinale_invasion_overlay:skulls_layer_5
                int5 = comp(502, 25);  // piratefinale_invasion_overlay:river_info
                break;
            }
            case 6: {
                if ((varbitplayer_39978 == 1)) {
                    int8 = true;
                } else {
                    int8 = false;
                };
                int7 = varbitplayer_39959;
                int0 = comp(502, 83);  // piratefinale_invasion_overlay:skull_1_point_6
                int1 = comp(502, 84);  // piratefinale_invasion_overlay:skull_2_point_6
                int2 = comp(502, 85);  // piratefinale_invasion_overlay:skull_3_point_6
                int3 = comp(502, 86);  // piratefinale_invasion_overlay:skull_4_point_6
                int4 = comp(502, 20);  // piratefinale_invasion_overlay:skulls_layer_6
                int5 = comp(502, 22);  // piratefinale_invasion_overlay:cropfield_info
                break;
            }
            case 7: {
                if ((varbitplayer_39978 == 1)) {
                    int8 = true;
                } else {
                    int8 = false;
                };
                int7 = varbitplayer_39960;
                int0 = comp(502, 3);  // piratefinale_invasion_overlay:skull_1_point_7
                int1 = comp(502, 4);  // piratefinale_invasion_overlay:skull_2_point_7
                int2 = comp(502, 5);  // piratefinale_invasion_overlay:skull_3_point_7
                int3 = comp(502, 6);  // piratefinale_invasion_overlay:skull_4_point_7
                int4 = comp(502, 0);  // piratefinale_invasion_overlay:skulls_layer_7
                int5 = comp(502, 2);  // piratefinale_invasion_overlay:beachead_info
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