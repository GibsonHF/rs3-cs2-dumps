//
function script4426(int0: unknown_int): void {
    var int1 = comp(-1, 65535);
    var string0 = "";
    var int2 = 0;
    switch (int0) {
        case 60817428: {
            int1 = comp(928, 19);
            if ((script2156(471 as quest) == true)) {
                string0 = "You have completed this quest!.";
                IF_SETTEXT("Once Upon a Time in Gielinor: Foreshadowing<br>(Completed)", comp(928, 21));
            };
            break;
        }
        case 60817436: {
            int1 = comp(928, 27);
            if ((script2156(471 as quest) == false)) {
                string0 = "You must complete the Foreshadowing miniquest to start this quest.";
                int2 = 1;
            } else if ((script2156(472 as quest) == true)) {
                string0 = "You have completed this quest!.";
                IF_SETTEXT("Once Upon a Time in Gielinor: Flashback<br>(Completed)", comp(928, 29));
            };
            break;
        }
        case 60817444: {
            int1 = comp(928, 35);
            if (((script2156(471 as quest) == false) || (script2156(472 as quest) == false))) {
                string0 = "You must complete the Foreshadowing and Flashback miniquests to start this quest.";
                int2 = 1;
            } else if ((script2156(475 as quest) == true)) {
                string0 = "You have completed this quest!.";
                IF_SETTEXT("Once Upon a Time in Gielinor: Fortunes<br>(Completed)", comp(928, 37));
            };
            break;
        }
        case 60817420: {
            int1 = comp(928, 11);
            if ((((script2156(471 as quest) == false) || (script2156(472 as quest) == false)) || (script2156(475 as quest) == false))) {
                string0 = "You must complete the Foreshadowing, Flashback and Fortunes miniquests to start this quest.";
                int2 = 1;
            } else if ((script2156(476 as quest) == true)) {
                string0 = "You have completed this quest!.";
                IF_SETTEXT("Once Upon a Time in Gielinor: Finale<br>(Completed)", comp(928, 13));
            };
            break;
        }
    };
    if ((int2 == 1)) {
        IF_SETHIDE(false, int1);
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), int1);
    } else {
        IF_SETHIDE(true, int1);
        IF_SETONMOUSEREPEAT(callback(), int1);
    };
    return;
}