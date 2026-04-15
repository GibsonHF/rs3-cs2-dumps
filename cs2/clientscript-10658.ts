//[proc,tostring_minutes]
function script10658(int0: int): string {
    if ((int0 < 2)) {
        return "a minute";
    };
    var int1 = (int0 / 60);
    var int0 = MODULO(int0, 60);
    var int2 = (int1 / 24);
    if ((int2 < 1)) {
        if ((int1 < 1)) {
            return `${inttostring(int0, 10)} minutes`;
        };
        if ((int1 == 1)) {
            if ((int0 == 1)) {
                return "1 hour, 1 minute";
            };
            return `1 hour, ${inttostring(int0, 10)} minutes`;
        };
        if ((int0 == 1)) {
            return `${inttostring(int1, 10)} hours, 1 minute`;
        };
        return `${inttostring(int1, 10)} hours, ${inttostring(int0, 10)} minutes`;
    };
    int1 = MODULO(int1, 24);
    if ((int2 == 1)) {
        if ((int1 < 1)) {
            if ((int0 == 1)) {
                return "1 day, 1 minute";
            };
            return `1 day, ${inttostring(int0, 10)} minutes`;
        };
        if ((int1 == 1)) {
            if ((int0 == 1)) {
                return "1 day, 1 hour, 1 minute";
            };
            return `1 day, 1 hour, ${inttostring(int0, 10)} minutes`;
        };
        if ((int0 == 1)) {
            return `1 day, ${inttostring(int1, 10)} hours, 1 minute`;
        };
        return `1 day, ${inttostring(int1, 10)} hours, ${inttostring(int0, 10)} minutes`;
    };
    if ((int1 < 1)) {
        if ((int0 == 1)) {
            return `${inttostring(int2, 10)} days, 0 hours, 1 minute`;
        };
        return `${inttostring(int2, 10)} days, 0 hours, ${inttostring(int0, 10)} minutes`;
    };
    if ((int1 == 1)) {
        if ((int0 == 1)) {
            return `${inttostring(int2, 10)} days, 1 hour, 1 minute`;
        };
        return `${inttostring(int2, 10)} days, 1 hour, ${inttostring(int0, 10)} minutes`;
    };
    if ((int0 == 1)) {
        return `${inttostring(int2, 10)} days, ${inttostring(int1, 10)} hours, 1 minute`;
    };
    return `${inttostring(int2, 10)} days, ${inttostring(int1, 10)} hours, ${inttostring(int0, 10)} minutes`;
}