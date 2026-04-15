//
function script15830(): string {
    switch (varplayer_1831) {
        case 28700: {
            return `${enum_getvalue(0, 36, 7541 as cs2enum, varbitplayer_18595)}${enum_getvalue(0, 36, 7542 as cs2enum, varbitplayer_18596)}${enum_getvalue(0, 36, 7543 as cs2enum, varbitplayer_18597)}`;
        }
        case 29438:
        case 29439:
        case 29440: {
            return enum_getvalue(0, 36, 7942 as cs2enum, varbitplayer_20386);
        }
        case 23030: {
            if ((varplayer_1793 != -1 as obj)) {
                return OC_NAME(varplayer_1793);
            };
            break;
        }
    };
    if ((script4157() == 5)) {
        return struct_getparam(npc_getparam(item_getparam(varplayer_1831, 74), 5051), 2533);
    };
    var string0 = enum_getvalue(32, 36, 1279 as cs2enum, varplayer_1784);
    if ((strcmp(string0, "Animal") == 0)) {
        if ((item_getparam(varplayer_1831, 74) != -1 as npc)) {
            string0 = enum_getvalue(32, 36, 1279 as cs2enum, item_getparam(varplayer_1831, 74));
            if ((strcmp(string0, "Animal") == 0)) {
                string0 = OC_NAME(varplayer_1831);
            };
        } else {
            string0 = OC_NAME(varplayer_1831);
        };
    };
    return string0;
}