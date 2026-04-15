//
function script5903(): void {
    var string0 = script2332(varclient_2758, " ", "");
    var string1 = script2332(varclient_2759, " ", "");
    var string2 = LOWERCASE(string0);
    var string3 = LOWERCASE(string1);
    if ((STRING_LENGTH(varclient_2758) < 1)) {
        script426("You need to enter bug information before you can submit your bug.", comp(1405, 10), -1, 0);
        return;
    };
    if ((STRING_LENGTH(varclient_2759) < 1)) {
        script426("You need to enter bug reproduction steps before you can submit your bug.", comp(1405, 10), -1, 0);
        return;
    };
    if (((STRING_LENGTH(REMOVETAGS(varclient_2758)) > 500) || (STRING_LENGTH(REMOVETAGS(varclient_2759)) > 500))) {
        script426("Your bug information and reproduction steps can only be 500 characters long.", comp(1405, 10), -1, 0);
        return;
    };
    var int0 = SCALE(unk11085(string0, string2), STRING_LENGTH(string0), 100);
    if ((int0 <= 90)) {
        int0 = SCALE(unk11085(string1, string3), STRING_LENGTH(string1), 100);
    };
    if ((int0 > 90)) {
        script7660();
        varclient_2758 = "";
        varclient_2759 = "";
        varbitplayer_18337 = 0;
        varbitplayer_18336 = 0;
        script13463("<col=FF00>Thank you for submitting your bug report.");
        return;
    };
    var int1 = -1;
    switch (varbitplayer_18337) {
        case 1: {
            if ((script20117(varplayer_12314) != -1 as dbrow)) {
                int1 = 44;
            } else {
                int1 = 42;
            };
            unk11084(int1, REMOVETAGS(varclient_2758), REMOVETAGS(varclient_2759));
            break;
        }
        case 2: {
            if ((script20117(varplayer_12314) != -1 as dbrow)) {
                int1 = 45;
            } else {
                int1 = 43;
            };
            unk11084(int1, REMOVETAGS(varclient_2758), REMOVETAGS(varclient_2759));
            break;
        }
        default: {
            unk11084(0, REMOVETAGS(varclient_2758), REMOVETAGS(varclient_2759));
            break;
        }
    };
    varclient_2758 = "";
    varclient_2759 = "";
    varbitplayer_18337 = 0;
    varbitplayer_18336 = 0;
    script7660();
    script13463("<col=FF00>Thank you for submitting your bug report.");
    return;
}