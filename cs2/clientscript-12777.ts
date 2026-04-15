//
function script12777(int0: dbrow, int1: component, int2: int): void {
    var string0 = script14963(int0);
    if ((int0 == 2274 as dbrow)) {
        string0 = strconcat(string0, `: ${TOSTRING_LOCALISED((script14965(int0) * 10), 1)}`);
    } else {
        string0 = strconcat(string0, `: ${TOSTRING_LOCALISED(script14965(int0), 1)}`);
    };
    script3877(string0, int1, int2);
    return;
}