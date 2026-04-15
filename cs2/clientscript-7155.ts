//
function script7155(): int {
    var int0 = script1432();
    var int1 = STAT_BASE(18 as stat);
    if ((MAP_MEMBERS() == 1)) {
        if ((((int0 >= 120) && (int1 >= 90)) && (script13702(enum_getreverseindex(22, 0, 9962 as cs2enum, script7156(8), 0)) == 1))) {
            return 8;
        };
        if ((((int0 >= 120) && (int1 >= 85)) && (varbitplayer_25043 == 1))) {
            return 7;
        };
        if ((((int0 >= 110) && (int1 >= 75)) && (varbitplayer_1623 > 0))) {
            return 6;
        };
        if ((((int0 >= 100) && (int1 >= 50)) && (varplayer_2793 >= 15))) {
            return 5;
        };
        if ((((int0 >= 90) && (int1 >= 35)) && (varbitplayer_9054 >= 250))) {
            return 45;
        };
        if ((((int0 >= 75) && (int1 >= 1)) && (varplayer_2551 >= 6))) {
            return 4;
        };
        if ((((int0 >= 50) && (int1 >= 1)) && (varbitplayer_9663 == 1))) {
            return 2;
        };
        if ((((int0 >= 35) && (int1 >= 1)) && (varbitplayer_52844 >= 120))) {
            return 9;
        };
        if (((int0 >= 30) && (int1 >= 1))) {
            return 3;
        };
    };
    if ((script8042() == 1)) {
        return 1;
    };
    return 47;
}