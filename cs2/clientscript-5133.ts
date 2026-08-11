//
function script5133(): void {
    var int0 = 0;
    var int1 = script4293();
    if ((script5131() == 1)) {
        IF_SETHIDE(true, comp(1096, 150));  // clansettings:rank_button_recruit_selected_layer
        IF_SETHIDE(true, comp(1096, 155));  // clansettings:rank_button_corporal_selected_layer
        IF_SETHIDE(true, comp(1096, 160));  // clansettings:rank_button_sergeant_selected_layer
        IF_SETHIDE(true, comp(1096, 165));  // clansettings:rank_button_lieutenant_selected_layer
        IF_SETHIDE(true, comp(1096, 170));  // clansettings:rank_button_captain_selected_layer
        IF_SETHIDE(true, comp(1096, 175));  // clansettings:rank_button_general_selected_layer
        IF_SETHIDE(true, comp(1096, 180));  // clansettings:rank_button_admin_selected_layer
        IF_SETHIDE(true, comp(1096, 185));  // clansettings:rank_button_organiser_selected_layer
        IF_SETHIDE(true, comp(1096, 190));  // clansettings:rank_button_coordinator_selected_layer
        IF_SETHIDE(true, comp(1096, 195));  // clansettings:rank_button_overseer_selected_layer
        IF_SETHIDE(true, comp(1096, 200));  // clansettings:rank_button_deputy_owner_selected_layer
        switch (varclient_1569) {
            case 0: {
                IF_SETHIDE(false, comp(1096, 150));  // clansettings:rank_button_recruit_selected_layer
                if ((int1 >= 100)) {
                    int0 = 1;
                };
                break;
            }
            case 1: {
                IF_SETHIDE(false, comp(1096, 155));  // clansettings:rank_button_corporal_selected_layer
                if ((int1 >= 100)) {
                    int0 = 1;
                };
                break;
            }
            case 2: {
                IF_SETHIDE(false, comp(1096, 160));  // clansettings:rank_button_sergeant_selected_layer
                if ((int1 >= 100)) {
                    int0 = 1;
                };
                break;
            }
            case 3: {
                IF_SETHIDE(false, comp(1096, 165));  // clansettings:rank_button_lieutenant_selected_layer
                if ((int1 >= 100)) {
                    int0 = 1;
                };
                break;
            }
            case 4: {
                IF_SETHIDE(false, comp(1096, 170));  // clansettings:rank_button_captain_selected_layer
                if ((int1 >= 100)) {
                    int0 = 1;
                };
                break;
            }
            case 5: {
                IF_SETHIDE(false, comp(1096, 175));  // clansettings:rank_button_general_selected_layer
                if ((int1 >= 100)) {
                    int0 = 1;
                };
                break;
            }
            case 100: {
                IF_SETHIDE(false, comp(1096, 180));  // clansettings:rank_button_admin_selected_layer
                if ((int1 > varclient_1569)) {
                    int0 = 1;
                };
                break;
            }
            case 101: {
                IF_SETHIDE(false, comp(1096, 185));  // clansettings:rank_button_organiser_selected_layer
                if ((int1 > varclient_1569)) {
                    int0 = 1;
                };
                break;
            }
            case 102: {
                IF_SETHIDE(false, comp(1096, 190));  // clansettings:rank_button_coordinator_selected_layer
                if ((int1 > varclient_1569)) {
                    int0 = 1;
                };
                break;
            }
            case 103: {
                IF_SETHIDE(false, comp(1096, 195));  // clansettings:rank_button_overseer_selected_layer
                if ((int1 > varclient_1569)) {
                    int0 = 1;
                };
                break;
            }
            case 125: {
                IF_SETHIDE(false, comp(1096, 200));  // clansettings:rank_button_deputy_owner_selected_layer
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
    IF_SETHIDE(false, comp(1096, 363));  // clansettings:cantalk_blackout
    IF_SETHIDE(false, comp(1096, 375));  // clansettings:cankick_blackout
    IF_SETHIDE(false, comp(1096, 473));  // clansettings:canupgrade_blackout
    IF_SETHIDE(false, comp(1096, 485));  // clansettings:candowngrade_blackout
    IF_SETHIDE(false, comp(1096, 266));  // clansettings:recruit_blackout
    IF_SETHIDE(false, comp(1096, 388));  // clansettings:addnotice_blackout
    IF_SETHIDE(false, comp(1096, 350));  // clansettings:addsign_blackout
    IF_SETHIDE(false, comp(1096, 509));  // clansettings:editfield_blackout
    IF_SETHIDE(false, comp(1096, 290));  // clansettings:lockwalls_blackout
    IF_SETHIDE(false, comp(1096, 278));  // clansettings:lockkeep_blackout
    IF_SETHIDE(false, comp(1096, 338));  // clansettings:accesswalls_blackout
    IF_SETHIDE(false, comp(1096, 314));  // clansettings:accesskeep_blackout
    IF_SETHIDE(false, comp(1096, 412));  // clansettings:startbattle_blackout
    IF_SETHIDE(false, comp(1096, 302));  // clansettings:leadrcw_blackout
    IF_SETHIDE(false, comp(1096, 424));  // clansettings:startvote_blackout
    IF_SETHIDE(false, comp(1096, 436));  // clansettings:startmeeting_blackout
    IF_SETHIDE(false, comp(1096, 460));  // clansettings:partytech_blackout
    IF_SETHIDE(false, comp(1096, 448));  // clansettings:theatretech_blackout
    IF_SETHIDE(false, comp(1096, 570));  // clansettings:canlockplots_blackout
    IF_SETHIDE(false, comp(1096, 558));  // clansettings:cancheckresources_blackout
    IF_SETHIDE(false, comp(1096, 582));  // clansettings:cangather_blackout
    IF_SETHIDE(false, comp(1096, 497));  // clansettings:language_blackout
    IF_SETHIDE(false, comp(1096, 521));  // clansettings:removehabitat_blackout
    IF_SETHIDE(false, comp(1096, 545));  // clansettings:customiseavatar_blackout
    IF_SETHIDE(false, comp(1096, 533));  // clansettings:fillbuffslot_blackout
    IF_SETHIDE(false, comp(1096, 594));  // clansettings:settick_blackout
    IF_SETHIDE(false, comp(1096, 400));  // clansettings:broadcastevent_blackout
    IF_SETHIDE(false, comp(1096, 326));  // clansettings:changebroadcastsettings_blackout
    IF_SETHIDE(false, comp(1096, 254));  // clansettings:kickmember_blackout
    if ((int0 == 1)) {
        IF_SETHIDE(true, comp(1096, 363));  // clansettings:cantalk_blackout
        IF_SETHIDE(true, comp(1096, 375));  // clansettings:cankick_blackout
        if ((varclient_1569 < 100)) {
            string0 = "Only admins and above may upgrade the citadel.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 473));  // clansettings:canupgrade_blackout
        } else if ((script5145(int1) == 0)) {
            string0 = "You may only allow upgrades to the citadel if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 473));  // clansettings:canupgrade_blackout
        } else {
            IF_SETHIDE(true, comp(1096, 473));  // clansettings:canupgrade_blackout
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admins and above may downgrade the citadel.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 485));  // clansettings:candowngrade_blackout
        } else if ((script5147(int1) == 0)) {
            string0 = "You may only allow downgrades to the citadel if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 485));  // clansettings:candowngrade_blackout
        } else {
            IF_SETHIDE(true, comp(1096, 485));  // clansettings:candowngrade_blackout
        };
        if ((script6012(int1) == 0)) {
            string0 = "You may only allow recruiting if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 266));  // clansettings:recruit_blackout
        } else {
            IF_SETHIDE(true, comp(1096, 266));  // clansettings:recruit_blackout
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admins and above may change the noticeboard.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 388));  // clansettings:addnotice_blackout
        } else if ((script6006(int1) == 0)) {
            string0 = "You may only allow adding of notices if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 388));  // clansettings:addnotice_blackout
        } else {
            IF_SETHIDE(true, comp(1096, 388));  // clansettings:addnotice_blackout
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admins and above may change the signpost.";
            IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), comp(1096, 350));  // clansettings:addsign_blackout
        } else if ((script6008(int1) == 0)) {
            string0 = "You may only allow adding to the signpost if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 350));  // clansettings:addsign_blackout
        } else {
            IF_SETHIDE(true, comp(1096, 350));  // clansettings:addsign_blackout
        };
        if ((script6010(int1) == 0)) {
            string0 = "You may only allow editing of the clan battlefield if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 509));  // clansettings:editfield_blackout
        } else {
            IF_SETHIDE(true, comp(1096, 509));  // clansettings:editfield_blackout
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admins and above may change who may lock the citadel.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 290));  // clansettings:lockwalls_blackout
        } else if ((script5149(int1) == 0)) {
            string0 = "You may only allow locking of the citadel if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 290));  // clansettings:lockwalls_blackout
        } else {
            IF_SETHIDE(true, comp(1096, 290));  // clansettings:lockwalls_blackout
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admins and above may change who may lock the keep.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 278));  // clansettings:lockkeep_blackout
        } else if ((script5148(int1) == 0)) {
            string0 = "You may only allow locking of the keep if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 278));  // clansettings:lockkeep_blackout
        } else {
            IF_SETHIDE(true, comp(1096, 278));  // clansettings:lockkeep_blackout
        };
        if ((script5149(int1) == 0)) {
            string0 = "You may only allow entry to the citadel if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 338));  // clansettings:accesswalls_blackout
        } else {
            IF_SETHIDE(true, comp(1096, 338));  // clansettings:accesswalls_blackout
        };
        if ((script5148(int1) == 0)) {
            string0 = "You may only allow entry to the keep if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 314));  // clansettings:accesskeep_blackout
        } else {
            IF_SETHIDE(true, comp(1096, 314));  // clansettings:accesskeep_blackout
        };
        if ((script6014(int1) == 0)) {
            string0 = "You may only allow starting of battles if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 412));  // clansettings:startbattle_blackout
        } else {
            IF_SETHIDE(true, comp(1096, 412));  // clansettings:startbattle_blackout
        };
        if ((script6016(int1) == 0)) {
            string0 = "You may only allow a rank to lead Rated Clan Wars if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 302));  // clansettings:leadrcw_blackout
        } else {
            IF_SETHIDE(true, comp(1096, 302));  // clansettings:leadrcw_blackout
        };
        if ((script6018(int1) == 0)) {
            string0 = "You may only allow a rank to call a vote if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 424));  // clansettings:startvote_blackout
        } else {
            IF_SETHIDE(true, comp(1096, 424));  // clansettings:startvote_blackout
        };
        if ((script6020(int1) == 0)) {
            string0 = "You may only allow a rank to begin a meeting if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 436));  // clansettings:startmeeting_blackout
        } else {
            IF_SETHIDE(true, comp(1096, 436));  // clansettings:startmeeting_blackout
        };
        if ((script6022(int1) == 0)) {
            string0 = "You may only set a rank as a party tech if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 460));  // clansettings:partytech_blackout
        } else {
            IF_SETHIDE(true, comp(1096, 460));  // clansettings:partytech_blackout
        };
        if ((script6024(int1) == 0)) {
            string0 = "You may only set a rank as a theatre tech if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 448));  // clansettings:theatretech_blackout
        } else {
            IF_SETHIDE(true, comp(1096, 448));  // clansettings:theatretech_blackout
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admins and above may set skill plot locks.";
            IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), comp(1096, 570));  // clansettings:canlockplots_blackout
        } else if ((script5962(int1) == 0)) {
            string0 = "You may only allow a rank to lock plots if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 570));  // clansettings:canlockplots_blackout
        } else {
            IF_SETHIDE(true, comp(1096, 570));  // clansettings:canlockplots_blackout
        };
        if ((script5964(int1) == 0)) {
            string0 = "You may only allow a rank to checkresources if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 558));  // clansettings:cancheckresources_blackout
        } else {
            IF_SETHIDE(true, comp(1096, 558));  // clansettings:cancheckresources_blackout
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admins and above may set gathering goals.";
            IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), comp(1096, 582));  // clansettings:cangather_blackout
        } else if ((script5225(int1) == 0)) {
            string0 = "You may only allow a rank to gather resources if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 582));  // clansettings:cangather_blackout
        } else {
            IF_SETHIDE(true, comp(1096, 582));  // clansettings:cangather_blackout
        };
        if ((varclient_1569 < 103)) {
            string0 = "Only overseers and above may set the citadel's language.";
            IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), comp(1096, 497));  // clansettings:language_blackout
        } else if ((script6028(int1) == 0)) {
            string0 = "You may only allow a rank to change the stronghold's language if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 497));  // clansettings:language_blackout
        } else {
            IF_SETHIDE(true, comp(1096, 497));  // clansettings:language_blackout
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admin ranks and above may remove the avatar habitat.";
            IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), comp(1096, 521));  // clansettings:removehabitat_blackout
        } else if ((script6631(int1) == 0)) {
            string0 = "You may only allow another rank to remove the avatar habitat if your rank has permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 521));  // clansettings:removehabitat_blackout
        } else {
            IF_SETHIDE(true, comp(1096, 521));  // clansettings:removehabitat_blackout
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admin ranks and above may customise the clan avatar.";
            IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), comp(1096, 545));  // clansettings:customiseavatar_blackout
        } else if ((script6633(int1) == 0)) {
            string0 = "You may only allow another rank to customise the clan avatar if your rank has permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 545));  // clansettings:customiseavatar_blackout
        } else {
            IF_SETHIDE(true, comp(1096, 545));  // clansettings:customiseavatar_blackout
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admins and above may decide which resource your clan avatars can gather for.";
            IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), comp(1096, 533));  // clansettings:fillbuffslot_blackout
        } else if ((script6635(int1) == 0)) {
            string0 = "You may only allow a rank to decide which resource your clan avatars can gather if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 533));  // clansettings:fillbuffslot_blackout
        } else {
            IF_SETHIDE(true, comp(1096, 533));  // clansettings:fillbuffslot_blackout
        };
        if ((varclient_1569 < 103)) {
            string0 = "Only overseers and above may move the build tick.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 594));  // clansettings:settick_blackout
        } else if ((script6030(int1) == 0)) {
            string0 = "You may only allow a rank to change the stronghold's build time if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 594));  // clansettings:settick_blackout
        } else {
            IF_SETHIDE(true, comp(1096, 594));  // clansettings:settick_blackout
        };
        if ((script9357(int1) == 0)) {
            string0 = "You may only allow a rank to broadcast a noticeboard event if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 400));  // clansettings:broadcastevent_blackout
        } else {
            IF_SETHIDE(true, comp(1096, 400));  // clansettings:broadcastevent_blackout
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admins and above may change clan broadcast settings.";
            IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), comp(1096, 326));  // clansettings:changebroadcastsettings_blackout
        } else if ((script3733(int1) == 0)) {
            string0 = "You may only allow a rank to change clan broadcast settings if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 326));  // clansettings:changebroadcastsettings_blackout
        } else {
            IF_SETHIDE(true, comp(1096, 326));  // clansettings:changebroadcastsettings_blackout
        };
        if ((varclient_1569 < 100)) {
            string0 = "Only admin+ may kick clan members.";
            IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), comp(1096, 254));  // clansettings:kickmember_blackout
        } else if ((script391(int1) == 0)) {
            string0 = "You may only allow a rank to kick a clan member if your rank has this permission.";
            IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 254));  // clansettings:kickmember_blackout
        } else {
            IF_SETHIDE(true, comp(1096, 254));  // clansettings:kickmember_blackout
        };
    } else {
        string0 = "Your rank is not high enough to alter this permission. You must be logged in to your clan's chat to adjust this.";
        IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 473));  // clansettings:canupgrade_blackout
        IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 485));  // clansettings:candowngrade_blackout
        IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), comp(1096, 266));  // clansettings:recruit_blackout
        IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 388));  // clansettings:addnotice_blackout
        IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), comp(1096, 350));  // clansettings:addsign_blackout
        IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), comp(1096, 509));  // clansettings:editfield_blackout
        IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 290));  // clansettings:lockwalls_blackout
        IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 278));  // clansettings:lockkeep_blackout
        IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 338));  // clansettings:accesswalls_blackout
        IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 314));  // clansettings:accesskeep_blackout
        IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 412));  // clansettings:startbattle_blackout
        IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), comp(1096, 302));  // clansettings:leadrcw_blackout
        IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 424));  // clansettings:startvote_blackout
        IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 436));  // clansettings:startmeeting_blackout
        IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), comp(1096, 460));  // clansettings:partytech_blackout
        IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), comp(1096, 448));  // clansettings:theatretech_blackout
        IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), comp(1096, 570));  // clansettings:canlockplots_blackout
        IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 558));  // clansettings:cancheckresources_blackout
        IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), comp(1096, 582));  // clansettings:cangather_blackout
        IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), comp(1096, 497));  // clansettings:language_blackout
        IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), comp(1096, 521));  // clansettings:removehabitat_blackout
        IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), comp(1096, 545));  // clansettings:customiseavatar_blackout
        IF_SETONMOUSEREPEAT(callback(script5139, string0, -2147483645), comp(1096, 533));  // clansettings:fillbuffslot_blackout
        IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 594));  // clansettings:settick_blackout
        IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 400));  // clansettings:broadcastevent_blackout
        IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 326));  // clansettings:changebroadcastsettings_blackout
        IF_SETONMOUSEREPEAT(callback(script5138, string0, -2147483645), comp(1096, 254));  // clansettings:kickmember_blackout
    };
    script5135();
    return;
}