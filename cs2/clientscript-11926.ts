//
function script11926(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    if ((varclient_3905 == true)) {
        return;
    };
    if ((varplayer_6680 > 0)) {
        [int0, int1, int2] = USERDETAIL_LOBBY_MEMBERSHIP();
        if ((PLAYERMEMBER() == 0)) {
        } else if ((((((int2 == 0) && (int1 < 2880)) && (RANDOM(2) == 0)) && (script13491(varplayer_6601) == 0)) && (varplayer_6681 >= varplayer_6680))) {
            switch (MAP_LANG()) {
                case 0: {
                    IF_SETGRAPHIC(29013, 59441190);
                    break;
                }
                case 1: {
                    IF_SETGRAPHIC(29015, 59441190);
                    break;
                }
                case 2: {
                    IF_SETGRAPHIC(29014, 59441190);
                    break;
                }
                case 3: {
                    IF_SETGRAPHIC(29016, 59441190);
                    break;
                }
            };
            IF_SETONCLICK(callback(script13252), 59441190);
            script10592(59441186, 1);
            script10593(1);
        };
    };
    return;
}