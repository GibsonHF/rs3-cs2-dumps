//
function script18303(int0: unknown_int): void {
    var int1 = comp(-1, 65535);
    var string0 = "";
    var int2 = 0;
    switch (int0) {
        case 81264660: {
            int1 = comp(1240, 19);
            if ((script2156(503 as quest) == true)) {
                string0 = "You have completed this part of the quest!";
                IF_SETTEXT("That Old Black Magic: My One and Only Lute<br>(Completed)", comp(1240, 21));
            };
            break;
        }
        case 81264668: {
            int1 = comp(1240, 27);
            if ((script2156(503 as quest) == false)) {
                string0 = "You must complete My One and Only Lute before starting this part.";
                int2 = 1;
            } else if ((script2156(504 as quest) == true)) {
                string0 = "You have completed this part of the quest!";
                IF_SETTEXT("That Old Black Magic: Skelly By Everlight<br>(Completed)", comp(1240, 29));
            };
            break;
        }
        case 81264676: {
            int1 = comp(1240, 35);
            if ((script2156(503 as quest) == false)) {
                string0 = "You must complete My One and Only Lute before starting this part.";
                int2 = 1;
            } else if ((script2156(505 as quest) == true)) {
                string0 = "You have completed this part of the quest!";
                IF_SETTEXT("That Old Black Magic: Flesh and Bone<br>(Completed)", comp(1240, 37));
            };
            break;
        }
        case 81264652: {
            int1 = comp(1240, 11);
            if ((script2156(503 as quest) == false)) {
                string0 = "You must complete My One and Only Lute before starting this part.";
                int2 = 1;
            } else if ((script2156(506 as quest) == true)) {
                string0 = "You have completed this part of the quest!";
                IF_SETTEXT("That Old Black Magic: Hermy and Bass<br>(Completed)", comp(1240, 13));
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