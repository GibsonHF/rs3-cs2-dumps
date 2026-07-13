//
function script12263(int0: number): string {
    if ((int0 == -1 as dbrow)) {
        return "";
    };
    var int1 = dbrow_getfield(int0, 1515776, 0);
    var string0 = dbrow_getfield(int0, 1515824, 0);
    if ((STRING_LENGTH(string0) > 0)) {
        return string0;
    };
    if ((int1 == -1 as obj)) {
        return "";
    };
    return `Learn: ${OC_NAME(int1)}`;
}