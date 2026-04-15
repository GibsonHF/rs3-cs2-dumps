//
function script20299(int0: component, int1: int, int2: achievement): void {
    var string0 = "";
    var int3 = script20301(int2);
    if ((int3 != -1 as quest)) {
        string0 = `Requirements to Unlock:<br>${script2126(int3)}`;
    } else {
        string0 = script10988(int2);
    };
    if ((STRING_LENGTH(string0) <= 0)) {
        return;
    };
    if ((CC_FIND(int0, int1) == 1)) {
        script3537(string0);
        if ((script6431() == true)) {
            script426(string0, int0, int1, 0);
        } else {
            script8800(string0, int0, int1);
        };
    };
    return;
}