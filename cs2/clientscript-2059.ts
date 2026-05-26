//
function script2059(): void {
    IF_SETGRAPHIC(15539 as graphic, comp(950, 83));
    IF_SETGRAPHIC(15539 as graphic, comp(950, 89));
    IF_SETGRAPHIC(15539 as graphic, comp(950, 95));
    IF_SETGRAPHIC(15539 as graphic, comp(950, 101));
    var int0 = script4186();
    IF_SETHIDE(false, comp(950, 164));
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    IF_SETOP(1, "View ship", comp(950, 91));
    IF_SETOP(1, "View ship", comp(950, 97));
    IF_SETOP(1, "View ship", comp(950, 103));
    if ((varbitplayer_17072 > 0)) {
        IF_SETHIDE(false, comp(950, 84));
        IF_SETGRAPHIC(15542 as graphic, comp(950, 85));
        IF_SETTEXT("Returned", comp(950, 87));
        string0 = "This ship needs to be welcomed home.";
    } else if ((varbitplayer_17081 > 0)) {
        IF_SETHIDE(false, comp(950, 84));
        IF_SETGRAPHIC(15546 as graphic, comp(950, 85));
        if ((((varbitplayer_17071 == 32723) || (varbitplayer_17071 == 32724)) || (varbitplayer_17071 == 32722))) {
            IF_SETTEXT("Damaged", comp(950, 87));
        } else {
            IF_SETTEXT("Sailing", comp(950, 87));
        };
        string0 = "This ship is currently on a mission.";
    } else {
        IF_SETHIDE(true, comp(950, 84));
        IF_SETTEXT("Ready", comp(950, 87));
        if ((varbitplayer_17132 == 1)) {
            IF_SETGRAPHIC(15541 as graphic, comp(950, 83));
            if ((script7294(1) != -1)) {
                IF_SETHIDE(true, comp(950, 164));
            } else {
                string0 = "This ship currently has no captain assigned.";
            };
        };
    };
    if ((int0 < 2)) {
        IF_SETHIDE(false, comp(950, 90));
        IF_SETGRAPHIC(15550 as graphic, comp(950, 91));
        IF_SETTEXT("No Ship", comp(950, 93));
        string1 = "You do not have a ship in this port bay.";
        IF_CLEAROPS(comp(950, 91));
    } else if ((varbitplayer_17083 > 0)) {
        IF_SETHIDE(false, comp(950, 90));
        IF_SETGRAPHIC(15542 as graphic, comp(950, 91));
        IF_SETTEXT("Returned", comp(950, 93));
        string1 = "This ship needs to be welcomed home.";
    } else if ((varbitplayer_17092 > 0)) {
        IF_SETHIDE(false, comp(950, 90));
        IF_SETGRAPHIC(15546 as graphic, comp(950, 91));
        if ((((varbitplayer_17082 == 32723) || (varbitplayer_17082 == 32724)) || (varbitplayer_17082 == 32722))) {
            IF_SETTEXT("Damaged", comp(950, 93));
        } else {
            IF_SETTEXT("Sailing", comp(950, 93));
        };
        string1 = "This ship is currently on a mission.";
    } else {
        IF_SETHIDE(true, comp(950, 90));
        IF_SETTEXT("Ready", comp(950, 93));
        if ((varbitplayer_17132 == 2)) {
            IF_SETGRAPHIC(15541 as graphic, comp(950, 89));
            if ((script7294(2) != -1)) {
                IF_SETHIDE(true, comp(950, 164));
            } else {
                string1 = "This ship currently has no captain assigned.";
            };
        };
    };
    if ((int0 < 3)) {
        IF_SETHIDE(false, comp(950, 96));
        IF_SETGRAPHIC(15550 as graphic, comp(950, 97));
        IF_SETTEXT("No Ship", comp(950, 99));
        string2 = "You do not have a ship in this port bay.";
        IF_CLEAROPS(comp(950, 97));
    } else if ((varbitplayer_17094 > 0)) {
        IF_SETHIDE(false, comp(950, 96));
        IF_SETGRAPHIC(15542 as graphic, comp(950, 97));
        IF_SETTEXT("Returned", comp(950, 99));
        string2 = "This ship needs to be welcomed home.";
    } else if ((varbitplayer_17103 > 0)) {
        IF_SETHIDE(false, comp(950, 96));
        IF_SETGRAPHIC(15546 as graphic, comp(950, 97));
        if ((((varbitplayer_17093 == 32723) || (varbitplayer_17093 == 32724)) || (varbitplayer_17093 == 32722))) {
            IF_SETTEXT("Damaged", comp(950, 99));
        } else {
            IF_SETTEXT("Sailing", comp(950, 99));
        };
        string2 = "This ship is currently on a mission.";
    } else {
        IF_SETHIDE(true, comp(950, 96));
        IF_SETTEXT("Ready", comp(950, 99));
        if ((varbitplayer_17132 == 3)) {
            IF_SETGRAPHIC(15541 as graphic, comp(950, 95));
            if ((script7294(3) != -1)) {
                IF_SETHIDE(true, comp(950, 164));
            } else {
                string2 = "This ship currently has no captain assigned.";
            };
        };
    };
    if ((int0 < 4)) {
        IF_SETHIDE(false, comp(950, 102));
        IF_SETGRAPHIC(15550 as graphic, comp(950, 103));
        IF_SETTEXT("No Ship", comp(950, 105));
        IF_CLEAROPS(comp(950, 103));
        string3 = "You do not have a ship in this port bay.";
    } else if ((varbitplayer_17105 > 0)) {
        IF_SETHIDE(false, comp(950, 102));
        IF_SETGRAPHIC(15542 as graphic, comp(950, 103));
        IF_SETTEXT("Returned", comp(950, 105));
        string3 = "This ship needs to be welcomed home.";
    } else if ((varbitplayer_17114 > 0)) {
        IF_SETHIDE(false, comp(950, 102));
        IF_SETGRAPHIC(15546 as graphic, comp(950, 103));
        if ((((varbitplayer_17104 == 32723) || (varbitplayer_17104 == 32724)) || (varbitplayer_17104 == 32722))) {
            IF_SETTEXT("Damaged", comp(950, 105));
        } else {
            IF_SETTEXT("Sailing", comp(950, 105));
        };
        string3 = "This ship is currently on a mission.";
    } else {
        IF_SETHIDE(true, comp(950, 102));
        IF_SETTEXT("Ready", comp(950, 105));
        if ((varbitplayer_17132 == 4)) {
            IF_SETGRAPHIC(15541 as graphic, comp(950, 101));
            if ((script7294(4) != -1)) {
                IF_SETHIDE(true, comp(950, 164));
            } else {
                string3 = "This ship currently has no captain assigned.";
            };
        };
    };
    switch (varbitplayer_17132) {
        case 1: {
            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), 62259364);
            break;
        }
        case 2: {
            IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -1), 62259364);
            break;
        }
        case 3: {
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -1), 62259364);
            break;
        }
        case 4: {
            IF_SETONMOUSEREPEAT(callback(script8799, string3, -2147483645, -1), 62259364);
            break;
        }
    };
    script2022();
    return;
}