//
function script14003(int0: component, int1: int, string0: string): void {
    if ((script6431() == true)) {
        script8800(string0, int0, int1);
        return;
    };
    var string1 = "";
    switch (int0) {
        case 33882349:
        case 86048867: {
            switch (MAP_LANG()) {
                case 2: {
                    string1 = "F";
                    break;
                }
                case 3: {
                    string1 = "B";
                    break;
                }
                default: {
                    string1 = "S";
                    break;
                }
            };
            break;
        }
        case 33882239:
        case 86048829: {
            switch (MAP_LANG()) {
                case 1: {
                    string1 = "Z";
                    break;
                }
                case 2: {
                    string1 = "R";
                    break;
                }
                case 3: {
                    string1 = "C";
                    break;
                }
                default: {
                    string1 = "N";
                    break;
                }
            };
            break;
        }
        case 33882235:
        case 86048825: {
            switch (MAP_LANG()) {
                case 2: {
                    string1 = "E";
                    break;
                }
                case 3: {
                    string1 = "M";
                    break;
                }
                default: {
                    string1 = "P";
                    break;
                }
            };
            break;
        }
        case 33882231: {
            switch (int1) {
                case 1: {
                    string1 = "1 (CTRL Optional), F1";
                    break;
                }
                case 2: {
                    string1 = "2 (CTRL Optional), F2";
                    break;
                }
                case 3: {
                    string1 = "CTRL + 3, F3";
                    break;
                }
                case 4: {
                    string1 = "CTRL + 4, F4";
                    break;
                }
                case 5: {
                    string1 = "CTRL + 5, F5";
                    break;
                }
                case 6: {
                    string1 = "CTRL + 6, F6";
                    break;
                }
                case 7: {
                    string1 = "CTRL + 7, F7";
                    break;
                }
                case 8: {
                    string1 = "CTRL + 8, F8";
                    break;
                }
                case 9: {
                    string1 = "CTRL + 9, F9";
                    break;
                }
                case 10: {
                    string1 = "CTRL + B";
                    break;
                }
                case 100: {
                    string1 = "+ (CTRL Optional)";
                    break;
                }
            };
            break;
        }
        case 33882151: {
            string1 = "3";
            break;
        }
        case 33882154: {
            string1 = "4";
            break;
        }
        case 33882157: {
            string1 = "5";
            break;
        }
        case 33882205:
        case 86048799: {
            string1 = "ALT + 1";
            break;
        }
        case 33882208:
        case 86048802: {
            string1 = "ALT + 2";
            break;
        }
        case 33882211:
        case 86048805: {
            string1 = "ALT + 3";
            break;
        }
        case 33882215:
        case 86048809: {
            string1 = "ALT + 4";
            break;
        }
        case 33882218:
        case 86048812: {
            string1 = "ALT + 5";
            break;
        }
        case 33882226:
        case 86048820: {
            string1 = "ALT + 6";
            break;
        }
        case 720901: {
            string1 = "3";
            break;
        }
        case 720904: {
            string1 = "4";
            break;
        }
        case 720907: {
            string1 = "5";
            break;
        }
        case 77529096: {
            switch (MAP_LANG()) {
                case 1: {
                    string1 = "J";
                    break;
                }
                case 2: {
                    string1 = "O";
                    break;
                }
                case 3: {
                    string1 = "S";
                    break;
                }
                default: {
                    string1 = "Y";
                    break;
                }
            };
            break;
        }
        case 77529097: {
            string1 = "N";
            break;
        }
        case 77529095: {
            string1 = "CTRL + A";
            break;
        }
        case 6881615: {
            string1 = "Space";
            break;
        }
        case 6881287:
        case 6881295: {
            string1 = "1";
            break;
        }
        case 6881301: {
            string1 = "CTRL + 1";
            break;
        }
        case 6881308:
        case 6881316: {
            string1 = "2";
            break;
        }
        case 6881322: {
            string1 = "CTRL + 2";
            break;
        }
        case 6881329:
        case 6881337: {
            string1 = "3";
            break;
        }
        case 6881343: {
            string1 = "CTRL + 3";
            break;
        }
        case 6881350:
        case 6881358: {
            string1 = "4";
            break;
        }
        case 6881364: {
            string1 = "CTRL + 4";
            break;
        }
        case 6881374:
        case 6881382: {
            string1 = "5";
            break;
        }
        case 6881388: {
            string1 = "CTRL + 5";
            break;
        }
        case 6881398:
        case 6881406: {
            string1 = "6";
            break;
        }
        case 6881412: {
            string1 = "CTRL + 6";
            break;
        }
        case 6881422:
        case 6881430: {
            string1 = "7";
            break;
        }
        case 6881436: {
            string1 = "CTRL + 7";
            break;
        }
        case 6881446:
        case 6881454: {
            string1 = "8";
            break;
        }
        case 6881460: {
            string1 = "CTRL + 8";
            break;
        }
        case 6881473: {
            string1 = "9";
            break;
        }
        case 6881481: {
            string1 = "ESC";
            break;
        }
        case 6881500: {
            switch (MAP_LANG()) {
                case 1: {
                    string1 = "A";
                    break;
                }
                default: {
                    string1 = "E";
                    break;
                }
            };
            break;
        }
        case 6881497: {
            switch (MAP_LANG()) {
                case 1: {
                    if ((INV_TOTAL(890 as inv, varplayer_135) > 0)) {
                        var string0 = "Remove item from favourites";
                    } else {
                        string0 = "Add item to favourites";
                    };
                    string1 = "L";
                    break;
                }
                case 2: {
                    if ((INV_TOTAL(890 as inv, varplayer_135) > 0)) {
                        string0 = "Remove item from favourites";
                    } else {
                        string0 = "Add item to favourites";
                    };
                    string1 = "P";
                    break;
                }
                default: {
                    if ((INV_TOTAL(890 as inv, varplayer_135) > 0)) {
                        string0 = "Remove item from favourites";
                    } else {
                        string0 = "Add item to favourites";
                    };
                    string1 = "F";
                    break;
                }
            };
            break;
        }
        case 42663942: {
            switch (MAP_LANG()) {
                case 3: {
                    string1 = "M";
                    break;
                }
                default: {
                    string1 = "I";
                    break;
                }
            };
            break;
        }
        case 42663950: {
            string1 = "B";
            break;
        }
        case 89784350: {
            string1 = "Space";
            break;
        }
        case 90898441: {
            switch (MAP_LANG()) {
                case 2: {
                    string1 = "R";
                    break;
                }
                case 3: {
                    string1 = "B";
                    break;
                }
                default: {
                    string1 = "S";
                    break;
                }
            };
            break;
        }
        default: {
            if ((STRING_LENGTH(string0) > 0)) {
                script8800(string0, int0, int1);
            };
            return;
        }
    };
    if ((STRING_LENGTH(string0) == 0)) {
        string0 = `Keybind: ${string1}`;
    } else {
        string0 = `${string0}<br><br>Keybind: ${string1}`;
    };
    script8800(string0, int0, int1);
    return;
}