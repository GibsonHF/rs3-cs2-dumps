//
function script5016(int0: int): void {
    var int1 = -1 as struct;
    var int2 = 0;
    var int3 = script4969(int0);
    var int4 = -1;
    var int5 = -1;
    if ((CLANPROFILE_FIND() == 1)) {
        int1 = script5116(varbitclan_6524, varbitclan_6507);
        if ((int1 == -1 as struct)) {
            return;
        };
        switch (int0) {
            case 4: {
                int4 = struct_getparam(int1, 1655);
                int5 = struct_getparam(int1, 1656);
                break;
            }
            case 5: {
                int4 = struct_getparam(int1, 1661);
                int5 = struct_getparam(int1, 1662);
                break;
            }
            case 6: {
                int4 = struct_getparam(int1, 1667);
                int5 = struct_getparam(int1, 1668);
                break;
            }
            case 7: {
                int4 = struct_getparam(int1, 1673);
                int5 = struct_getparam(int1, 1674);
                break;
            }
            case 8: {
                int4 = struct_getparam(int1, 1679);
                int5 = struct_getparam(int1, 1680);
                break;
            }
            case 9: {
                int4 = struct_getparam(int1, 1685);
                int5 = struct_getparam(int1, 1686);
                break;
            }
            case 10: {
                int4 = struct_getparam(int1, 1691);
                int5 = struct_getparam(int1, 1692);
                break;
            }
            case 11: {
                int4 = struct_getparam(int1, 1697);
                int5 = struct_getparam(int1, 1698);
                break;
            }
            case 12: {
                int4 = struct_getparam(int1, 1703);
                int5 = struct_getparam(int1, 1704);
                break;
            }
            case 13: {
                int4 = struct_getparam(int1, 1709);
                int5 = struct_getparam(int1, 1710);
                break;
            }
            case 14: {
                int4 = struct_getparam(int1, 1715);
                int5 = struct_getparam(int1, 1716);
                break;
            }
            case 15: {
                int4 = struct_getparam(int1, 1721);
                int5 = struct_getparam(int1, 1722);
                break;
            }
            case 3: {
                int4 = struct_getparam(int1, 1649);
                int5 = struct_getparam(int1, 1650);
                break;
            }
            case 102: {
                int4 = struct_getparam(int1, 1633);
                int5 = struct_getparam(int1, 1634);
                break;
            }
            case 103: {
                int4 = struct_getparam(int1, 1637);
                int5 = struct_getparam(int1, 1638);
                break;
            }
            case 100: {
                int4 = struct_getparam(int1, 1619);
                int5 = struct_getparam(int1, 1620);
                break;
            }
            case 101: {
                int4 = struct_getparam(int1, 1627);
                int5 = struct_getparam(int1, 1628);
                break;
            }
        };
        IF_SETPOSITION(int4, int5, 0, 0, int3);
    };
    return;
}