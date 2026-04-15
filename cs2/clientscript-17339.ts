//
function script17339(int0: struct, int1: graphic): graphic {
    switch (int0) {
        case 47197: {
            return script3918(47197 as struct);
        }
    };
    switch (int1) {
        case 28149: {
            switch (MAP_LANG()) {
                case 0: {
                    return 28149 as graphic;
                }
                case 1: {
                    return 28150 as graphic;
                }
                case 2: {
                    return 28157 as graphic;
                }
                case 3: {
                    return 28199 as graphic;
                }
            };
            break;
        }
        default: {
            return int1;
        }
    };
    return int1;
}