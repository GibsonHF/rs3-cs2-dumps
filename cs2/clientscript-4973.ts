//
function script4973(int0: int): graphic {
    var int1 = 0;
    var int2 = 0;
    if ((CLANPROFILE_FIND() == 1)) {
        int1 = script4949(int0);
        switch (int0) {
            case 1: {
                return 7431 as graphic;
            }
            case 2: {
                return 7430 as graphic;
            }
            case 3: {
                return 7433 as graphic;
            }
            case 4: {
                return script4974(varbitclan_6483);
            }
            case 5: {
                return script4974(varbitclan_6484);
            }
            case 6: {
                return script4974(varbitclan_6485);
            }
            case 7: {
                return script4974(varbitclan_6486);
            }
            case 8: {
                return script4974(varbitclan_6487);
            }
            case 9: {
                return script4974(varbitclan_6488);
            }
            case 10: {
                return script4974(varbitclan_6489);
            }
            case 11: {
                return script4974(varbitclan_6490);
            }
            case 12: {
                return script4974(varbitclan_6491);
            }
            case 13: {
                return script4974(varbitclan_6492);
            }
            case 14: {
                return script4974(varbitclan_6493);
            }
            case 15: {
                return script4974(varbitclan_6494);
            }
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
            case 26:
            case 27:
            case 28:
            case 29:
            case 30:
            case 31:
            case 32:
            case 33:
            case 34:
            case 49: {
                return script4974(int1);
            }
            case 35:
            case 36:
            case 37:
            case 40:
            case 38:
            case 39:
            case 41:
            case 42:
            case 43:
            case 45:
            case 46:
            case 47:
            case 48:
            case 44: {
                return enum_getvalue(0, 23, 4061 as cs2enum, int1);
            }
        };
    };
    return -1 as graphic;
}