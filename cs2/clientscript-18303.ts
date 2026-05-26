//
function script18303(int0: number): void {
    var int1 = -1;
    var string0 = "";
    var int2 = 0;
    switch (int0) {
        case 81264660: {
            int1 = 81264659;
            if ((script2156(503) == 1)) {
                string0 = "You have completed this part of the quest!";
                IF_SETTEXT("That Old Black Magic: My One and Only Lute<br>(Completed)", 81264661);
            };
            break;
        }
        case 81264668: {
            int1 = 81264667;
            if ((script2156(503) == 0)) {
                string0 = "You must complete My One and Only Lute before starting this part.";
                int2 = 1;
            } else if ((script2156(504) == 1)) {
                string0 = "You have completed this part of the quest!";
                IF_SETTEXT("That Old Black Magic: Skelly By Everlight<br>(Completed)", 81264669);
            };
            break;
        }
        case 81264676: {
            int1 = 81264675;
            if ((script2156(503) == 0)) {
                string0 = "You must complete My One and Only Lute before starting this part.";
                int2 = 1;
            } else if ((script2156(505) == 1)) {
                string0 = "You have completed this part of the quest!";
                IF_SETTEXT("That Old Black Magic: Flesh and Bone<br>(Completed)", 81264677);
            };
            break;
        }
        case 81264652: {
            int1 = 81264651;
            if ((script2156(503) == 0)) {
                string0 = "You must complete My One and Only Lute before starting this part.";
                int2 = 1;
            } else if ((script2156(506) == 1)) {
                string0 = "You have completed this part of the quest!";
                IF_SETTEXT("That Old Black Magic: Hermy and Bass<br>(Completed)", 81264653);
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