//
function script7362(): string {
    var string0 = "";
    switch (varbitplayer_16096) {
        case 0: {
            string0 = `You can still try and catch one of each Jadinkos this week.<br><col=FFFFFF>${script7373(varbitplayer_16101, 1, "Common Jadinko")}</col>, <col=FFFFFF>${script7373(varbitplayer_16103, 1, "Amphibious Jadinko")}</col>, <col=FFFFFF>${script7373(varbitplayer_16102, 1, "Aquatic Jadinko")}</col>, <col=FFFFFF>${script7373(varbitplayer_16108, 1, "Shadow Jadinko")}</col>, <col=FFFFFF>${script7373(varbitplayer_16105, 1, "Carrion Jadinko")}</col>, <col=FFFFFF>${script7373(varbitplayer_16106, 1, "Cannibal Jadinko")}</col>, <col=FFFFFF>${script7373(varbitplayer_16104, 1, "Camouflaged Jadinko")}</col>, <col=FFFFFF>${script7373(varbitplayer_16109, 1, "Diseased Jadinko")}</col>, <col=FFFFFF>${script7373(varbitplayer_16107, 1, "Draconic Jadinko")}</col> and <col=FFFFFF>${script7373(varbitplayer_16110, 1, "Igneous Jadinko")}</col>.`;
            break;
        }
        case 1: {
            string0 = "You have caught one of each Jadinkos this week but have yet to claim your <col=FFFFFF>XP</col> and <col=FFFFFF>clothing</col> rewards from Papa Mambo.";
            break;
        }
        case 2: {
            string0 = "You have caught one of each Jadinkos this week but have yet to claim your <col=FFFFFF>clothing</col> reward from Papa Mambo.";
            break;
        }
        case 3: {
            string0 = "You have caught one of each Jadinkos this week and have already claimed all your rewards.";
            break;
        }
    };
    switch (varbitplayer_16127) {
        case 0: {
            string0 = `${string0}<br>You can still try and catch one of each God Jadinkos this week.<br><col=FFFFFF>${script7373(varbitplayer_16111, 1, "Guthix Jadinko")}</col>, <col=FFFFFF>${script7373(varbitplayer_16112, 1, "Saradomin Jadinko")}</col> and <col=FFFFFF>${script7373(varbitplayer_16113, 1, "Zamorak Jadinko")}</col>.`;
            break;
        }
        case 1: {
            string0 = `${string0}<br>You have caught one of each God Jadinkos this week but have yet to claim your extra <col=FFFFFF>XP</col> and <col=FFFFFF>clothing</col> rewards from Papa Mambo.`;
            break;
        }
        case 2: {
            string0 = `${string0}<br>You have caught one of each God Jadinkos this week but have yet to claim your extra <col=FFFFFF>clothing</col> reward from Papa Mambo.`;
            break;
        }
        case 3: {
            string0 = `${string0}<br>You have caught one of each God Jadinkos this week but have yet to claim your extra <col=FFFFFF>temporary farming boost</col> from Papa Mambo.`;
            break;
        }
        case 4: {
            string0 = `${string0}<br>You have caught one of each God Jadinkos this week and have already claimed all your reward.`;
            break;
        }
    };
    return string0;
}