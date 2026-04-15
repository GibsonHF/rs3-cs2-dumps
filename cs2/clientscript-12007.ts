//
function script12007(int0: struct): int {
    if ((STAT_BASE(5 as stat) < struct_getparam(int0, 2807))) {
        return 0;
    };
    if (((MAP_MEMBERS() == 0) && (struct_getparam(int0, 2809) == 1))) {
        return 0;
    };
    if (((struct_getparam(int0, 6743) != -1 as stat) && (STAT_BASE(struct_getparam(int0, 6743)) < struct_getparam(int0, 6744)))) {
        return 0;
    };
    if (((struct_getparam(int0, 6745) != -1 as stat) && (STAT_BASE(struct_getparam(int0, 6745)) < struct_getparam(int0, 6746)))) {
        return 0;
    };
    if (((struct_getparam(int0, 6747) != -1 as stat) && (STAT_BASE(struct_getparam(int0, 6747)) < struct_getparam(int0, 6748)))) {
        return 0;
    };
    if (((struct_getparam(int0, 6749) != -1 as stat) && (STAT_BASE(struct_getparam(int0, 6749)) < struct_getparam(int0, 6750)))) {
        return 0;
    };
    switch (int0) {
        case 14574: {
            return varbitplayer_2369;
        }
        case 35361: {
            return varbitplayer_34891;
        }
        case 35362: {
            return varbitplayer_34892;
        }
        case 35360: {
            return varbitplayer_34890;
        }
        case 29241:
        case 32274:
        case 32272:
        case 32273:
        case 32275:
        case 32278:
        case 32276: {
            return script42(script20177());
        }
        case 14570:
        case 14571:
        case 14569:
        case 14568: {
            if ((varbitplayer_11319 != 8)) {
                return 0;
            };
            break;
        }
        case 48361:
        case 48362:
        case 48363: {
            return varbitplayer_53588;
        }
        case 48365:
        case 48366:
        case 48367: {
            return varbitplayer_53589;
        }
        case 48368: {
            return varbitplayer_53590;
        }
        case 48370: {
            return varbitplayer_53591;
        }
        case 48371: {
            return varbitplayer_53592;
        }
        case 48373: {
            return varbitplayer_53593;
        }
        case 48374: {
            return varbitplayer_53594;
        }
        case 48375: {
            return varbitplayer_53595;
        }
        case 48376: {
            return varbitplayer_53596;
        }
        case 50077: {
            return varbitplayer_55824;
        }
        case 50228: {
            return varbitplayer_56017;
        }
    };
    return 1;
}