//
function script13475(int0: component, int1: int): void {
    IF_SETTEXT(script13477(varclient_6065), int0);
    if ((varbitplayer_36034 < 2)) {
        switch (varclient_6065) {
            case 15: {
                IF_SETHIDE(true, comp(1213, 0));
                script13478("Find the tombs and open them to gain valuable loot!");
                break;
            }
            case 30: {
                IF_SETHIDE(false, comp(1213, 0));
                IF_SETHIDE(true, comp(1877, 16));
                break;
            }
            case 80: {
                IF_SETHIDE(true, comp(1213, 0));
                script13478("Click on urns and other objects to cleanse corrupted souls! Only you can see these individual urns and vessels.");
                break;
            }
            case 95: {
                IF_SETHIDE(false, comp(1213, 0));
                IF_SETHIDE(true, comp(1877, 16));
                break;
            }
            case 130: {
                IF_SETHIDE(true, comp(1213, 0));
                script13478("You can run and perform other actions while smashing urns and looking around.");
                break;
            }
            case 145: {
                IF_SETHIDE(false, comp(1213, 0));
                IF_SETHIDE(true, comp(1877, 16));
                break;
            }
            case 210: {
                IF_SETHIDE(true, comp(1213, 0));
                script13478("Total experience scales with the amount of corruption that you purge. You must hit the target to reap the full reward!");
                break;
            }
            case 225: {
                IF_SETHIDE(false, comp(1213, 0));
                IF_SETHIDE(true, comp(1877, 16));
                break;
            }
            case 310: {
                IF_SETHIDE(true, comp(1213, 0));
                script13478("If you do not get to the exit in time, you will not receive the full amount of experience and loot!");
                break;
            }
            case 325: {
                IF_SETHIDE(false, comp(1213, 0));
                IF_SETHIDE(true, comp(1877, 16));
                break;
            }
            case 410: {
                IF_SETHIDE(true, comp(1213, 0));
                script13478("Only 1 minute left! If you have met your objectives, make your way to the exit!");
                break;
            }
            case 425: {
                IF_SETHIDE(false, comp(1213, 0));
                IF_SETHIDE(true, comp(1877, 16));
                break;
            }
        };
    };
    if ((varbitplayer_36034 < 3)) {
        switch (varclient_6065) {
            case 80: {
                IF_SETHIDE(true, comp(1213, 0));
                script13478("You can become powered-up if you smash five urns in short succession.");
                break;
            }
            case 95: {
                IF_SETHIDE(false, comp(1213, 0));
                IF_SETHIDE(true, comp(1877, 16));
                break;
            }
            case 96: {
                IF_SETHIDE(true, comp(1213, 0));
                script13478("While powered-up, you can smash through crystallised corruption with ease. The effect stacks up to three times.");
                break;
            }
            case 111: {
                IF_SETHIDE(false, comp(1213, 0));
                IF_SETHIDE(true, comp(1877, 16));
                break;
            }
            case 210: {
                IF_SETHIDE(true, comp(1213, 0));
                script13478("Leaving some urns scattered around the area helps in case you need to refresh your powered-up state later on.");
                break;
            }
            case 225: {
                IF_SETHIDE(false, comp(1213, 0));
                IF_SETHIDE(true, comp(1877, 16));
                break;
            }
            case 310: {
                IF_SETHIDE(true, comp(1213, 0));
                script13478("Tier 2 experience is unlocked at level 70+ in all of the 8 Shifting Tombs skills. Tier 3 is unlocked at level 90+.");
                break;
            }
            case 325: {
                IF_SETHIDE(false, comp(1213, 0));
                IF_SETHIDE(true, comp(1877, 16));
                break;
            }
            case 410: {
                IF_SETHIDE(true, comp(1213, 0));
                script13478("Only 1 minute left! Get to the exit, or risk squeezing in some extra experience - your choice!");
                break;
            }
            case 425: {
                IF_SETHIDE(false, comp(1213, 0));
                IF_SETHIDE(true, comp(1877, 16));
                break;
            }
        };
    };
    if ((varclient_6065 > 0)) {
        IF_SETONTIMER(callback(script13476, int0, (CLIENTCLOCK() + int1)), int0);
    } else {
        IF_SETONTIMER(callback(), int0);
    };
    return;
}