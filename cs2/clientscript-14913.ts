//
function script14913(int0: number): string {
    if ((int0 == -1)) {
        return "";
    };
    var int1 = db_find_with_count(360721, int0, 0);
    var int2 = -1;
    var string0 = "";
    var string1 = "";
    var int3 = -1;
    int3 = (int3 + 1);
    while ((int3 < int1)) {
        int2 = dbrow_findnext();
        string0 = script14578(int2);
        if ((STRING_LENGTH(string0) > 0)) {
            string1 = `${string1}${string0}, `;
        };
    };
    if ((STRING_LENGTH(string1) > 0)) {
        return SUBSTRING(string1, 0, (STRING_LENGTH(string1) - 2));
    };
    return "None";
}