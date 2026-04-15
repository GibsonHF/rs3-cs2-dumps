//
function script11364(int0: struct, int1: component, int2: int): void {
    if (((script4761(25) == 0) && (script6431() == false))) {
        return;
    };
    var string0 = "Drag a pet ability on to this slot to start using it.";
    if ((int0 == -1 as struct)) {
        switch (int1) {
            case 43384932:
            case 43384929:
            case 43384924: {
                string0 = "No ability set.<br>To set an ability, select the 'abilities' button from the 'Pets' tab in the 'Customisations' window.";
                break;
            }
            case -1: {
                return;
            }
        };
        script8800(string0, int1, int2);
        return;
    };
    var int3 = comp(1618, 0);
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 106037260;
    var int9 = 106037261;
    var int10 = comp(1618, 14);
    var int11 = 106037263;
    var int12 = comp(1618, 16);
    var int13 = 0;
    var int14 = 0;
    var string1 = "m";
    var int15 = 0;
    var int16 = 14;
    var string2 = "";
    var string3 = "";
    var int17 = 0;
    var string4 = "";
    var int18 = 252;
    var int19 = 0;
    var int20 = 0;
    script6211(int1, int2);
    if ((varclient_2 != 1)) {
        script8808();
        IF_OPENSUBCLIENT(comp(1477, 908), 1618);
        varclient_2 = 1;
        string2 = struct_getparam(int0, 5058);
        string3 = struct_getparam(int0, 5059);
        int17 = struct_getparam(int0, 5063);
        int13 = struct_getparam(int0, 5062);
        if ((int17 == 1)) {
            string4 = "Active ability";
        } else {
            string4 = "Passive ability";
        };
        stack(struct_getparam(int0, 5060));
        stack(int11);
        IF_SETGRAPHIC();
        IF_SETTEXT(`<u=B37A2F>${string2}</u><br>${string4}`, int8);
        IF_SETTEXT(string3, int9);
        int15 = (PARAHEIGHT(IF_GETTEXT(int9), IF_GETWIDTH(int9), 18) * int16);
        IF_SETSIZE(IF_GETWIDTH(int9), int15, 0, 0, int9);
        int20 = MAX(0, (int15 - 57));
        int19 = (int20 + 150);
        IF_SETSIZE(IF_GETWIDTH(int3), int19, 0, 0, int3);
        if ((int13 > 0)) {
            IF_SETHIDE(false, int12);
            IF_SETHIDE(false, int10);
            int13 = (struct_getparam(int0, 5062) / 100);
            if ((int13 >= 60)) {
                int13 = (int13 / 60);
                string1 = "hr";
            };
            IF_SETTEXT(`${inttostring(int13, 10)}${string1}`, int10);
        } else {
            IF_SETHIDE(true, int12);
            IF_SETHIDE(true, int10);
        };
        if ((int2 == -1)) {
            [int4, int5] = script8405(int1);
        } else {
            [int4, int5] = script8406(int1, int2);
        };
        if (((int5 - int19) >= 0)) {
            int5 = (int5 - int19);
        };
        if ((int2 == -1)) {
            int6 = IF_GETWIDTH(int1);
        } else if ((CC_FIND(int1, int2) == 1)) {
            int6 = CC_GETWIDTH();
        } else {
            int6 = 25;
        };
        int4 = (int4 + (int6 / 2));
        int4 = MAX(int4, 0);
        if (((int4 + int18) > IF_GETWIDTH(comp(1477, 908)))) {
            int4 = (IF_GETWIDTH(comp(1477, 908)) - int18);
        };
        IF_SETSIZE(int18, int19, 0, 0, int3);
        if ((script6431() == true)) {
            return;
        };
        IF_SETPOSITION(int4, int5, 0, 0, int3);
    };
    return;
}