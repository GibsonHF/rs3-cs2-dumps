//
function script9720(int0: obj, int1: int): void {
    if ((varclient_4080 == -1)) {
        return;
    };
    var string0 = "Claim to backpack";
    var int2 = false;
    var string1 = "You do not have a prize to claim.";
    var string2 = "You do not have a prize to claim.";
    var string3 = "Backpack";
    if ((varbitplayer_4323 <= 0)) {
        string1 = "You do not have a prize to claim.";
        string2 = "You do not have a prize to claim.";
        int2 = false;
    } else {
        string0 = "Claim to backpack";
        string3 = "Backpack";
        switch (varclient_1790) {
            case 8:
            case 9: {
                string2 = "This prize cannot be claimed to your backpack.";
                int2 = false;
                break;
            }
            case 12: {
                string3 = "Can't Claim";
                string2 = "You cannot claim this prize at the moment.";
                int2 = false;
                switch (int0) {
                    case 30824: {
                        string2 = "You have too many dungeoneering tokens and cannot claim this prize at the moment.";
                        break;
                    }
                    case 37007: {
                        string2 = "You have too many butterfly tokens and cannot claim this prize at the moment.";
                        break;
                    }
                    case 38172: {
                        string2 = "You have too many sailing tokens and cannot claim this prize at the moment.";
                        break;
                    }
                };
                break;
            }
        };
        switch (varclient_4080) {
            case 1: {
                if (((OC_MEMBERS(int0) == 1) && (MAP_MEMBERS() == 0))) {
                    string1 = "Claim your prize. This is a members-only prize, so you will need to subscribe to use it.";
                } else {
                    string1 = "Claim your prize to your backpack.";
                };
                int2 = true;
                break;
            }
            case 2: {
                string2 = "Your backpack doesn't have room for your prize at the moment.";
                string3 = "Backpack Full";
                break;
            }
            case 13: {
                string3 = "Subscribe";
                string0 = "Subscribe";
                string1 = "You must be a member to claim this prize. Click here to subscribe.";
                int2 = true;
                break;
            }
            case 12: {
                string3 = "Can't Claim";
                string2 = "You cannot claim this prize at the moment.";
                int2 = false;
                break;
            }
            case 7: {
                string1 = "Treasure Hunter is not available at the moment. Please try later.";
                string2 = "Treasure Hunter is not available at the moment. Please try later.";
                break;
            }
            case 10: {
                string1 = "Loading...";
                string2 = "Loading...";
                break;
            }
        };
    };
    IF_SETOP(1, string0, comp(1253, 277));
    IF_SETENABLED(int2, comp(1253, 277));
    if ((int2 == true)) {
        IF_SETONMOUSEREPEAT(callback(script3876, string1, -2147483645, -1), 82116885);
    } else {
        IF_SETONMOUSEREPEAT(callback(script3876, string2, -2147483645, -1), 82116885);
    };
    IF_SETTEXT(string3, comp(1253, 277));
    return;
}