//
function script9719(int0: obj, int1: int): void {
    if ((varclient_4079 == -1)) {
        return;
    };
    var string0 = "Bank";
    var string1 = "Claim to bank";
    var int2 = false;
    var string2 = "You do not have a prize to claim.";
    var string3 = "You do not have a prize to claim.";
    if ((varbitplayer_4323 <= 0)) {
        string2 = "You do not have a prize to claim.";
        string3 = "You do not have a prize to claim.";
        int2 = false;
    } else {
        string1 = "Claim to bank";
        switch (varclient_4079) {
            case 3: {
                if (((OC_MEMBERS(int0) == 1) && (MAP_MEMBERS() == 0))) {
                    string2 = "Claim your prize to your bank. This is a members-only prize, so you will need to subscribe to use it.";
                } else {
                    string2 = "Claim your prize to your bank.";
                };
                int2 = true;
                break;
            }
            case 4: {
                string3 = "Your bank doesn't have room for your prize at the moment.";
                string0 = "Bank Full";
                int2 = false;
                break;
            }
            case 11: {
                string2 = "Claim your prize to your bank.";
                string3 = "This prize cannot be banked.";
                string0 = "Can't Bank";
                break;
            }
            case 14: {
                string2 = "Claim your prize to your bank.";
                string3 = "Your bonus prize cannot be banked.";
                string0 = "Can't Bank";
                break;
            }
            case 7: {
                string2 = "Treasure Hunter is not available at the moment. Please try later.";
                string3 = "Treasure Hunter is not available at the moment. Please try later.";
                break;
            }
            case 10: {
                string2 = "Loading...";
                string3 = "Loading...";
                break;
            }
        };
    };
    IF_SETOP(1, string1, comp(1253, 278));
    IF_SETENABLED(int2, comp(1253, 278));
    if ((int2 == true)) {
        IF_SETONMOUSEREPEAT(callback(script3876, string2, -2147483645, -1), 82116886);
    } else {
        IF_SETONMOUSEREPEAT(callback(script3876, string3, -2147483645, -1), 82116886);
    };
    IF_SETTEXT(string0, comp(1253, 278));
    return;
}