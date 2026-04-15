//
function script4980(int0: int): int {
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
                int3 = varbitclan_6526;
                break;
            }
            case 2: {
                int3 = varbitclan_6522;
                break;
            }
            case 3: {
                int3 = varbitclan_6523;
                break;
            }
            case 4: {
                int3 = varbitclan_6510;
                break;
            }
            case 5: {
                int3 = varbitclan_6511;
                break;
            }
            case 6: {
                int3 = varbitclan_6512;
                break;
            }
            case 7: {
                int3 = varbitclan_6513;
                break;
            }
            case 8: {
                int3 = varbitclan_6514;
                break;
            }
            case 9: {
                int3 = varbitclan_6515;
                break;
            }
            case 10: {
                int3 = varbitclan_6516;
                break;
            }
            case 11: {
                int3 = varbitclan_6517;
                break;
            }
            case 12: {
                int3 = varbitclan_6518;
                break;
            }
            case 13: {
                int3 = varbitclan_6519;
                break;
            }
            case 14: {
                int3 = varbitclan_6520;
                break;
            }
            case 15: {
                int3 = varbitclan_6521;
                break;
            }
        };
        if ((int3 > 0)) {
            return 4;
        };
        return 3;
    };
    return 0;
}