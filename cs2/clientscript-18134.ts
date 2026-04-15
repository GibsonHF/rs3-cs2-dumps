//
function script18134(int0: struct, int1: int): [unknown_int, string, int, string] {
    var string0 = "1 token";
    var string1 = "2 tokens";
    var string2 = " When you Claim Rewards, you will get this challenge's rewards, including XP in this challenge's skill.";
    var int2 = script14965(4971 as dbrow);
    var string3 = "";
    if ((int2 == 0)) {
        string3 = "You do not have any challenge tokens in your currency pouch. You can get challenge tokens from daily challenge weekly progress chests.";
        return [0, string3, int2, string0];
    };
    if (((script16442(int1) >= struct_getparam(int0, 2235)) && (script18262(int1) == 1))) {
        string3 = "You've already completed this challenge.";
        string3 = strconcat(string3, string2);
        return [0, string3, int2, string0];
    };
    if ((script16500(int1) == 1)) {
        if ((script16501(int1) == 0)) {
            string0 = string1;
            string3 = "Spend two challenge tokens to complete this extended challenge.";
        } else {
            string3 = "Spend a challenge token to complete the remainder of this extended challenge.";
        };
    } else {
        string3 = "Spend a challenge token to complete this challenge.";
    };
    string3 = strconcat(string3, string2);
    return [1, string3, int2, string0];
}