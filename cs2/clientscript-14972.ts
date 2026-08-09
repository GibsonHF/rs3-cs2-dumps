//
function script14972(int0: number): string {
    if ((int0 == -1)) {
        return "";
    };
    var int1 = dbrow_getfield(int0, 364624, 0);
    if ((int1 != -1 as obj)) {
        return OC_NAME(int1);
    };
    return "";
}