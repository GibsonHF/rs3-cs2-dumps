//
function script16445(int0: dbrow): string {
    var string0 = "";
    var int1 = 0;
    var int2 = script15513();
    if (((int2 != -1 as struct) && (struct_getparam(int2, 5396) != 40932 as obj))) {
        int1 = 1;
    };
    switch (int0) {
        case 4954: {
            if ((int1 == 1)) {
                string0 = "Oddments are a currency that can be used to purchase Treasure Hunter keys, XP rewards, cosmetics and much more! Occasionally they're replaced by seasonal oddments which can be used to purchase limited time items.";
            };
            break;
        }
        case 4955: {
            if ((int1 == 1)) {
                string0 = "<col=FFCB05>You win oddments or seasonal oddments alongside every prize.</col> The rarer the prize the more oddments you win!";
            };
            break;
        }
        case 4956: {
            if ((int1 == 1)) {
                string0 = "You can also convert your prize to earn even more oddments or seasonal oddments.";
            };
            break;
        }
        case 4957: {
            if ((int1 == 1)) {
                string0 = "The Oddments & Seasonal Oddments Store can be accessed here, via the <col=FFCB05>Marketplace</col> or through the currency in your backpack.";
            };
            break;
        }
        case 6874: {
            string0 = "The top <col=e8ce80>ingredient</col> will always be a <col=26c914>multiplier</col>. It will be active for 5 keys <sprite=22110>. Then you'll need to use 4 keys for it to <col=be2aeb>refill</col> <sprite=22113> and you can use it again.<br>Try using this now!";
            break;
        }
        case 6876: {
            string0 = "<col=e8ce80>Ingredients</col> can stack!<br>The middle <col=e8ce80>ingredient</col> will always be a <col=FFFF00>minimum rarity</col>. It will be active for 4 keys <sprite=22110>. Then you'll need to use 2 keys for it to <col=be2aeb>refill</col> <sprite=22113> and you can use it again.<br>Try using this now!";
            break;
        }
        case 6878: {
            string0 = "The bottom <col=e8ce80>ingredient</col> will always be an <col=14c3c9>extra reward</col>. It will be active for 4 keys <sprite=22110>. Then you'll need to use 2 keys for it to <col=be2aeb>refill</col> <sprite=22113> and you can use it again.<br>Try using this now!";
            break;
        }
        case 17114: {
            string0 = "Completing a task provides League points:<br><sprite=35246> 10 - Easy.<br><sprite=35247> 30 - Medium.<br><sprite=35248> 80 - Hard.<br><sprite=35249> 200 - Elite.<br><sprite=35250> 400 - Master.";
            break;
        }
    };
    if ((STRING_LENGTH(string0) <= 0)) {
        string0 = dbrow_getfield(int0, 294960, 0);
    };
    return string0;
}