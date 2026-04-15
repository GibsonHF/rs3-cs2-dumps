//
function script10860(int0: unknown_int, int1: unknown_int): void {
    var int2 = 0;
    var int3 = 0;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var string0 = "";
    var string1 = "";
    switch (int0) {
        case 103022604: {
            int2 = 1;
            int3 = 1;
            int4 = 24840;
            int5 = 24841;
            int6 = 24842;
            string0 = "Lletya";
            string1 = "This teleport will take you to the town of Lletya.";
            break;
        }
        case 103022605: {
            int2 = 1;
            int3 = 2;
            int4 = 24843;
            int5 = 24844;
            int6 = 24845;
            if ((varbitplayer_29077 < 90)) {
                string0 = "Eluned";
                string1 = "This teleport will take you to Eluned's current location.";
            } else {
                string0 = "Islwyn";
                string1 = "This teleport will take you to Islwyn in Prifddinas.";
            };
            break;
        }
        case 103022607: {
            int2 = 2;
            int3 = 3;
            int4 = 24846;
            int5 = 24847;
            int6 = 24933;
            string0 = "Tyras Camp";
            string1 = "This teleport will take you to the Tyras forces' encampment.";
            break;
        }
        case 103022608: {
            int2 = 2;
            int3 = 4;
            int4 = 24934;
            int5 = 24935;
            int6 = 24936;
            string0 = "Poison Waste";
            string1 = "This teleport will take you to the eastern edge of the Poison Waste.";
            break;
        }
        case 103022609: {
            int2 = 3;
            int3 = 5;
            int4 = 24937;
            int5 = 24938;
            int6 = 24939;
            string0 = "Death Altar";
            string1 = "This teleport will take you to the Death Altar ruins.";
            break;
        }
        case 103022610: {
            int2 = 3;
            int3 = 6;
            int4 = 24940;
            int5 = 24941;
            int6 = 24942;
            string0 = "Elf Camp";
            string1 = "This teleport will take you to the Iorwerth forces' encampment.";
            break;
        }
        case 103022606: {
            int2 = 3;
            int3 = 7;
            int4 = 24943;
            int5 = 24944;
            int6 = 24945;
            string0 = "Mushroom patch";
            string1 = "This teleport will take you to the mushroom patch.";
            break;
        }
        case 103022611: {
            int2 = 4;
            int3 = 8;
            int4 = 24943;
            int5 = 24944;
            int6 = 24945;
            string0 = "Harmony Pillars";
            string1 = "This teleport will take you to the Meilyr area of Prifddinas.";
            break;
        }
    };
    if ((int1 == 1)) {
        IF_SETTEXT(string0, comp(1572, 3));
        if (((int3 > 0) && (script13749() == false))) {
            string1 = `${string1}<br>Keybind: ${inttostring(int3, 10)}`;
        };
        IF_SETTEXT(string1, comp(1572, 4));
    } else {
        IF_SETTEXT("Teleport Destination", comp(1572, 3));
        IF_SETTEXT("Hover over a teleport icon to learn where it leads.", comp(1572, 4));
    };
    if ((script10861(int2) == 1)) {
        if ((int1 == 1)) {
            stack(int5);
            stack(int0);
            IF_SETGRAPHIC();
        } else {
            stack(int4);
            stack(int0);
            IF_SETGRAPHIC();
        };
        IF_SETHIDE(true, comp(1572, 10));
    } else {
        stack(int6);
        stack(int0);
        IF_SETGRAPHIC();
        switch (int2) {
            case 1: {
                IF_SETTEXT("You can unlock this destination by completing all tasks in the Easy Tirannwn Task Set.", comp(1572, 24));
                break;
            }
            case 2: {
                IF_SETTEXT("You can unlock this destination by completing all tasks in the Medium Tirannwn Task Set.", comp(1572, 24));
                break;
            }
            case 3: {
                IF_SETTEXT("You can unlock this destination by completing all tasks in the Hard Tirannwn Task Set.", comp(1572, 24));
                break;
            }
            case 4: {
                IF_SETTEXT("You can unlock this destination by completing all tasks in the Elite Tirannwn Task Set.", comp(1572, 24));
                break;
            }
        };
        if ((int1 == 1)) {
            IF_SETHIDE(false, comp(1572, 10));
        } else {
            IF_SETHIDE(true, comp(1572, 10));
        };
    };
    return;
}