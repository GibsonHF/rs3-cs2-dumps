//
function script11051(int0: component): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    var string0 = "";
    switch (int0) {
        case 106889246: {
            string0 = "Give your Astromancer Credits to the Saradomin faction.";
            break;
        }
        case 106889248: {
            string0 = `You have given ${inttostring(varbitplayer_28189, 10)}/${inttostring(1000, 10)} credits to the Saradomin faction.`;
            break;
        }
        case 106889231: {
            string0 = "Give your Astromancer Credits to the Zamorak faction.";
            break;
        }
        case 106889233: {
            string0 = `You have given ${inttostring(varbitplayer_28190, 10)}/${inttostring(1000, 10)} credits to the Zamorak faction.`;
            break;
        }
        case 106889297: {
            string0 = "Give your Astromancer Credits to the Armadyl faction.";
            break;
        }
        case 106889299: {
            string0 = `You have given ${inttostring(varbitplayer_28191, 10)}/${inttostring(1000, 10)} credits to the Armadyl faction.`;
            break;
        }
        case 106889306: {
            string0 = "Give your Astromancer Credits to the Godless faction.";
            break;
        }
        case 106889308: {
            string0 = `You have given ${inttostring(varbitplayer_28192, 10)}/${inttostring(1000, 10)} credits to the Godless faction.`;
            break;
        }
        case 106889249: {
            string0 = item_getparam(34898, 4085);
            break;
        }
        case 106889250: {
            string0 = item_getparam(34897, 4085);
            break;
        }
        case 106889251: {
            string0 = "A follower pet to represent your faith in Saradomin.";
            break;
        }
        case 106889234: {
            string0 = item_getparam(34900, 4085);
            break;
        }
        case 106889235: {
            string0 = item_getparam(34899, 4085);
            break;
        }
        case 106889236: {
            string0 = "A follower pet to represent your faith in Zamorak.";
            break;
        }
        case 106889300: {
            string0 = item_getparam(34902, 4085);
            break;
        }
        case 106889301: {
            string0 = item_getparam(34901, 4085);
            break;
        }
        case 106889302: {
            string0 = "A follower pet to represent your faith in Armadyl.";
            break;
        }
        case 106889309: {
            string0 = item_getparam(34904, 4085);
            break;
        }
        case 106889310: {
            string0 = item_getparam(34903, 4085);
            break;
        }
        case 106889311: {
            string0 = "A follower pet to represent your support for the Godless.";
            break;
        }
        case 106889263: {
            string0 = "Enter 1000 credits into each faction to unlock the Astromancer outfit which comes with an out of this world benefit!";
            break;
        }
        case 106889267: {
            string0 = "Your Astromancer kit allows you to summon a meteorite once a day, for a chunk of xp! The outfit comes with 5 charges already, but you can add additional charges with more credits - 100 per charge up to a cap!";
            break;
        }
        default: {
            return;
        }
    };
    script3877(string0, int0, -1);
    return;
}