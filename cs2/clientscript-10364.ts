//
function script10364(int0: struct): int {
    CC_DELETEALL(comp(1524, 92));
    if ((int0 == -1 as struct)) {
        return 0;
    };
    var int1 = script8890(comp(1524, 92), comp(-1, 65535), int0, 0, 0);
    var int2 = int1;
    int1 = script10498(comp(1524, 92), comp(-1, 65535), comp(-1, 65535), int0, 0, int1, 1);
    var string0 = struct_getparam(int0, 8050);
    if ((strcmp(string0, "") != 0)) {
        int1 = script8891(comp(1524, 92), string0, 0, int1, 0);
    };
    return MAX(int1, 40);
}