//
function script13575(int0: int, int1: fontmetrics, int2: int, string0: string): string {
    if ((strcmp(string0, "") == 0)) {
        return string0;
    };
    var string1 = "";
    var int3 = 0;
    if ((PARAHEIGHT(string0, int0, int1) > int2)) {
        while ((int3 < int2)) {
            if ((strcmp(string1, "") == 0)) {
                string1 = PARALINE(string0, int0, int1, int3);
            } else {
                string1 = strconcat(string1, strconcat(" ", PARALINE(string0, int0, int1, int3)));
            };
            int3 = (int3 + 1);
        };
        if ((strcmp(string1, "") != 0)) {
            if ((STRING_LENGTH(string1) > STRING_LENGTH("(...)"))) {
                string1 = SUBSTRING(string1, 0, (STRING_LENGTH(string1) - STRING_LENGTH("(...)")));
            };
            string1 = strconcat(string1, " (...)");
        };
        return string1;
    };
    return string0;
}