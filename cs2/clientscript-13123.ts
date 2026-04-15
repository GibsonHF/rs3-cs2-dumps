//
function script13123(int0: component, int1: component, int2: component, int3: component, int4: struct, int5: component, int6: component, int7: component, int8: component, int9: component): void {
    var string0 = "";
    var string1 = "Enter text here.";
    var string2 = "Clear";
    var int10 = IF_GETLAYER(int0);
    var int11 = 1007;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 496;
    var int17 = 119;
    if (((IF_FIND(int5) == 1) && (cc_getparam(6306) != varplayer_6803))) {
        CC_DELETEALL(int9);
        switch (varplayer_6803) {
            case 1: {
                string0 = "My Examine Settings";
                string1 = "Enter new personal message here.";
                string2 = "Clear personal message";
                break;
            }
            case 2:
            case 3:
            case 4:
            case 5: {
                [string0, string1, string2, int17] = script13228(int9, varplayer_6803);
                int17 = (int17 + 119);
                break;
            }
        };
        if ((IF_FIND(int5) == 1)) {
            CC_SETPARAM_STRING(6307, string1);
            cc_setparam(6306, varplayer_6803);
        };
        IF_SETTEXT(string2, int8);
        script13125(int5, int6, int7);
        [int12, int13] = script11980(string0, int4);
        if ((int12 < 0)) {
            int12 = 0;
        };
        if ((int13 < 0)) {
            int13 = 0;
        };
        int12 = (int12 + int16);
        int13 = (int13 + int17);
        if ((int12 >= 512)) {
            int12 = 0;
            int14 = 1;
        };
        if ((int13 >= 334)) {
            int13 = 0;
            int15 = 1;
        };
        IF_SETSIZE(int12, int13, int14, int15, int10);
        script8421(int0, int1, int2, int3, string0, int4, int11, 1, -1 as graphic, -1 as struct);
    };
    return;
}