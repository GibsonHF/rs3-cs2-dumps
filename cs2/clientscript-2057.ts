//
function script2057(int0: number, int1: number): string {
    if ((int0 == -1)) {
        return "No voyage struct!";
    };
    if ((int0 == 17069)) {
        return "No voyage selected!";
    };
    if ((int0 == 17071)) {
        if ((int1 == 0)) {
            return "Your ship has been damaged and requires a period of time in dry dock to recover.";
        };
        return "Ship repairs under way.";
    };
    var string0 = struct_getparam(int0, 2369);
    return string0;
}