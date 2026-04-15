//
function script2057(int0: struct, int1: unknown_int): string {
    if ((int0 == -1 as struct)) {
        return "No voyage struct!";
    };
    if ((int0 == 17069 as struct)) {
        return "No voyage selected!";
    };
    if ((int0 == 17071 as struct)) {
        if ((int1 == 0)) {
            return "Your ship has been damaged and requires a period of time in dry dock to recover.";
        };
        return "Ship repairs under way.";
    };
    var string0 = struct_getparam(int0, 2369);
    return string0;
}