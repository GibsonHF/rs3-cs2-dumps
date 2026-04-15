//
function script19391(string0: string): int {
    var int0 = 0;
    var int1 = ACTIVECLANCHANNEL_GETUSERCOUNT();
    var string1 = "";
    while ((int0 < int1)) {
        string1 = ACTIVECLANCHANNEL_GETUSERDISPLAYNAME(int0);
        if ((strcmp(string1, string0) == 0)) {
            return ACTIVECLANCHANNEL_GETUSERWORLD(int0);
        };
        int0 = (int0 + 1);
    };
    return -1;
}