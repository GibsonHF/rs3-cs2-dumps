//
function script14632(int0: dbrow): string {
    if ((int0 == -1 as dbrow)) {
        return "";
    };
    var string0 = dbrow_getfield(int0, 368688, 0);
    if ((STRING_LENGTH(string0) != 0)) {
        return `Research: ${string0}`;
    };
    var int1 = dbrow_getfield(int0, 368832, 0);
    if ((int1 == -1 as obj)) {
        return "";
    };
    return `Research: ${OC_NAME(int1)}`;
}