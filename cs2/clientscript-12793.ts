//
function script12793(int0: struct, int1: int, int2: unknown_int): string {
    if ((struct_getparam(int0, 7140) == 1)) {
        if ((int2 == 1)) {
            return "Claim X";
        };
        if ((int1 != -2147483648)) {
            if ((int1 < 2)) {
                return "Claim";
            };
            return `Claim ${inttostring(int1, 10)}`;
        };
        return "Claim All";
    };
    if ((struct_getparam(int0, 4645) == 1)) {
        if ((int2 == 1)) {
            return "Unlock X";
        };
        if ((int1 != -2147483648)) {
            if ((int1 < 2)) {
                return "Unlock";
            };
            return `Unlock ${inttostring(int1, 10)}`;
        };
        return "Unlock All";
    };
    if ((int2 == 1)) {
        return "Buy X";
    };
    if ((int1 != -2147483648)) {
        return `Buy ${inttostring(int1, 10)}`;
    };
    return "Buy All";
}