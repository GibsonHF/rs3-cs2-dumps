//
function script454(int0: int, int1: int, int2: unknown_int, int3: unknown_int, string0: string, string1: string): void {
    var string2 = "";
    CC_SETPOSITION(0, int1, 0, 0);
    if ((script6431() == false)) {
        CC_SETSIZE(int0, 19, 0, 0);
    } else {
        CC_SETSIZE(int0, 27, 0, 0);
    };
    CC_SETTEXTALIGN(0, 1, 0);
    if ((strcmp(string0, string1) != 0)) {
        CC_SETOPBASE(string0);
        CC_CLEAROPS();
        if ((FRIEND_TEST(string0) == 1)) {
            CC_SETOP(1, "Message");
            CC_SETOP(7, "Remove friend");
        } else if ((IGNORE_TEST(string0) == 1)) {
            CC_SETOP(8, "Remove ignore");
        } else {
            CC_SETOP(5, "Add friend");
            CC_SETOP(6, "Add ignore");
        };
        if ((int3 == 1)) {
            CC_SETOP(9, "Temp-ban");
        };
        if ((int2 == 1)) {
            CC_SETOP(4, "Invite to group");
        };
        CC_SETOP(10, "Join");
        CC_SETONOP(callback(script4472, string0, -2147483644, -2147483643));
    } else {
        CC_CLEAROPS();
        CC_SETONOP(callback());
    };
    string2 = `   ${string0}`;
    if ((STRINGWIDTH(string2, 26 as fontmetrics) > int0)) {
        while (((STRINGWIDTH(`${string2}...`, 26 as fontmetrics) > int0) && (STRING_LENGTH(string2) > 0))) {
            string2 = SUBSTRING(string2, 0, (STRING_LENGTH(string2) - 1));
        };
        string2 = `${string2}...`;
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
        CC_SETONMOUSELEAVE(callback(script8805));
    };
    CC_SETTEXT(string2);
    CC_SETTEXTSHADOW(true);
    CC_SETLINKACTIVECLANCHANNEL(CC_GETID());
    CC_SETHIDE(false);
    return;
}