//
function script2601(): void {
    var string0 = "";
    var int0 = 0;
    var string1 = "";
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int2, int3, int1] = USERDETAIL_LOBBY_MEMBERSHIP();
    var string2 = FORMAT_DATETIME_FROM_MINUTES(int2);
    var int4 = 0;
    var int5 = -1;
    var string3 = "";
    if ((int1 == 1)) {
        string0 = "Your membership is active.";
        string1 = "Use this button for more detail and to manage your membership.";
        switch (PLATFORMTYPE()) {
            case 0:
            case 5: {
                int5 = 2518;
                break;
            }
            default: {
                int5 = 2517;
                break;
            }
        };
    } else if ((PLAYERMEMBER() == true)) {
        int4 = (int3 / 1440);
        if ((int4 < 7)) {
            int0 = 2;
        } else if ((int4 < 13)) {
            int0 = 1;
        };
        if ((int4 == 0)) {
            string0 = "You have less than 1 day of membership remaining.";
        } else {
            string0 = `You have ${inttostring(int4, 10)} ${script4583(int4, "day", "days")} of membership remaining.`;
        };
        string1 = "Use this button to renew your membership.";
        int5 = 2517;
    } else {
        int0 = 1;
        string0 = "You are not a member.";
        string1 = "Use this button to become a member.";
        int5 = 2517;
    };
    if ((int0 == 2)) {
        script10017(59375752, -1, 6, 2, "null", -1);
    } else if ((int0 == 1)) {
        script10017(59375752, -1, 6, 1, "null", -1);
    };
    if ((PLAYERMEMBER() == true)) {
        script13959(59375754, 28696, 0);
    } else {
        script13959(59375754, 28697, 0);
    };
    script10059(string0, "", string1, 59375753);
    IF_SETONBUTTONCLICK(callback(script3088, int5), 59375753);
    return;
}