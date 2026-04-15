//
function script5169(int0: int): unknown_int {
    var int1 = 0;
    var int2 = 0;
    var int3 = 1;
    if ((CLANPROFILE_FIND() == 1)) {
        int1 = script4948(int0);
        if ((int1 <= 0)) {
            return 0;
        };
        int2 = script4959(int1);
        if ((int2 == 0)) {
            return 0;
        };
        switch (int1) {
            case 1: {
                int3 = varbitclan_6541;
                break;
            }
            case 2: {
                int3 = varbitclan_6539;
                break;
            }
            case 3: {
                int3 = varbitclan_6540;
                break;
            }
            case 4: {
                int3 = varbitclan_6527;
                break;
            }
            case 5: {
                int3 = varbitclan_6528;
                break;
            }
            case 6: {
                int3 = varbitclan_6529;
                break;
            }
            case 7: {
                int3 = varbitclan_6530;
                break;
            }
            case 8: {
                int3 = varbitclan_6531;
                break;
            }
            case 9: {
                int3 = varbitclan_6532;
                break;
            }
            case 10: {
                int3 = varbitclan_6533;
                break;
            }
            case 11: {
                int3 = varbitclan_6534;
                break;
            }
            case 12: {
                int3 = varbitclan_6535;
                break;
            }
            case 13: {
                int3 = varbitclan_6536;
                break;
            }
            case 14: {
                int3 = varbitclan_6537;
                break;
            }
            case 15: {
                int3 = varbitclan_6538;
                break;
            }
        };
        if ((int3 > 0)) {
            return 1;
        };
        return 0;
    };
    return 0;
}