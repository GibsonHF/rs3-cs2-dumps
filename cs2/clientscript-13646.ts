//
function script13646(int0: unknown_int): void {
    var string0 = "";
    var string1 = "Click on a skillchip icon to learn more about the task.";
    if ((int0 == 0)) {
        IF_SETHIDE(true, comp(1898, 6));
        IF_SETHIDE(true, comp(1898, 9));
    } else {
        IF_SETHIDE(false, comp(1898, 6));
        IF_SETHIDE(false, comp(1898, 9));
    };
    switch (int0) {
        case 0: {
            string0 = "Select a chip";
            string1 = "Click on a skillchip icon to learn more about the task.";
            break;
        }
        case 1: {
            string0 = "Catherby";
            string1 = "Throw 8 ripe tomatoes at the JMod on Catherby Beach from the nearby bucket.";
            break;
        }
        case 2: {
            string0 = "Taverley";
            string1 = "Speak to Skillchipx and help him obtain some special flour from the windmill nearby.";
            break;
        }
        case 3: {
            string0 = "Falador";
            string1 = "Pickup a Cabbage from the pile north of Falador, Kick it to the 8 checkpoints in order. The first one is just to the East.";
            break;
        }
        case 4: {
            string0 = "Varrock";
            string1 = "Kill certain dragons or craft hides to earn points for the Dragon's Challenge, the harder the dragons the more points you'll get!";
            break;
        }
        case 5: {
            string0 = "Canifis";
            string1 = "Head toward the graves north of Canifis and dig up 8 bones of convention using a spade.";
            break;
        }
        case 6: {
            string0 = "Lumbridge";
            string1 = "Use the temporary Photo Booth in Lumbridge to take a selfie with a Staff of Air.";
            break;
        }
        case 7: {
            string0 = "Edgeville";
            string1 = "Find 4 JMods throughout the world. Ask your friends or hunt them together!";
            break;
        }
        case 8: {
            string0 = "Ardougne";
            string1 = "Find 10 special R.U.N.E.F.E.S.T. Penguins throughout Gielinor. Ask your friends or hunt them together!";
            break;
        }
        case 9: {
            string0 = "RuneFest 2017";
            if ((varbitplayer_37532 == 255)) {
                string1 = "Congratulations! You've completed this year's RuneFest tasks for Skillchipx!";
            } else {
                string1 = "Unlock this by completing all 8 skill chip activities.";
            };
            break;
        }
    };
    IF_SETTEXT(string0, comp(1898, 8));
    IF_SETTEXT(string1, comp(1898, 7));
    SOUND_VORBIS_VOLUME(8091 as vorbis, 1, 0, 240);
    script13647();
    var int1 = 192;
    switch (int0) {
        case 1: {
            if ((varbitplayer_37524 == 1)) {
                int1 = 255;
            };
            IF_SETTRANS(int1, comp(1898, 25));
            break;
        }
        case 2: {
            if ((varbitplayer_37525 == 1)) {
                int1 = 255;
            };
            IF_SETTRANS(int1, comp(1898, 26));
            break;
        }
        case 3: {
            if ((varbitplayer_37526 == 1)) {
                int1 = 255;
            };
            IF_SETTRANS(int1, comp(1898, 27));
            break;
        }
        case 4: {
            if ((varbitplayer_37527 == 1)) {
                int1 = 255;
            };
            IF_SETTRANS(int1, comp(1898, 28));
            break;
        }
        case 5: {
            if ((varbitplayer_37528 == 1)) {
                int1 = 255;
            };
            IF_SETTRANS(int1, comp(1898, 29));
            break;
        }
        case 6: {
            if ((varbitplayer_37529 == 1)) {
                int1 = 255;
            };
            IF_SETTRANS(int1, comp(1898, 30));
            break;
        }
        case 7: {
            if ((varbitplayer_37530 == 1)) {
                int1 = 255;
            };
            IF_SETTRANS(int1, comp(1898, 31));
            break;
        }
        case 8: {
            if ((varbitplayer_37531 == 1)) {
                int1 = 255;
            };
            IF_SETTRANS(int1, comp(1898, 32));
            break;
        }
        case 9: {
            if ((varbitplayer_37532 == 255)) {
                int1 = 255;
            };
            IF_SETTRANS(int1, comp(1898, 33));
            break;
        }
    };
    return;
}