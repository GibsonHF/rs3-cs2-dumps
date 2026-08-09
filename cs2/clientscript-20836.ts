//
function script20836(): void {
    IF_SETONVARCSTRTRANSMIT(callback(script20836, 8452, 8453, 8454, 8455, 8456, 8457, 8458, 8459, 8460, 8461, 8462, 8463, 8464, 8465, 8466, 8467, 8468, 8469, 8470, 8471, 20), comp(1511, 2));
    CC_DELETEALL(comp(1511, 6));
    var int0 = 0;
    var int1 = 0;
    var string0 = "";
    while ((int0 < 20)) {
        string0 = script20837(int0);
        if ((STRING_LENGTH(string0) > 0)) {
            script7852(99024902, int0, 0, int1, 0, 0, 0, 24, 1, 0, 4476, string0);
            CC_SETOP(1, "Join");
            int1 = (int1 + 28);
        };
        int0 = (int0 + 1);
    };
    if ((int1 == 0)) {
        script20480(99024902, 0, 0, 0, 1, 1, 0, 0, 1, 1, 2100, "No public homesteads are currently available.", -1, 1, 1);
    };
    script19620(99024903, 99024902, int1, -1, 0, 0, 0, 0);
    return;
}