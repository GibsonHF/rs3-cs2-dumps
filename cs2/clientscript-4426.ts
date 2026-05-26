//
function script4426(int0: number): void {
    var int1 = -1;
    var string0 = "";
    var int2 = 0;
    switch (int0) {
        case 60817428: {
            int1 = 60817427;
            if ((script2156(471) == 1)) {
                string0 = "You have completed this quest!.";
                IF_SETTEXT("Once Upon a Time in Gielinor: Foreshadowing<br>(Completed)", 60817429);
            };
            break;
        }
        case 60817436: {
            int1 = 60817435;
            if ((script2156(471) == 0)) {
                string0 = "You must complete the Foreshadowing miniquest to start this quest.";
                int2 = 1;
            } else if ((script2156(472) == 1)) {
                string0 = "You have completed this quest!.";
                IF_SETTEXT("Once Upon a Time in Gielinor: Flashback<br>(Completed)", 60817437);
            };
            break;
        }
        case 60817444: {
            int1 = 60817443;
            if (((script2156(471) == 0) || (script2156(472) == 0))) {
                string0 = "You must complete the Foreshadowing and Flashback miniquests to start this quest.";
                int2 = 1;
            } else if ((script2156(475) == 1)) {
                string0 = "You have completed this quest!.";
                IF_SETTEXT("Once Upon a Time in Gielinor: Fortunes<br>(Completed)", 60817445);
            };
            break;
        }
        case 60817420: {
            int1 = 60817419;
            if ((((script2156(471) == 0) || (script2156(472) == 0)) || (script2156(475) == 0))) {
                string0 = "You must complete the Foreshadowing, Flashback and Fortunes miniquests to start this quest.";
                int2 = 1;
            } else if ((script2156(476) == 1)) {
                string0 = "You have completed this quest!.";
                IF_SETTEXT("Once Upon a Time in Gielinor: Finale<br>(Completed)", 60817421);
            };
            break;
        }
    };
    if ((int2 == 1)) {
        IF_SETHIDE(0, int1);
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), int1);
    } else {
        IF_SETHIDE(1, int1);
        IF_SETONMOUSEREPEAT(callback(), int1);
    };
    return;
}