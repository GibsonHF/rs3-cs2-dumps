//
function script17273(int0: int, int1: int): string {
    var string0 = "";
    var int2 = false;
    if ((int1 > 0)) {
        string0 = `${inttostring(int1, 10)}%`;
    };
    if ((int0 != 0)) {
        if ((int0 < 0)) {
            int2 = true;
        };
        if ((STRING_LENGTH(string0) > 0)) {
            string0 = `${string0} `;
        };
        string0 = `${string0}${TEXT_SWITCH(int2, "", "+")}${inttostring(int0, 10)}`;
    };
    return string0;
}