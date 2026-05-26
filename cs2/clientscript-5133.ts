//
function script5133(): void {
    var int0 = 0;
    var int1 = script4293();
    if ((script5131() == 1)) {
        IF_SETHIDE(1, 71827606);
        IF_SETHIDE(1, 71827611);
        IF_SETHIDE(1, 71827616);
        IF_SETHIDE(1, 71827621);
        IF_SETHIDE(1, 71827626);
        IF_SETHIDE(1, 71827631);
        IF_SETHIDE(1, 71827636);
        IF_SETHIDE(1, 71827641);
        IF_SETHIDE(1, 71827646);
        IF_SETHIDE(1, 71827651);
        IF_SETHIDE(1, 71827656);
        switch (varclient_1569) {
            case 0: {
                IF_SETHIDE(0, 71827606);
                if ((int1 >= 100)) {
                    int0 = 1;
                };
                break;
            }
            case 1: {
                IF_SETHIDE(0, 71827611);
                if ((int1 >= 100)) {
                    int0 = 1;
                };
                break;
            }
            case 2: {
                IF_SETHIDE(0, 71827616);
                if ((int1 >= 100)) {
                    int0 = 1;
                };
                break;
            }
            case 3: {
                IF_SETHIDE(0, 71827621);
                if ((int1 >= 100)) {
                    int0 = 1;
                };
                break;
            }
            case 4: {
                IF_SETHIDE(0, 71827626);
                if ((int1 >= 100)) {
                    int0 = 1;
                };
                break;
            }
            case 5: {
                IF_SETHIDE(0, 71827631);
                if ((int1 >= 100)) {
                    int0 = 1;
                };
                break;
            }
            case 100: {
                IF_SETHIDE(0, 71827636);
                if ((int1 > varclient_1569)) {
                    int0 = 1;
                };
                break;
            }
            case 101: {
                IF_SETHIDE(0, 71827641);
                if ((int1 > varclient_1569)) {
                    int0 = 1;
                };
                break;
            }
            case 102: {
                IF_SETHIDE(0, 71827646);
                if ((int1 > varclient_1569)) {
                    int0 = 1;
                };
                break;
            }
            case 103: {
                IF_SETHIDE(0, 71827651);
                if ((int1 > varclient_1569)) {
                    int0 = 1;
                };
                break;
            }
            case 125: {
                IF_SETHIDE(0, 71827656);
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
    IF_SETHIDE(0, 71827819);
    IF_SETHIDE(0, 71827831);
    IF_SETHIDE(0, 71827929);
    IF_SETHIDE(0, 71827941);
    IF_SETHIDE(0, 71827722);
    IF_SETHIDE(0, 71827844);
    IF_SETHIDE(0, 71827806);
    IF_SETHIDE(0, 71827965);
    IF_SETHIDE(0, 71827746);
    IF_SETHIDE(0, 71827734);
    IF_SETHIDE(0, 71827794);
    IF_SETHIDE(0, 71827770);
    IF_SETHIDE(0, 71827868);
    IF_SETHIDE(0, 71827758);
    IF_SETHIDE(0, 71827880);
    IF_SETHIDE(0, 71827892);
    IF_SETHIDE(0, 71827916);
    IF_SETHIDE(0, 71827904);
    IF_SETHIDE(0, 71828026);
    IF_SETHIDE(0, 71828014);
    IF_SETHIDE(0, 71828038);
    IF_SETHIDE(0, 71827953);
    IF_SETHIDE(0, 71827977);
    IF_SETHIDE(0, 71828001);
    IF_SETHIDE(0, 71827989);
    IF_SETHIDE(0, 71828050);
    IF_SETHIDE(0, 71827856);
    IF_SETHIDE(0, 71827782);
    IF_SETHIDE(0, 71827710);
    if ((int0 == 1)) {
        IF_SETHIDE(1, 71827819);
        IF_SETHIDE(1, 71827831);
        if ((varclient_1569 < 100)) {
            string0 = "Only admins and above may upgrade the citadel.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827929);
        } else if ((script5145(int1) == 0)) {
            string0 = "You may only allow upgrades to the citadel if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827929);
        } else {
            IF_SETHIDE(1, 71827929);
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admins and above may downgrade the citadel.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827941);
        } else if ((script5147(int1) == 0)) {
            string0 = "You may only allow downgrades to the citadel if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827941);
        } else {
            IF_SETHIDE(1, 71827941);
        };
        if ((script6012(int1) == 0)) {
            string0 = "You may only allow recruiting if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827722);
        } else {
            IF_SETHIDE(1, 71827722);
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admins and above may change the noticeboard.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827844);
        } else if ((script6006(int1) == 0)) {
            string0 = "You may only allow adding of notices if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827844);
        } else {
            IF_SETHIDE(1, 71827844);
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admins and above may change the signpost.";
            IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), 71827806);
        } else if ((script6008(int1) == 0)) {
            string0 = "You may only allow adding to the signpost if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827806);
        } else {
            IF_SETHIDE(1, 71827806);
        };
        if ((script6010(int1) == 0)) {
            string0 = "You may only allow editing of the clan battlefield if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827965);
        } else {
            IF_SETHIDE(1, 71827965);
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admins and above may change who may lock the citadel.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827746);
        } else if ((script5149(int1) == 0)) {
            string0 = "You may only allow locking of the citadel if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827746);
        } else {
            IF_SETHIDE(1, 71827746);
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admins and above may change who may lock the keep.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827734);
        } else if ((script5148(int1) == 0)) {
            string0 = "You may only allow locking of the keep if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827734);
        } else {
            IF_SETHIDE(1, 71827734);
        };
        if ((script5149(int1) == 0)) {
            string0 = "You may only allow entry to the citadel if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827794);
        } else {
            IF_SETHIDE(1, 71827794);
        };
        if ((script5148(int1) == 0)) {
            string0 = "You may only allow entry to the keep if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827770);
        } else {
            IF_SETHIDE(1, 71827770);
        };
        if ((script6014(int1) == 0)) {
            string0 = "You may only allow starting of battles if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827868);
        } else {
            IF_SETHIDE(1, 71827868);
        };
        if ((script6016(int1) == 0)) {
            string0 = "You may only allow a rank to lead Rated Clan Wars if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827758);
        } else {
            IF_SETHIDE(1, 71827758);
        };
        if ((script6018(int1) == 0)) {
            string0 = "You may only allow a rank to call a vote if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827880);
        } else {
            IF_SETHIDE(1, 71827880);
        };
        if ((script6020(int1) == 0)) {
            string0 = "You may only allow a rank to begin a meeting if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827892);
        } else {
            IF_SETHIDE(1, 71827892);
        };
        if ((script6022(int1) == 0)) {
            string0 = "You may only set a rank as a party tech if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827916);
        } else {
            IF_SETHIDE(1, 71827916);
        };
        if ((script6024(int1) == 0)) {
            string0 = "You may only set a rank as a theatre tech if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827904);
        } else {
            IF_SETHIDE(1, 71827904);
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admins and above may set skill plot locks.";
            IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), 71828026);
        } else if ((script5962(int1) == 0)) {
            string0 = "You may only allow a rank to lock plots if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71828026);
        } else {
            IF_SETHIDE(1, 71828026);
        };
        if ((script5964(int1) == 0)) {
            string0 = "You may only allow a rank to checkresources if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71828014);
        } else {
            IF_SETHIDE(1, 71828014);
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admins and above may set gathering goals.";
            IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), 71828038);
        } else if ((script5225(int1) == 0)) {
            string0 = "You may only allow a rank to gather resources if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71828038);
        } else {
            IF_SETHIDE(1, 71828038);
        };
        if ((varclient_1569 < 103)) {
            string0 = "Only overseers and above may set the citadel's language.";
            IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), 71827953);
        } else if ((script6028(int1) == 0)) {
            string0 = "You may only allow a rank to change the stronghold's language if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827953);
        } else {
            IF_SETHIDE(1, 71827953);
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admin ranks and above may remove the avatar habitat.";
            IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), 71827977);
        } else if ((script6631(int1) == 0)) {
            string0 = "You may only allow another rank to remove the avatar habitat if your rank has permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827977);
        } else {
            IF_SETHIDE(1, 71827977);
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admin ranks and above may customise the clan avatar.";
            IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), 71828001);
        } else if ((script6633(int1) == 0)) {
            string0 = "You may only allow another rank to customise the clan avatar if your rank has permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71828001);
        } else {
            IF_SETHIDE(1, 71828001);
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admins and above may decide which resource your clan avatars can gather for.";
            IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), 71827989);
        } else if ((script6635(int1) == 0)) {
            string0 = "You may only allow a rank to decide which resource your clan avatars can gather if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827989);
        } else {
            IF_SETHIDE(1, 71827989);
        };
        if ((varclient_1569 < 103)) {
            string0 = "Only overseers and above may move the build tick.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71828050);
        } else if ((script6030(int1) == 0)) {
            string0 = "You may only allow a rank to change the stronghold's build time if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71828050);
        } else {
            IF_SETHIDE(1, 71828050);
        };
        if ((script9357(int1) == 0)) {
            string0 = "You may only allow a rank to broadcast a noticeboard event if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827856);
        } else {
            IF_SETHIDE(1, 71827856);
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admins and above may change clan broadcast settings.";
            IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), 71827782);
        } else if ((script3733(int1) == 0)) {
            string0 = "You may only allow a rank to change clan broadcast settings if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827782);
        } else {
            IF_SETHIDE(1, 71827782);
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admin+ may kick clan members.";
            IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), 71827710);
        } else if ((script391(int1) == 0)) {
            string0 = "You may only allow a rank to kick a clan member if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827710);
        } else {
            IF_SETHIDE(1, 71827710);
        };
    } else {
        string0 = "Your rank is not high enough to alter this permission. You must be logged in to your clan's chat to adjust this.";
        IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), 71827929);
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