//
function script6284(int0: number): void {
    var int1 = -1;
    var int2 = -1;
    var string0 = "";
    if ((int0 == -1)) {
        int1 = -1;
        string0 = "";
    } else if ((int0 == 0)) {
        int1 = 11233;
        string0 = "6";
    } else if ((int0 == 1)) {
        int1 = 11234;
        string0 = "5";
    } else if ((int0 == 2)) {
        int1 = 11235;
        string0 = "4";
    } else if ((int0 == 3)) {
        int1 = 11236;
        string0 = "3";
    } else if ((int0 == 4)) {
        int1 = 11237;
        string0 = "2";
    } else if ((int0 == 5)) {
        int1 = 11238;
        string0 = "1";
    } else if ((int0 == 6)) {
        int1 = 11239;
        string0 = "";
    } else if ((int0 == 7)) {
        int1 = 11240;
        string0 = "";
    };
    if ((CC_FIND(84934670, 0) == 1)) {
        if ((int1 != -1)) {
            int2 = CC_GETGRAPHIC();
            if ((int2 == int1)) {
                return;
            };
            IF_SETHIDE(0, 84934671);
            if ((int0 != 6)) {
                IF_SETTEXT("<br>Supreme Champions:<br>None", 84934656);
                IF_SETHIDE(1, 84934666);
                IF_SETSCROLLSIZE(0, 24, 84934665);
            };
            IF_SETTEXT(string0, 84934674);
            CC_SETGRAPHIC(int1);
            CC_CREATE(84934670, 5, 1);
            CC_SETGRAPHIC(int2);
            CC_SETSIZE(50, 50, 0, 0);
            CC_SETPOSITION(0, 0, 4, 4);
            IF_SETONTIMER(callback(script6285, 1), 84934670);
        } else {
            CC_SETGRAPHIC(-1);
            IF_SETHIDE(1, 84934671);
            varclient_1931 = 0;
            IF_SETHIDE(1, 84934657);
            IF_SET2DANGLE(0, 84934660);
        };
    } else if ((int1 != -1)) {
        IF_SETHIDE(0, 84934671);
        IF_SETTEXT(string0, 84934674);
        CC_CREATE(84934670, 5, 0);
        CC_SETGRAPHIC(int1);
        CC_SETSIZE(50, 50, 0, 0);
        CC_SETPOSITION(0, 0, 4, 4);
    };
    return;
}