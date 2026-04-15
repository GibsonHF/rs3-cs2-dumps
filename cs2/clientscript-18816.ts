//
function script18816(int0: obj, int1: int): string {
    var string0 = "";
    if ((int1 > 1)) {
        string0 = `${inttostring(int1, 10)} x ${OC_NAME(int0)}`;
    } else {
        string0 = OC_NAME(int0);
    };
    return string0;
}