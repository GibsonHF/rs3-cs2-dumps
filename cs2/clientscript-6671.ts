//
function script6671(int0: obj, int1: int): void {
    if ((varclient_1790 == -1)) {
        return;
    };
    var string0 = "Claim item";
    var int2 = false;
    var string1 = "You do not have a prize to claim.";
    var string2 = "You do not have a prize to claim.";
    if ((varbitplayer_4323 <= 0)) {
        string1 = "You do not have a prize to claim.";
        string2 = "You do not have a prize to claim.";
        int2 = false;
    } else {
        string0 = "Claim item";
        switch (varclient_1790) {
            case 1:
            case 3:
            case 8:
            case 9:
            case 5: {
                int2 = true;
                break;
            }
            default: {
                int2 = false;
                break;
            }
        };
        switch (varclient_1790) {
            case 1: {
                string1 = "Claim your prize to your backpack.";
                string2 = "Your backpack doesn't have room for your prize at the moment.";
                break;
            }
            case 2: {
                string1 = "Claim your prize to your backpack.";
                string2 = "Your backpack doesn't have room for your prize at the moment.";
                break;
            }
            case 3: {
                string1 = "Claim your prize to your bank.";
                string2 = "Your bank doesn't have room for your prize at the moment.";
                break;
            }
            case 4: {
                string1 = "Claim your prize to your bank.";
                string2 = "Your bank doesn't have room for your prize at the moment.";
                break;
            }
            case 5:
            case 6: {
                string1 = "Claim your prize to your money pouch.";
                string2 = "Your money pouch doesn't have room for your prize at the moment.";
                break;
            }
            case 7: {
                string1 = "Treasure Hunter is not available at the moment. Please try later.";
                string2 = "Treasure Hunter is not available at the moment. Please try later.";
                break;
            }
            case 8: {
                string1 = "Claim to unlock this prize.";
                string2 = "Claim to unlock this prize.";
                string0 = "Claim prize";
                break;
            }
            case 9: {
                string1 = "Add the key to your collection of earned keys.";
                string2 = "Add the key to your collection of earned keys.";
                string0 = "Use ticket";
                break;
            }
            case 10: {
                string1 = "Loading...";
                string2 = "Loading...";
                break;
            }
            case 11: {
                string1 = "Your backpack doesn't have room for your prize at the moment.";
                string2 = "Your backpack doesn't have room for your prize at the moment.";
                break;
            }
        };
    };
    IF_SETOP(1, string0, comp(1253, 276));
    IF_SETENABLED(int2, comp(1253, 276));
    if ((int2 == true)) {
        IF_SETONMOUSEREPEAT(callback(script3876, string1, -2147483645, -1), 82116884);
    } else {
        IF_SETONMOUSEREPEAT(callback(script3876, string2, -2147483645, -1), 82116884);
    };
    return;
}