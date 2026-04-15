//
function script2601(): void {
    var string0 = "Membership";
    var int0 = 0;
    var string1 = "";
    var string2 = "";
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int2, int3, int1] = USERDETAIL_LOBBY_MEMBERSHIP();
    var string3 = FORMAT_DATETIME_FROM_MINUTES(int2);
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = -1;
    var string4 = "";
    if ((int1 == 1)) {
        string1 = "Subscription Active";
        string2 = "You have an active subscription. Use this button to view your account information. Make sure you play on a members' world to enjoy all of your members' benefits.";
        int7 = 2518;
    } else if ((PLAYERMEMBER() == true)) {
        int4 = (int3 / 1440);
        int5 = (MODULO(int3, 1440) / 60);
        int6 = MODULO(int3, 60);
        if ((int4 < 7)) {
            int0 = 2;
        } else if ((int4 < 13)) {
            int0 = 1;
        };
        if ((((int4 + int5) + int6) != 0)) {
            string4 = ` (in ${script4582(int4, int5, int6)})`;
        };
        string1 = `Expires ${string3}`;
        string2 = `Your membership will expire on ${string3}${string4}. Renew now to avoid losing member status. Use this button to renew.`;
        int7 = 2517;
    } else {
        int0 = 1;
        string1 = "Not a Member";
        string2 = "You are not a member. Members get loads of extra benefits and features. Use this button to become a member.";
        int7 = 2517;
    };
    if ((int0 == 2)) {
        script10017(comp(906, 136), -1, 6, 2, "null", comp(-1, 65535));
    } else if ((int0 == 1)) {
        script10017(comp(906, 136), -1, 6, 1, "null", comp(-1, 65535));
    };
    if ((PLAYERMEMBER() == true)) {
        script13959(comp(906, 138), 28696 as struct, false);
    } else {
        script13959(comp(906, 138), 28697 as struct, false);
    };
    script10059(string0, string1, string2, 59375753);
    IF_SETONBUTTONCLICK(callback(script3088, int7), 59375753);
    return;
}