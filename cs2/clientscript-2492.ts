//
function script2492(int0: int, int1: unknown_int): unknown_string {
    var int2 = MODULO(int0, 10);
    var int3 = MODULO((int0 / 10), 10);
    switch (MAP_LANG()) {
        case 0: {
            if ((int3 == 1)) {
                return "th";
            };
            if ((int2 == 1)) {
                return "st";
            };
            if ((int2 == 2)) {
                return "nd";
            };
            if ((int2 == 3)) {
                return "rd";
            };
            return "th";
        }
        case 1: {
            return ".";
        }
        case 2: {
            if ((int0 == 1)) {
                if ((int1 == 1)) {
                    return "re";
                };
                return "er";
            };
            return "e";
        }
        case 3:
        case 6: {
            if ((int1 == 1)) {
                return "a";
            };
            return "o";
        }
    };
    return "";
}