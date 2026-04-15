//
function script4906(int0: int): void {
    var int1 = -1 as struct;
    var int2 = -1 as struct;
    var int3 = pos(0,0,0,0,0);
    var int4 = script4968(int0);
    var int5 = -1;
    var int6 = -1;
    var int7 = 1;
    if ((varclient_1794 == 1)) {
        int7 = 0;
    };
    var int8 = 0;
    var int9 = 0;
    var int10 = comp(-1, 65535);
    if ((CLANPROFILE_FIND() == 1)) {
        if ((varclient_1794 == 0)) {
            int1 = script5116(varbitclan_6524, varbitclan_6507);
            int2 = script5117(varbitclan_6524, varbitclan_6507);
        } else {
            int1 = script5116(varbitclan_6661, varbitclan_6507);
            int2 = script5117(varbitclan_6661, varbitclan_6507);
        };
        if ((int1 == -1 as struct)) {
            return;
        };
        if ((int2 == -1 as struct)) {
            return;
        };
        int8 = script4978(int0);
        if ((int8 < 4)) {
            int8 = int0;
        };
        if ((int7 == 1)) {
            int9 = int0;
        } else {
            int9 = int8;
        };
        switch (int9) {
            case 4: {
                int5 = struct_getparam(int1, 1655);
                int6 = struct_getparam(int1, 1656);
                break;
            }
            case 5: {
                int5 = struct_getparam(int1, 1661);
                int6 = struct_getparam(int1, 1662);
                break;
            }
            case 6: {
                int5 = struct_getparam(int1, 1667);
                int6 = struct_getparam(int1, 1668);
                break;
            }
            case 7: {
                int5 = struct_getparam(int1, 1673);
                int6 = struct_getparam(int1, 1674);
                break;
            }
            case 8: {
                int5 = struct_getparam(int1, 1679);
                int6 = struct_getparam(int1, 1680);
                break;
            }
            case 9: {
                int5 = struct_getparam(int1, 1685);
                int6 = struct_getparam(int1, 1686);
                break;
            }
            case 10: {
                int5 = struct_getparam(int1, 1691);
                int6 = struct_getparam(int1, 1692);
                break;
            }
            case 11: {
                int5 = struct_getparam(int1, 1697);
                int6 = struct_getparam(int1, 1698);
                break;
            }
            case 12: {
                int5 = struct_getparam(int1, 1703);
                int6 = struct_getparam(int1, 1704);
                break;
            }
            case 13: {
                int5 = struct_getparam(int1, 1709);
                int6 = struct_getparam(int1, 1710);
                break;
            }
            case 14: {
                int5 = struct_getparam(int1, 1715);
                int6 = struct_getparam(int1, 1716);
                break;
            }
            case 15: {
                int5 = struct_getparam(int1, 1721);
                int6 = struct_getparam(int1, 1722);
                break;
            }
            case 3: {
                int5 = struct_getparam(int1, 1649);
                int6 = struct_getparam(int1, 1650);
                break;
            }
            case 2: {
                int5 = (struct_getparam(int1, 1627) + 14);
                int6 = struct_getparam(int1, 1628);
                break;
            }
            case 1: {
                int5 = (struct_getparam(int1, 1627) - 14);
                int6 = struct_getparam(int1, 1628);
                break;
            }
            case 16: {
                int3 = struct_getparam(int2, 1723);
                break;
            }
            case 17: {
                int3 = struct_getparam(int2, 1726);
                break;
            }
            case 18: {
                int3 = struct_getparam(int2, 1729);
                break;
            }
            case 19: {
                int3 = struct_getparam(int2, 1732);
                break;
            }
            case 20: {
                int3 = struct_getparam(int2, 1735);
                break;
            }
            case 21: {
                int3 = struct_getparam(int2, 1738);
                break;
            }
            case 22: {
                int3 = struct_getparam(int2, 1741);
                break;
            }
            case 23: {
                int3 = struct_getparam(int2, 1744);
                break;
            }
            case 24: {
                int3 = struct_getparam(int2, 1747);
                break;
            }
            case 25: {
                int3 = struct_getparam(int2, 1750);
                break;
            }
            case 26: {
                int3 = struct_getparam(int2, 1753);
                break;
            }
            case 27: {
                int3 = struct_getparam(int2, 1756);
                break;
            }
            case 28: {
                int3 = struct_getparam(int2, 1759);
                break;
            }
            case 29: {
                int3 = struct_getparam(int2, 1762);
                break;
            }
            case 30: {
                int3 = struct_getparam(int2, 1765);
                break;
            }
            case 31: {
                int3 = struct_getparam(int2, 1768);
                break;
            }
            case 32: {
                int3 = struct_getparam(int2, 1771);
                break;
            }
            case 33: {
                int3 = struct_getparam(int2, 1772);
                break;
            }
            case 34: {
                int3 = struct_getparam(int2, 1775);
                break;
            }
            case 49: {
                int3 = struct_getparam(int1, 1635);
                break;
            }
            case 35: {
                int3 = struct_getparam(int2, 1778);
                break;
            }
            case 36: {
                int3 = struct_getparam(int2, 1779);
                break;
            }
            case 37: {
                int3 = struct_getparam(int2, 1780);
                break;
            }
            case 38: {
                int3 = struct_getparam(int2, 1781);
                break;
            }
            case 39: {
                int3 = struct_getparam(int2, 1782);
                break;
            }
            case 40: {
                int3 = struct_getparam(int2, 1783);
                break;
            }
            case 41: {
                int3 = struct_getparam(int2, 1784);
                break;
            }
            case 42: {
                int3 = struct_getparam(int2, 1785);
                break;
            }
            case 43: {
                int3 = struct_getparam(int2, 1786);
                break;
            }
            case 44: {
                int3 = struct_getparam(int2, 1787);
                break;
            }
            case 45: {
                int3 = struct_getparam(int2, 1788);
                break;
            }
            case 46: {
                int3 = struct_getparam(int2, 1789);
                break;
            }
            case 47: {
                int3 = struct_getparam(int2, 1790);
                break;
            }
            case 48: {
                int3 = struct_getparam(int2, 1791);
                break;
            }
        };
        if (((int3 != pos(0,0,0,0,0)) && (int3 != -1 as coordgrid))) {
            [int5, int6] = script4909(int3);
            int5 = (int5 + 14);
            int6 = (int6 + 3);
        };
        IF_SETPOSITION(int5, int6, 0, 0, int4);
        int10 = script5213(int0);
        if ((int10 != comp(-1, 65535))) {
            IF_SETPOSITION(int5, int6, 0, 0, int10);
        };
    };
    return;
}