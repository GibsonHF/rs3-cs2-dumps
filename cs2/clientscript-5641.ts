//
function script5641(int0: struct): string {
    var int1 = struct_getparam(int0, 7658);
    if ((int1 == 0)) {
        return "";
    };
    var int2 = 0;
    var int3 = 0;
    var string0 = "";
    if ((int1 >= 3600)) {
        int3 = (int1 / 3600);
        string0 = `<col=00ffff>${inttostring(int3, 10)}`;
        int2 = SCALE(MODULO(int1, 3600), 3600, 100);
        if ((int2 > 0)) {
            string0 = strconcat(string0, `.${inttostring(int2, 10)}`);
        };
        if (((int3 > 1) || (int2 > 0))) {
            string0 = strconcat(string0, " hours");
        } else {
            string0 = strconcat(string0, " hour");
        };
        return string0;
    };
    if ((int1 >= 60)) {
        int3 = (int1 / 60);
        string0 = `<col=00ffff>${inttostring(int3, 10)}`;
        int2 = SCALE(MODULO(int1, 60), 60, 100);
        if ((int2 > 0)) {
            string0 = strconcat(string0, `.${inttostring(int2, 10)}`);
        };
        if (((int3 > 1) || (int2 > 0))) {
            string0 = strconcat(string0, " minutes");
        } else {
            string0 = strconcat(string0, " minute");
        };
        return string0;
    };
    return `<col=00ffff>${inttostring(int1, 10)} seconds`;
}