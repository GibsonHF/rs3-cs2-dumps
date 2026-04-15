//
function script9392(int0: component, int1: int, string0: string): int {
    var int2 = 5;
    var string1 = "";
    var int3 = 0;
    var int4 = STRING_LENGTH("<br>");
    int3 = STRING_INDEXOF_STRING(string0, "<br>", 0);
    if ((int3 == -1)) {
        script9393(int0, int2, int1, string0);
    } else {
        while ((STRING_LENGTH(string0) > 0)) {
            string1 = SUBSTRING(string0, 0, int3);
            var [int2, int1] = script9393(int0, int2, int1, string1);
            if ((int3 == STRING_LENGTH(string0))) {
                var string0 = "";
            } else {
                string0 = SUBSTRING(string0, (int3 + int4), STRING_LENGTH(string0));
                int3 = STRING_INDEXOF_STRING(string0, "<br>", 0);
                if ((int3 == -1)) {
                    int3 = STRING_LENGTH(string0);
                };
            };
        };
    };
    int1 = (int1 + (32 + 5));
    return int1;
}