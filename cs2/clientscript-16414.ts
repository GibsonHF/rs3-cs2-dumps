//
function script16414(int0: graphic): graphic {
    switch (int0) {
        case 21390: {
            if ((MAP_LANG() == 2)) {
                return 21391 as graphic;
            };
            break;
        }
        case 21386: {
            if ((MAP_LANG() != 0)) {
                return -1 as graphic;
            };
            break;
        }
        case 18909: {
            switch (MAP_LANG()) {
                case 1: {
                    return 22325 as graphic;
                }
                case 2: {
                    return 22326 as graphic;
                }
                case 6: {
                    return 22327 as graphic;
                }
            };
            break;
        }
        case 27172: {
            switch (MAP_LANG()) {
                case 1: {
                    return 27169 as graphic;
                }
                case 2: {
                    return 27170 as graphic;
                }
                case 3: {
                    return 27171 as graphic;
                }
                case 6: {
                    return 27173 as graphic;
                }
            };
            break;
        }
        case 12219: {
            switch (MAP_LANG()) {
                case 1: {
                    return 12008 as graphic;
                }
                case 3: {
                    return 13020 as graphic;
                }
            };
            break;
        }
    };
    return int0;
}