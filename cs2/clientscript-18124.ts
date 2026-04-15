//
function script18124(int0: int): unknown_int {
    if ((varplayer_11437 != comp(-1, 65535))) {
        if ((IF_GETHIDE(comp(1228, 18)) == false)) {
            IF_TRIGGEROP(comp(1228, 1), enum_getreverseindex(9, 0, 16362 as cs2enum, 55836694, 0), 1);
            return 1;
        };
        IF_TRIGGEROP(comp(1228, 4), -1, 1);
        return 1;
    };
    switch (int0) {
        case 0: {
            if ((IF_GETHIDE(comp(1227, 46)) == false)) {
                IF_TRIGGEROP(comp(1227, 66), 1, 1);
                return 1;
            };
            break;
        }
        case 1: {
            if ((IF_GETHIDE(comp(1226, 15)) == false)) {
                script18091();
                return 1;
            };
            break;
        }
        case 3: {
            break;
        }
        case 2: {
            if ((IF_GETHIDE(comp(891, 3)) == false)) {
                IF_TRIGGEROP(comp(891, 8), -1, 1);
                return 1;
            };
            break;
        }
    };
    return 0;
}