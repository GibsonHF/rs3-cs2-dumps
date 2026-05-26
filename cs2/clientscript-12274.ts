//
function script12274(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var string0 = "---";
    var string1 = "---";
    var string2 = "";
    var int3 = -1;
    var int4 = -1;
    [int3, int4] = script15912(varclient_4485);
    var string3 = "You have not set a fastest time for this boss.";
    switch (int3) {
        case 2: {
            string3 = "You have not set a fastest time for this boss in solo mode.";
            break;
        }
        case 3: {
            string3 = "You have not set a fastest time for this boss in duo mode.";
            break;
        }
        case 4: {
            string3 = "You have not set a fastest time for this boss in group mode.";
            break;
        }
        case 5: {
            string3 = "You have not set a fastest time for this boss in enrage mode.";
            break;
        }
    };
    if ((varclient_4488 != -1)) {
        if ((varclient_4488 > 0)) {
            string0 = script15908(-1, -1, -1, script4705(varclient_4488), script16472(varclient_4488), 5, -1, 1, 1, 1, 0, 0, 0);
            string3 = `Fastest kill: ${string0}`;
            switch (int3) {
                case 2: {
                    string3 = `Fastest solo mode kill: ${string0}`;
                    string2 = "(solo mode)";
                    break;
                }
                case 3: {
                    string3 = `Fastest duo mode kill: ${string0}`;
                    string2 = "(duo mode)";
                    break;
                }
                case 4: {
                    string3 = `Fastest group mode kill: ${string0}`;
                    string2 = "(group mode)";
                    break;
                }
                case 5: {
                    string3 = `Fastest enrage mode kill: ${string0}`;
                    string2 = "(enrage mode)";
                    break;
                }
            };
            IF_SETOP(2, `Announce to Local Chat ${string2}`, comp(753, 57));
            IF_SETOP(3, `Announce to Friends Chat ${string2}`, comp(753, 57));
            IF_SETOP(4, `Announce to Clan Chat ${string2}`, comp(753, 57));
            IF_SETOP(5, `Announce to Guest Clan Chat ${string2}`, comp(753, 57));
            IF_SETOP(10, "Reset time", comp(753, 57));
        } else {
            IF_SETOP(2, "", comp(753, 57));
            IF_SETOP(3, "", comp(753, 57));
            IF_SETOP(4, "", comp(753, 57));
            IF_SETOP(5, "", comp(753, 57));
            IF_SETOP(10, "", comp(753, 57));
        };
        if ((varclient_4489 > -1)) {
            if ((varclient_4489 > 0)) {
                string1 = script15908(-1, -1, -1, script4705(varclient_4489), script16472(varclient_4489), 5, -1, 1, 1, 1, 0, 0, 0);
                switch (int4) {
                    case 1: {
                        string3 = strconcat(string3, `<br>Fastest hard mode kill: ${string1}`);
                        string2 = "(hard mode)";
                        break;
                    }
                    case 2: {
                        string3 = strconcat(string3, `<br>Fastest solo mode kill: ${string1}`);
                        string2 = "(solo mode)";
                        break;
                    }
                    case 3: {
                        string3 = strconcat(string3, `<br>Fastest duo mode kill: ${string1}`);
                        string2 = "(duo mode)";
                        break;
                    }
                    case 4: {
                        string3 = strconcat(string3, `<br>Fastest group mode kill: ${string1}`);
                        string2 = "(group mode)";
                        break;
                    }
                    case 5: {
                        string3 = `Fastest enrage mode kill: ${string0}`;
                        string2 = "(enrage mode)";
                        break;
                    }
                };
                if ((varclient_4485 == 45051 as struct)) {
                    string0 = strconcat(string0, `<br>${string1}`);
                } else {
                    string0 = strconcat(string0, `<br><col=FF3030>${string1}</col>`);
                };
                IF_SETOP(6, `Announce to Local Chat ${string2}`, comp(753, 57));
                IF_SETOP(7, `Announce to Friends Chat ${string2}`, comp(753, 57));
                IF_SETOP(8, `Announce to Clan Chat ${string2}`, comp(753, 57));
                IF_SETOP(9, `Announce to Guest Clan Chat ${string2}`, comp(753, 57));
                IF_SETOP(10, "Reset time", comp(753, 57));
            } else {
                switch (int4) {
                    case 1: {
                        string3 = strconcat(string3, "<br>You have not set a fastest time for this boss in hard mode.");
                        break;
                    }
                    case 2: {
                        string3 = strconcat(string3, "<br>You have not set a fastest time for this boss in solo mode.");
                        break;
                    }
                    case 3: {
                        string3 = strconcat(string3, "<br>You have not set a fastest time for this boss in duo mode.");
                        break;
                    }
                    case 4: {
                        string3 = strconcat(string3, "<br>You have not set a fastest time for this boss in group mode.");
                        break;
                    }
                    case 5: {
                        string3 = strconcat(string3, "<br>You have not set a fastest time for this boss in enrage mode.");
                        break;
                    }
                };
                if ((varclient_4485 == 45051 as struct)) {
                    string0 = strconcat(string0, "<br>---");
                } else {
                    string0 = strconcat(string0, "<br><col=FF3030>---</col>");
                };
                IF_SETOP(6, "", comp(753, 57));
                IF_SETOP(7, "", comp(753, 57));
                IF_SETOP(8, "", comp(753, 57));
                IF_SETOP(9, "", comp(753, 57));
            };
        } else {
            IF_SETOP(6, "", comp(753, 57));
            IF_SETOP(7, "", comp(753, 57));
            IF_SETOP(8, "", comp(753, 57));
            IF_SETOP(9, "", comp(753, 57));
        };
        IF_SETONMOUSEREPEAT(callback(script8799, string3, 49348669, -1), 49348662);
        IF_SETTEXT(string0, 49348664);
        IF_SETHIDE(0, 49348662);
    } else {
        IF_SETHIDE(true, comp(753, 54));
    };
    return;
}