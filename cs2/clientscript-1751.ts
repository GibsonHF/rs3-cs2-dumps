//[proc,durationmes]
function script1751(int0: int): string {
    if ((int0 < 2)) {
        return "in a minute";
    };
    var int1 = (int0 / 60);
    var int0 = MODULO(int0, 60);
    if ((int1 > 1)) {
        if ((int0 > 1)) {
            return `in ${inttostring(int1, 10)} hours ${inttostring(int0, 10)} minutes`;
        };
        if ((int0 == 1)) {
            return `in ${inttostring(int1, 10)} hours 1 minute`;
        };
        return `in ${inttostring(int1, 10)} hours`;
    };
    if ((int1 == 1)) {
        if ((int0 > 1)) {
            return `in 1 hour ${inttostring(int0, 10)} minutes`;
        };
        if ((int0 == 1)) {
            return "in 1 hour 1 minute";
        };
        return "in 1 hour";
    };
    return `in ${inttostring(int0, 10)} minutes`;
}