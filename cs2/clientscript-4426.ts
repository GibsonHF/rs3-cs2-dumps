//
function script4426(int0: number): void {
    var int1 = comp(-1, 65535);
    var string0 = "";
    var int2 = 0;
    switch (int0) {
        case 60817428: {
            int1 = comp(928, 19);  // quest_out0_subquest_journal:out1_disabled_layer
            if ((script2156(471) == 1)) {
                string0 = "You have completed this quest!.";
                IF_SETTEXT("Once Upon a Time in Gielinor: Foreshadowing<br>(Completed)", comp(928, 21));  // quest_out0_subquest_journal:out1_text_field
            };
            break;
        }
        case 60817436: {
            int1 = comp(928, 27);  // quest_out0_subquest_journal:out2_disabled_layer
            if ((script2156(471) == 0)) {
                string0 = "You must complete the Foreshadowing miniquest to start this quest.";
                int2 = 1;
            } else if ((script2156(472) == 1)) {
                string0 = "You have completed this quest!.";
                IF_SETTEXT("Once Upon a Time in Gielinor: Flashback<br>(Completed)", comp(928, 29));  // quest_out0_subquest_journal:out2_text_field
            };
            break;
        }
        case 60817444: {
            int1 = comp(928, 35);  // quest_out0_subquest_journal:out3_disabled_layer
            if (((script2156(471) == 0) || (script2156(472) == 0))) {
                string0 = "You must complete the Foreshadowing and Flashback miniquests to start this quest.";
                int2 = 1;
            } else if ((script2156(475) == 1)) {
                string0 = "You have completed this quest!.";
                IF_SETTEXT("Once Upon a Time in Gielinor: Fortunes<br>(Completed)", comp(928, 37));  // quest_out0_subquest_journal:out3_text_field
            };
            break;
        }
        case 60817420: {
            int1 = comp(928, 11);  // quest_out0_subquest_journal:out4_disabled_layer
            if ((((script2156(471) == 0) || (script2156(472) == 0)) || (script2156(475) == 0))) {
                string0 = "You must complete the Foreshadowing, Flashback and Fortunes miniquests to start this quest.";
                int2 = 1;
            } else if ((script2156(476) == 1)) {
                string0 = "You have completed this quest!.";
                IF_SETTEXT("Once Upon a Time in Gielinor: Finale<br>(Completed)", comp(928, 13));  // quest_out0_subquest_journal:out4_text_field
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