//
function script2059(): void {
    IF_SETGRAPHIC(15539, 62259283);
    IF_SETGRAPHIC(15539, 62259289);
    IF_SETGRAPHIC(15539, 62259295);
    IF_SETGRAPHIC(15539, 62259301);
    var int0 = script4186();
    IF_SETHIDE(0, 62259364);
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    IF_SETOP(1, "View ship", 62259291);
    IF_SETOP(1, "View ship", 62259297);
    IF_SETOP(1, "View ship", 62259303);
    if ((varbitplayer_17072 > 0)) {
        IF_SETHIDE(0, 62259284);
        IF_SETGRAPHIC(15542, 62259285);
        IF_SETTEXT("Returned", 62259287);
        string0 = "This ship needs to be welcomed home.";
    } else if ((varbitplayer_17081 > 0)) {
        IF_SETHIDE(0, 62259284);
        IF_SETGRAPHIC(15546, 62259285);
        if ((((varbitplayer_17071 == 32723) || (varbitplayer_17071 == 32724)) || (varbitplayer_17071 == 32722))) {
            IF_SETTEXT("Damaged", 62259287);
        } else {
            IF_SETTEXT("Sailing", 62259287);
        };
        string0 = "This ship is currently on a mission.";
    } else {
        IF_SETHIDE(1, 62259284);
        IF_SETTEXT("Ready", 62259287);
        if ((varbitplayer_17132 == 1)) {
            IF_SETGRAPHIC(15541, 62259283);
            if ((script7294(1) != -1)) {
                IF_SETHIDE(1, 62259364);
            } else {
                string0 = "This ship currently has no captain assigned.";
            };
        };
    };
    if ((int0 < 2)) {
        IF_SETHIDE(0, 62259290);
        IF_SETGRAPHIC(15550, 62259291);
        IF_SETTEXT("No Ship", 62259293);
        string1 = "You do not have a ship in this port bay.";
        IF_CLEAROPS(62259291);
    } else if ((varbitplayer_17083 > 0)) {
        IF_SETHIDE(0, 62259290);
        IF_SETGRAPHIC(15542, 62259291);
        IF_SETTEXT("Returned", 62259293);
        string1 = "This ship needs to be welcomed home.";
    } else if ((varbitplayer_17092 > 0)) {
        IF_SETHIDE(0, 62259290);
        IF_SETGRAPHIC(15546, 62259291);
        if ((((varbitplayer_17082 == 32723) || (varbitplayer_17082 == 32724)) || (varbitplayer_17082 == 32722))) {
            IF_SETTEXT("Damaged", 62259293);
        } else {
            IF_SETTEXT("Sailing", 62259293);
        };
        string1 = "This ship is currently on a mission.";
    } else {
        IF_SETHIDE(1, 62259290);
        IF_SETTEXT("Ready", 62259293);
        if ((varbitplayer_17132 == 2)) {
            IF_SETGRAPHIC(15541, 62259289);
            if ((script7294(2) != -1)) {
                IF_SETHIDE(1, 62259364);
            } else {
                string1 = "This ship currently has no captain assigned.";
            };
        };
    };
    if ((int0 < 3)) {
        IF_SETHIDE(0, 62259296);
        IF_SETGRAPHIC(15550, 62259297);
        IF_SETTEXT("No Ship", 62259299);
        string2 = "You do not have a ship in this port bay.";
        IF_CLEAROPS(62259297);
    } else if ((varbitplayer_17094 > 0)) {
        IF_SETHIDE(0, 62259296);
        IF_SETGRAPHIC(15542, 62259297);
        IF_SETTEXT("Returned", 62259299);
        string2 = "This ship needs to be welcomed home.";
    } else if ((varbitplayer_17103 > 0)) {
        IF_SETHIDE(0, 62259296);
        IF_SETGRAPHIC(15546, 62259297);
        if ((((varbitplayer_17093 == 32723) || (varbitplayer_17093 == 32724)) || (varbitplayer_17093 == 32722))) {
            IF_SETTEXT("Damaged", 62259299);
        } else {
            IF_SETTEXT("Sailing", 62259299);
        };
        string2 = "This ship is currently on a mission.";
    } else {
        IF_SETHIDE(1, 62259296);
        IF_SETTEXT("Ready", 62259299);
        if ((varbitplayer_17132 == 3)) {
            IF_SETGRAPHIC(15541, 62259295);
            if ((script7294(3) != -1)) {
                IF_SETHIDE(1, 62259364);
            } else {
                string2 = "This ship currently has no captain assigned.";
            };
        };
    };
    if ((int0 < 4)) {
        IF_SETHIDE(0, 62259302);
        IF_SETGRAPHIC(15550, 62259303);
        IF_SETTEXT("No Ship", 62259305);
        IF_CLEAROPS(62259303);
        string3 = "You do not have a ship in this port bay.";
    } else if ((varbitplayer_17105 > 0)) {
        IF_SETHIDE(0, 62259302);
        IF_SETGRAPHIC(15542, 62259303);
        IF_SETTEXT("Returned", 62259305);
        string3 = "This ship needs to be welcomed home.";
    } else if ((varbitplayer_17114 > 0)) {
        IF_SETHIDE(0, 62259302);
        IF_SETGRAPHIC(15546, 62259303);
        if ((((varbitplayer_17104 == 32723) || (varbitplayer_17104 == 32724)) || (varbitplayer_17104 == 32722))) {
            IF_SETTEXT("Damaged", 62259305);
        } else {
            IF_SETTEXT("Sailing", 62259305);
        };
        string3 = "This ship is currently on a mission.";
    } else {
        IF_SETHIDE(1, 62259302);
        IF_SETTEXT("Ready", 62259305);
        if ((varbitplayer_17132 == 4)) {
            IF_SETGRAPHIC(15541, 62259301);
            if ((script7294(4) != -1)) {
                IF_SETHIDE(1, 62259364);
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