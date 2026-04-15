//
function script12107(int0: component): void {
    var int1 = IF_GETWIDTH(int0);
    var string0 = "Turn off Active Prayers";
    if ((script12015(int0) == 1)) {
        if ((STRINGWIDTH(string0, 209 as fontmetrics) > int1)) {
            string0 = "Turn off";
            if ((STRINGWIDTH(string0, 209 as fontmetrics) > int1)) {
                string0 = "Off";
            };
        };
    } else {
        string0 = "Activate Quick Prayers";
        if ((STRINGWIDTH(string0, 209 as fontmetrics) > int1)) {
            string0 = "Activate QP";
            if ((STRINGWIDTH(string0, 209 as fontmetrics) > int1)) {
                string0 = "QP";
            };
        };
    };
    IF_SETTEXT(string0, int0);
    return;
}