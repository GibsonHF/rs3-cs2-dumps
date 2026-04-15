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
        if ((PLAYERMEMBER() == false)) {
        } else if ((((((int2 == 0) && (int1 < 2880)) && (RANDOM(2) == 0)) && (script13491(varplayer_6601) == 0)) && (varplayer_6681 >= varplayer_6680))) {
            switch (MAP_LANG()) {
                case 0: {
                    stack(29013);
                    stack(59441190);
                    IF_SETGRAPHIC();
                    break;
                }
                case 1: {
                    stack(29015);
                    stack(59441190);
                    IF_SETGRAPHIC();
                    break;
                }
                case 2: {
                    stack(29014);
                    stack(59441190);
                    IF_SETGRAPHIC();
                    break;
                }
                case 3: {
                    stack(29016);
                    stack(59441190);
                    IF_SETGRAPHIC();
                    break;
                }
            };
            IF_SETONCLICK(callback(script13252), comp(907, 38));
            script10592(59441186, 1);
            script10593(1);
        };
    };
    return;
}