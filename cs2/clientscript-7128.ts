//
function script7128(int0: obj, int1: int, int2: int): string {
    var int3 = -1 as stat;
    var string0 = "null";
    if ((int1 == 0)) {
        return "";
    };
    if ((int1 < 61)) {
        int3 = enum_getvalue(0, 17, 681 as cs2enum, int1);
        if ((int3 != -1 as stat)) {
            return `${enum_getvalue(0, 36, 108 as cs2enum, int1)} Level`;
        };
    };
    switch (int1) {
        case 61: {
            return `Complete Quest: '${script2103(enum_getvalue(0, 3, 2252 as cs2enum, int2))}'`;
        }
        case 62: {
            return script7164(int2);
        }
        case 64: {
            return script14718(int2);
        }
        case 63: {
            return script12162(int2);
        }
        case 65: {
            return script14632(script14625(int2));
        }
        case 66: {
            return script14687(script14685(int2));
        }
    };
    return "";
}