//
function script5133(): void {
    var int0 = 0;
    var int1 = script4293();
    if ((script5131() == 1)) {
        IF_SETHIDE(true, comp(1096, 150));
        IF_SETHIDE(true, comp(1096, 155));
        IF_SETHIDE(true, comp(1096, 160));
        IF_SETHIDE(true, comp(1096, 165));
        IF_SETHIDE(true, comp(1096, 170));
        IF_SETHIDE(true, comp(1096, 175));
        IF_SETHIDE(true, comp(1096, 180));
        IF_SETHIDE(true, comp(1096, 185));
        IF_SETHIDE(true, comp(1096, 190));
        IF_SETHIDE(true, comp(1096, 195));
        IF_SETHIDE(true, comp(1096, 200));
        switch (varclient_1569) {
            case 0: {
                IF_SETHIDE(false, comp(1096, 150));
                if ((int1 >= 100)) {
                    int0 = 1;
                };
                break;
            }
            case 1: {
                IF_SETHIDE(false, comp(1096, 155));
                if ((int1 >= 100)) {
                    int0 = 1;
                };
                break;
            }
            case 2: {
                IF_SETHIDE(false, comp(1096, 160));
                if ((int1 >= 100)) {
                    int0 = 1;
                };
                break;
            }
            case 3: {
                IF_SETHIDE(false, comp(1096, 165));
                if ((int1 >= 100)) {
                    int0 = 1;
                };
                break;
            }
            case 4: {
                IF_SETHIDE(false, comp(1096, 170));
                if ((int1 >= 100)) {
                    int0 = 1;
                };
                break;
            }
            case 5: {
                IF_SETHIDE(false, comp(1096, 175));
                if ((int1 >= 100)) {
                    int0 = 1;
                };
                break;
            }
            case 100: {
                IF_SETHIDE(false, comp(1096, 180));
                if ((int1 > varclient_1569)) {
                    int0 = 1;
                };
                break;
            }
            case 101: {
                IF_SETHIDE(false, comp(1096, 185));
                if ((int1 > varclient_1569)) {
                    int0 = 1;
                };
                break;
            }
            case 102: {
                IF_SETHIDE(false, comp(1096, 190));
                if ((int1 > varclient_1569)) {
                    int0 = 1;
                };
                break;
            }
            case 103: {
                IF_SETHIDE(false, comp(1096, 195));
                if ((int1 > varclient_1569)) {
                    int0 = 1;
                };
                break;
            }
            case 125: {
                IF_SETHIDE(false, comp(1096, 200));
                if ((int1 > varclient_1569)) {
                    int0 = 1;
                };
                break;
            }
            case 126: {
                int0 = 0;
                break;
            }
            case 127: {
                int0 = 0;
                break;
            }
            default: {
                if ((int1 >= 100)) {
                    int0 = 1;
                };
                break;
            }
        };
    };
    var string0 = "";
    IF_SETHIDE(false, comp(1096, 363));
    IF_SETHIDE(false, comp(1096, 375));
    IF_SETHIDE(false, comp(1096, 473));
    IF_SETHIDE(false, comp(1096, 485));
    IF_SETHIDE(false, comp(1096, 266));
    IF_SETHIDE(false, comp(1096, 388));
    IF_SETHIDE(false, comp(1096, 350));
    IF_SETHIDE(false, comp(1096, 509));
    IF_SETHIDE(false, comp(1096, 290));
    IF_SETHIDE(false, comp(1096, 278));
    IF_SETHIDE(false, comp(1096, 338));
    IF_SETHIDE(false, comp(1096, 314));
    IF_SETHIDE(false, comp(1096, 412));
    IF_SETHIDE(false, comp(1096, 302));
    IF_SETHIDE(false, comp(1096, 424));
    IF_SETHIDE(false, comp(1096, 436));
    IF_SETHIDE(false, comp(1096, 460));
    IF_SETHIDE(false, comp(1096, 448));
    IF_SETHIDE(false, comp(1096, 570));
    IF_SETHIDE(false, comp(1096, 558));
    IF_SETHIDE(false, comp(1096, 582));
    IF_SETHIDE(false, comp(1096, 497));
    IF_SETHIDE(false, comp(1096, 521));
    IF_SETHIDE(false, comp(1096, 545));
    IF_SETHIDE(false, comp(1096, 533));
    IF_SETHIDE(false, comp(1096, 594));
    IF_SETHIDE(false, comp(1096, 400));
    IF_SETHIDE(false, comp(1096, 326));
    IF_SETHIDE(false, comp(1096, 254));
    if ((int0 == 1)) {
        IF_SETHIDE(true, comp(1096, 363));
        IF_SETHIDE(true, comp(1096, 375));
        if ((varclient_1569 < 100)) {
            string0 = "Only admins and above may upgrade the citadel.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 473));
        } else if ((script5145(int1) == 0)) {
            string0 = "You may only allow upgrades to the citadel if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 473));
        } else {
            IF_SETHIDE(true, comp(1096, 473));
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admins and above may downgrade the citadel.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 485));
        } else if ((script5147(int1) == 0)) {
            string0 = "You may only allow downgrades to the citadel if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 485));
        } else {
            IF_SETHIDE(true, comp(1096, 485));
        };
        if ((script6012(int1) == 0)) {
            string0 = "You may only allow recruiting if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 266));
        } else {
            IF_SETHIDE(true, comp(1096, 266));
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admins and above may change the noticeboard.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 388));
        } else if ((script6006(int1) == 0)) {
            string0 = "You may only allow adding of notices if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 388));
        } else {
            IF_SETHIDE(true, comp(1096, 388));
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admins and above may change the signpost.";
            IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), comp(1096, 350));
        } else if ((script6008(int1) == 0)) {
            string0 = "You may only allow adding to the signpost if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 350));
        } else {
            IF_SETHIDE(true, comp(1096, 350));
        };
        if ((script6010(int1) == 0)) {
            string0 = "You may only allow editing of the clan battlefield if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 509));
        } else {
            IF_SETHIDE(true, comp(1096, 509));
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admins and above may change who may lock the citadel.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 290));
        } else if ((script5149(int1) == 0)) {
            string0 = "You may only allow locking of the citadel if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 290));
        } else {
            IF_SETHIDE(true, comp(1096, 290));
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admins and above may change who may lock the keep.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 278));
        } else if ((script5148(int1) == 0)) {
            string0 = "You may only allow locking of the keep if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 278));
        } else {
            IF_SETHIDE(true, comp(1096, 278));
        };
        if ((script5149(int1) == 0)) {
            string0 = "You may only allow entry to the citadel if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 338));
        } else {
            IF_SETHIDE(true, comp(1096, 338));
        };
        if ((script5148(int1) == 0)) {
            string0 = "You may only allow entry to the keep if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 314));
        } else {
            IF_SETHIDE(true, comp(1096, 314));
        };
        if ((script6014(int1) == 0)) {
            string0 = "You may only allow starting of battles if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 412));
        } else {
            IF_SETHIDE(true, comp(1096, 412));
        };
        if ((script6016(int1) == 0)) {
            string0 = "You may only allow a rank to lead Rated Clan Wars if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 302));
        } else {
            IF_SETHIDE(true, comp(1096, 302));
        };
        if ((script6018(int1) == 0)) {
            string0 = "You may only allow a rank to call a vote if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 424));
        } else {
            IF_SETHIDE(true, comp(1096, 424));
        };
        if ((script6020(int1) == 0)) {
            string0 = "You may only allow a rank to begin a meeting if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 436));
        } else {
            IF_SETHIDE(true, comp(1096, 436));
        };
        if ((script6022(int1) == 0)) {
            string0 = "You may only set a rank as a party tech if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 460));
        } else {
            IF_SETHIDE(true, comp(1096, 460));
        };
        if ((script6024(int1) == 0)) {
            string0 = "You may only set a rank as a theatre tech if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 448));
        } else {
            IF_SETHIDE(true, comp(1096, 448));
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admins and above may set skill plot locks.";
            IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), comp(1096, 570));
        } else if ((script5962(int1) == 0)) {
            string0 = "You may only allow a rank to lock plots if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 570));
        } else {
            IF_SETHIDE(true, comp(1096, 570));
        };
        if ((script5964(int1) == 0)) {
            string0 = "You may only allow a rank to checkresources if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 558));
        } else {
            IF_SETHIDE(true, comp(1096, 558));
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admins and above may set gathering goals.";
            IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), comp(1096, 582));
        } else if ((script5225(int1) == 0)) {
            string0 = "You may only allow a rank to gather resources if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 582));
        } else {
            IF_SETHIDE(true, comp(1096, 582));
        };
        if ((varclient_1569 < 103)) {
            string0 = "Only overseers and above may set the citadel's language.";
            IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), comp(1096, 497));
        } else if ((script6028(int1) == 0)) {
            string0 = "You may only allow a rank to change the stronghold's language if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 497));
        } else {
            IF_SETHIDE(true, comp(1096, 497));
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admin ranks and above may remove the avatar habitat.";
            IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), comp(1096, 521));
        } else if ((script6631(int1) == 0)) {
            string0 = "You may only allow another rank to remove the avatar habitat if your rank has permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 521));
        } else {
            IF_SETHIDE(true, comp(1096, 521));
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admin ranks and above may customise the clan avatar.";
            IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), comp(1096, 545));
        } else if ((script6633(int1) == 0)) {
            string0 = "You may only allow another rank to customise the clan avatar if your rank has permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 545));
        } else {
            IF_SETHIDE(true, comp(1096, 545));
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admins and above may decide which resource your clan avatars can gather for.";
            IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), comp(1096, 533));
        } else if ((script6635(int1) == 0)) {
            string0 = "You may only allow a rank to decide which resource your clan avatars can gather if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 533));
        } else {
            IF_SETHIDE(true, comp(1096, 533));
        };
        if ((varclient_1569 < 103)) {
            string0 = "Only overseers and above may move the build tick.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 594));
        } else if ((script6030(int1) == 0)) {
            string0 = "You may only allow a rank to change the stronghold's build time if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 594));
        } else {
            IF_SETHIDE(true, comp(1096, 594));
        };
        if ((script9357(int1) == 0)) {
            string0 = "You may only allow a rank to broadcast a noticeboard event if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 400));
        } else {
            IF_SETHIDE(true, comp(1096, 400));
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admins and above may change clan broadcast settings.";
            IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), comp(1096, 326));
        } else if ((script3733(int1) == 0)) {
            string0 = "You may only allow a rank to change clan broadcast settings if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 326));
        } else {
            IF_SETHIDE(true, comp(1096, 326));
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admin+ may kick clan members.";
            IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), comp(1096, 254));
        } else if ((script391(int1) == 0)) {
            string0 = "You may only allow a rank to kick a clan member if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 254));
        } else {
            IF_SETHIDE(true, comp(1096, 254));
        };
    } else {
        string0 = "Your rank is not high enough to alter this permission. You must be logged in to your clan's chat to adjust this.";
        IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 473));
        IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827941);
        IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), 71827722);
        IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827844);
        IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), 71827806);
        IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), 71827965);
        IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827746);
        IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827734);
        IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827794);
        IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827770);
        IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827868);
        IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), 71827758);
        IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827880);
        IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827892);
        IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), 71827916);
        IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), 71827904);
        IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), 71828026);
        IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71828014);
        IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), 71828038);
        IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), 71827953);
        IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), 71827977);
        IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), 71828001);
        IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), 71827989);
        IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71828050);
        IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827856);
        IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827782);
        IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827710);
    };
    script5135();
    return;
}