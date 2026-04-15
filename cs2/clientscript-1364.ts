//[proc,subchanged]
function script1364(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 1;
    if ((IF_HASSUB(struct_getparam(21300, 3505)) == 1)) {
        if ((script8314(1008) == -1)) {
            IF_SETHIDE(false, struct_getparam(21300, 3503));
            IF_SETHIDE(false, struct_getparam(21300, 3505));
            IF_SETHIDE(true, comp(1477, 739));
            script10399(-1);
        };
    } else if ((IF_HASSUB(comp(1477, 739)) == 1)) {
        if ((script8314(1008) == -1)) {
            IF_SETHIDE(false, struct_getparam(21300, 3503));
            IF_SETHIDE(true, struct_getparam(21300, 3505));
            IF_SETHIDE(false, comp(1477, 739));
            script10399(-1);
        };
    } else {
        IF_SETHIDE(true, struct_getparam(21300, 3503));
        if ((varbitplayer_38842 == 1)) {
            script13894(-2, comp(-1, 65535), comp(-1, 65535));
        };
        if ((varbitplayer_3028 != 1)) {
            script1239();
        };
    };
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    var int9 = -1;
    var int10 = -1;
    var int11 = struct_getparam(21299, 3503);
    if ((IF_HASSUB(struct_getparam(21299, 3505)) == 1)) {
        if (((((script8314(17) == -1) && (script14245() == 0)) && (varbitplayer_27169 == 0)) && (varbitplayer_38842 == 0))) {
            script8311(17);
        };
    } else if ((script8314(17) != -1)) {
        script8323(17, 0);
    };
    if ((IF_HASSUB(script8071()) == 1)) {
        IF_SETNOCLICKTHROUGH(1, struct_getparam(21303, 3503));
        script14163();
    } else if ((IF_HASSUB(script18936()) == 1)) {
        if ((IF_HASSUBOVERLAY(script18936(), 416 as overlayinterface) == 1)) {
            IF_SETNOCLICKTHROUGH(0, struct_getparam(21303, 6121));
        } else {
            IF_SETNOCLICKTHROUGH(1, struct_getparam(21303, 6121));
        };
        script14163();
    } else if ((IF_HASSUB(comp(1477, 749)) == 1)) {
        if ((script8847(12) != -1)) {
            script8841(12, 0);
        };
        if ((IF_HASSUBOVERLAY(comp(1418, 2), 1469 as overlayinterface) == 1)) {
            if ((varclient_5 == 0)) {
                if ((script8847(10) != -1)) {
                    script8841(10, 0);
                };
                IF_SETNOCLICKTHROUGH(0, struct_getparam(21303, 3503));
                IF_SETNOCLICKTHROUGH(0, struct_getparam(21303, 6121));
                IF_SETHIDE(true, comp(1418, 3));
                script3374(1006);
            } else {
                IF_SETNOCLICKTHROUGH(1, struct_getparam(21303, 3503));
                IF_SETNOCLICKTHROUGH(0, struct_getparam(21303, 6121));
                IF_SETHIDE(false, comp(1418, 3));
                if ((script8847(10) == -1)) {
                    script8841(10, 1);
                };
                script14163();
            };
        } else if (((IF_HASSUBOVERLAY(comp(1418, 2), 389 as overlayinterface) == 1) && (IF_GETHIDE(comp(389, 0)) == true))) {
            IF_SETNOCLICKTHROUGH(0, struct_getparam(21303, 3503));
            IF_SETNOCLICKTHROUGH(0, struct_getparam(21303, 6121));
            IF_SETHIDE(true, comp(1418, 3));
            script3374(1006);
        } else {
            IF_SETNOCLICKTHROUGH(1, struct_getparam(21303, 3503));
            IF_SETNOCLICKTHROUGH(0, struct_getparam(21303, 6121));
            IF_SETHIDE(false, comp(1418, 3));
        };
    } else {
        if ((script8847(12) != -1)) {
            script8841(12, 0);
        };
        if ((script8847(10) != -1)) {
            script8841(10, 0);
        };
        IF_SETNOCLICKTHROUGH(0, struct_getparam(21303, 3503));
        IF_SETNOCLICKTHROUGH(0, struct_getparam(21303, 6121));
        script3374(1006);
        script14163();
    };
    if ((varbitplayer_27169 == 1)) {
        script9946();
    };
    var int12 = script8072();
    var int13 = script8074();
    if ((IF_HASSUB(int12) == 1)) {
        if ((script8847(18) == -1)) {
            script3688();
        };
        if ((varbitplayer_38842 == 0)) {
            IF_SENDTOBACK(script14198());
        };
        script20393(1, 1);
    } else {
        if (((script8847(18) != -1) && (IF_HASSUB(int13) == 0))) {
            script8841(18, 0);
        };
        IF_SETNOCLICKTHROUGH(0, struct_getparam(21304, 3505));
        script3374(1007);
        script20393(0, 1);
    };
    if ((IF_HASSUB(int13) == 1)) {
        if ((script8847(18) == -1)) {
            script3688();
        };
        script20393(1, 5);
    } else {
        if (((script8847(18) != -1) && (IF_HASSUB(int12) == 0))) {
            script8841(18, 0);
        };
        script20393(0, 5);
    };
    if ((IF_HASSUB(comp(1477, 744)) == 1)) {
        script20393(1, 7);
    } else {
        script20393(0, 7);
    };
    if ((IF_HASSUB(script14198()) == 0)) {
        script20393(0, 3);
    };
    if (((varclient_3467 == 1017) && (script10906() == 0))) {
        script8306();
    };
    script3288();
    if (((((varplayer_1784 != -1 as npc) || (varplayer_1831 == 24906 as obj)) || (varplayer_1831 == 24907 as obj)) || (varplayer_1831 == 24908 as obj))) {
        IF_SETHIDE(false, comp(1430, 26));
    } else if (((varplayer_1831 != -1 as obj) && (OC_CATEGORY(varplayer_1831) == 2840 as category))) {
        IF_SETHIDE(false, comp(1430, 26));
    } else {
        script8084();
    };
    if (((IF_HASSUB(script8072()) == 1) && (IF_HASSUB(script8073()) == 1))) {
        script10399(1);
    };
    return;
}