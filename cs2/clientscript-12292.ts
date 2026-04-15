//
function script12292(string0: string): string {
    var int0 = -1;
    var int1 = STRING_LENGTH(string0);
    while (((++int0 < int1) && (STRING_INDEXOF_CHAR(string0, 32, int0) == int0))) {
    };
    return SUBSTRING(string0, int0, int1);
}