//
function script17455(int0: unknown_int, int1: unknown_int): npc_uid {
    switch (int0) {
        case 48302:
        case 48303: {
            switch (int1) {
                case 1: {
                    return varplayer_10992;
                }
            };
            break;
        }
        case 48304:
        case 48305: {
            switch (int1) {
                case 1: {
                    return varplayer_11004;
                }
            };
            break;
        }
        case 48306:
        case 48307: {
            switch (int1) {
                default: {
                }
            };
            return varplayer_11016;
        }
        case 31820:
        case 32342: {
            switch (int1) {
                default: {
                }
            };
            return varplayer_11818;
        }
    };
    return -1 as npc_uid;
}