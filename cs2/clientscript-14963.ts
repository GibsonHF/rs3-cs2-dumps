//
function script14963(int0: number): string {
    if ((int0 == -1)) {
        return "";
    };
    var string0 = dbrow_getfield(int0, 270416, 0);
    if ((STRING_LENGTH(string0) > 0)) {
        return string0;
    };
    var int1 = dbrow_getfield(int0, 270400, 0);
    if ((int1 != -1)) {
        return OC_NAME(int1);
    };
    return "";
}