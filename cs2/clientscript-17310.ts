//
function script17310(int0: unknown_int): npc {
    if ((GENDER() == 0)) {
        switch (varbitplayer_27126) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 7:
            case 8:
            case 9: {
                if ((int0 == 1)) {
                    return 30051 as npc;
                };
                return 30061 as npc;
            }
            case 4:
            case 5:
            case 6:
            case 10:
            case 11: {
                if ((int0 == 1)) {
                    return 30052 as npc;
                };
                return 30062 as npc;
            }
            case 13: {
                if ((int0 == 1)) {
                    return 30053 as npc;
                };
                return 30063 as npc;
            }
            case 37: {
                if ((int0 == 1)) {
                    return 30054 as npc;
                };
                return 30064 as npc;
            }
            case 38: {
                if ((int0 == 1)) {
                    return 30055 as npc;
                };
                return 30065 as npc;
            }
        };
        if ((int0 == 1)) {
            return 30051 as npc;
        };
        return 30061 as npc;
    };
    switch (varbitplayer_27126) {
        case 0:
        case 1:
        case 2:
        case 7:
        case 8:
        case 9: {
            if ((int0 == 1)) {
                return 30046 as npc;
            };
            return 30056 as npc;
        }
        case 3:
        case 4:
        case 5:
        case 6:
        case 10:
        case 11: {
            if ((int0 == 1)) {
                return 30047 as npc;
            };
            return 30057 as npc;
        }
        case 13: {
            if ((int0 == 1)) {
                return 30048 as npc;
            };
            return 30058 as npc;
        }
        case 37: {
            if ((int0 == 1)) {
                return 30049 as npc;
            };
            return 30059 as npc;
        }
        case 38: {
            if ((int0 == 1)) {
                return 30050 as npc;
            };
            return 30060 as npc;
        }
    };
    if ((int0 == 1)) {
        return 30046 as npc;
    };
    return 30056 as npc;
}