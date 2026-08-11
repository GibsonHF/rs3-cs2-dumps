//
function script4697(int0: number): void {
    var int1 = CLIENTCLOCK();
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var string5 = "";
    var int2 = 0;
    var int3 = 1;
    if (((int1 >= (int0 + 200)) || (int0 == 0))) {
        var int0 = int1;
        if ((varclient_1540 < 1)) {
            string0 = "Destroyed";
        } else if ((varclient_1540 < (5 / 2))) {
            string0 = "Under attack";
        } else if ((varclient_1540 < 5)) {
            string0 = "Unlit ammo";
        } else {
            string0 = "Fine";
        };
        if ((varclient_1541 < 1)) {
            string1 = "Empty";
        } else if ((varclient_1541 < (10 / 2))) {
            string1 = "Low";
        } else if ((varclient_1541 < 10)) {
            string1 = "Almost full";
        } else {
            string1 = "Full";
        };
        if ((varclient_1542 == 1)) {
            string2 = "1 broken";
        } else if ((varclient_1542 > 0)) {
            string2 = `${inttostring(varclient_1542, 10)} broken`;
        } else {
            string2 = "Repaired";
        };
        if ((varclient_1543 == 1)) {
            string3 = `${inttostring(int3, 10)} broken`;
        } else if ((varclient_1543 > 0)) {
            string3 = `${inttostring(varclient_1543, 10)} broken`;
        } else {
            string3 = "Repaired";
        };
        int2 = (varclient_1545 / 2);
        IF_SETSIZE(((int2 * 16384) / 100), IF_GETHEIGHT(comp(500, 15)), 2, 0, comp(500, 15));  // loy_defence:progbar_fill
        if ((int2 < 97)) {
            IF_SETHIDE(true, comp(500, 16));  // loy_defence:progbar_end_r
        };
        string4 = inttostring((varclient_1544 * 10), 10);
        IF_SETTEXT(`${inttostring(varclient_1546, 10)} min`, comp(500, 27));  // loy_defence:time
        if ((varclient_1547 != 0)) {
            IF_SETHIDE(false, comp(500, 13));  // loy_defence:spec_event
            switch (varclient_1547) {
                case 1: {
                    string5 = "Clobbering Time!";
                    break;
                }
                case 2: {
                    string5 = "Slow-mo";
                    break;
                }
                case 3: {
                    string5 = "No Well";
                    break;
                }
                case 4: {
                    string5 = "Oil Spill";
                    break;
                }
                case 5: {
                    string5 = "Fire in the Hole!";
                    break;
                }
                case 6: {
                    string5 = "Armoured Trolls";
                    break;
                }
            };
        } else {
            IF_SETHIDE(true, comp(500, 13));  // loy_defence:spec_event
        };
        script4699(32768009, 32768024, 32768025, "Ballista", string0);
        script4699(32768003, 32768022, 32768023, "Oil", string1);
        script4699(32768005, 32768028, 32768029, "Barricades", string2);
        script4699(32768007, 32768020, 32768021, "Walls", string3);
        script4699(32768011, 32768030, 32768031, "Trolls", string4);
        if ((varclient_1547 != 0)) {
            script4699(32768013, 32768018, 32768019, "Troll Attack", string5);
        };
    };
    IF_SETONTIMER(callback(script4697, int0), comp(500, 9));  // loy_defence:ballista
    return;
}