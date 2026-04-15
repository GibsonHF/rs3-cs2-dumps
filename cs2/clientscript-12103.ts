//
function script12103(int0: obj, int1: int): [string, graphic, obj] {
    switch (int0) {
        case 36365: {
            return [script12160(int1), -1 as obj];
        }
        case 47066: {
            return [`${enum_getvalue(0, 36, 15092 as cs2enum, int1)} inside metal bank`, -1 as graphic, enum_getvalue(0, 33, 15093 as cs2enum, int1)];
        }
        case 47067: {
            return [`${OC_NAME(enum_getvalue(0, 33, 2503 as cs2enum, int1))} inside ore box`, -1 as graphic, enum_getvalue(0, 33, 2503 as cs2enum, int1)];
        }
        case 58252: {
            return [`${OC_NAME(enum_getvalue(0, 33, 6544 as cs2enum, int1))} inside wood box`, -1 as graphic, enum_getvalue(0, 33, 6544 as cs2enum, int1)];
        }
        case 37411: {
            return ["Dungeoneering tokens", 2184 as graphic, -1 as obj];
        }
        case 20139:
        case 25064:
        case 25060:
        case 20135:
        case 20143:
        case 20151:
        case 25068:
        case 25058:
        case 20147:
        case 20155:
        case 20163:
        case 25066:
        case 25062:
        case 20159:
        case 20167:
        case 30005:
        case 30008:
        case 30011: {
            return [`${OC_NAME(int0)} (new)`, -1 as graphic, int0];
        }
        case 20141:
        case 24984:
        case 24978:
        case 20137:
        case 20145:
        case 20153:
        case 24990:
        case 24975:
        case 20149:
        case 20157:
        case 20165:
        case 24987:
        case 24981:
        case 20161:
        case 20169:
        case 30007:
        case 30010:
        case 30013: {
            return [`${OC_NAME(int0)} (used)`, -1 as graphic, int0];
        }
        case 24983:
        case 24977:
        case 24989:
        case 24974:
        case 24980:
        case 24986: {
            return ["", -1 as graphic, int0];
        }
    };
    if ((OC_UNCERT(int0) != int0)) {
        return [`${OC_NAME(int0)} (noted)`, -1 as graphic, int0];
    };
    return [OC_NAME(int0), -1 as graphic, int0];
}