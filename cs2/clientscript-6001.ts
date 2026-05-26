//
function script6001(): void {
    if ((script13702(3) == 0)) {
        IF_SETGRAPHIC(23032, 71565322);
    };
    if ((script13702(5) == 0)) {
        IF_SETGRAPHIC(23025, 71565324);
    };
    if ((script13702(7) == 0)) {
        IF_SETGRAPHIC(23029, 71565326);
    };
    if ((script13702(8) == 0)) {
        IF_SETGRAPHIC(23031, 71565327);
    };
    if ((script13702(9) == 0)) {
        IF_SETGRAPHIC(23022, 71565328);
    };
    if ((script13702(10) == 0)) {
        IF_SETGRAPHIC(23020, 71565329);
    };
    if ((script13702(11) == 0)) {
        IF_SETGRAPHIC(23028, 71565330);
    };
    if ((script13702(13) == 0)) {
        IF_SETGRAPHIC(23024, 71565332);
    };
    if ((script13702(14) == 0)) {
        IF_SETGRAPHIC(23021, 71565333);
    };
    if ((script13702(22) == 0)) {
        IF_SETGRAPHIC(23041, 71565344);
    };
    if ((script13702(23) == 0)) {
        IF_SETGRAPHIC(23042, 71565345);
    };
    if ((script13702(29) == 0)) {
        IF_SETGRAPHIC(31780, 71565347);
    };
    if ((script13702(33) == 0)) {
        IF_SETGRAPHIC(35679, 71565352);
    };
    if (((MAP_MEMBERS() == 0) && (PLAYERMEMBER() == 1))) {
        IF_SETGRAPHIC(23033, 71565320);
        IF_SETGRAPHIC(23034, 71565321);
        IF_SETGRAPHIC(23023, 71565323);
        IF_SETGRAPHIC(23026, 71565325);
        IF_SETGRAPHIC(23027, 71565331);
        IF_SETGRAPHIC(23030, 71565337);
        IF_SETGRAPHIC(23035, 71565338);
        IF_SETGRAPHIC(23036, 71565339);
        IF_SETGRAPHIC(23038, 71565340);
        IF_SETGRAPHIC(23039, 71565341);
        IF_SETGRAPHIC(23037, 71565342);
        IF_SETGRAPHIC(23040, 71565343);
        IF_SETGRAPHIC(24252, 71565346);
        IF_SETGRAPHIC(31133, 71565335);
        IF_SETGRAPHIC(1083, 71565336);
        IF_SETGRAPHIC(27107, 71565334);
    } else if ((MAP_MEMBERS() == 0)) {
        if ((IF_FIND(comp(1092, 8)) == 1)) {
            CC_CREATE[1](71565353, 5, IF_GETNEXTSUBID(71565353));
            CC_SETGRAPHIC[1](23033);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 9)) == 1)) {
            CC_CREATE[1](71565353, 5, IF_GETNEXTSUBID(71565353));
            CC_SETGRAPHIC[1](23034);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 11)) == 1)) {
            CC_CREATE[1](71565353, 5, IF_GETNEXTSUBID(71565353));
            CC_SETGRAPHIC[1](23023);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 13)) == 1)) {
            CC_CREATE[1](71565353, 5, IF_GETNEXTSUBID(71565353));
            CC_SETGRAPHIC[1](23026);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 19)) == 1)) {
            CC_CREATE[1](71565353, 5, IF_GETNEXTSUBID(71565353));
            CC_SETGRAPHIC[1](23027);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 25)) == 1)) {
            CC_CREATE[1](71565353, 5, IF_GETNEXTSUBID(71565353));
            CC_SETGRAPHIC[1](23030);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 26)) == 1)) {
            CC_CREATE[1](71565353, 5, IF_GETNEXTSUBID(71565353));
            CC_SETGRAPHIC[1](23035);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 27)) == 1)) {
            CC_CREATE[1](71565353, 5, IF_GETNEXTSUBID(71565353));
            CC_SETGRAPHIC[1](23036);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 28)) == 1)) {
            CC_CREATE[1](71565353, 5, IF_GETNEXTSUBID(71565353));
            CC_SETGRAPHIC[1](23038);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 29)) == 1)) {
            CC_CREATE[1](71565353, 5, IF_GETNEXTSUBID(71565353));
            CC_SETGRAPHIC[1](23039);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 30)) == 1)) {
            CC_CREATE[1](71565353, 5, IF_GETNEXTSUBID(71565353));
            CC_SETGRAPHIC[1](23037);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 31)) == 1)) {
            CC_CREATE[1](71565353, 5, IF_GETNEXTSUBID(71565353));
            CC_SETGRAPHIC[1](23040);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 34)) == 1)) {
            CC_CREATE[1](71565353, 5, IF_GETNEXTSUBID(71565353));
            CC_SETGRAPHIC[1](24252);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 23)) == 1)) {
            CC_CREATE[1](71565353, 5, IF_GETNEXTSUBID(71565353));
            CC_SETGRAPHIC[1](31133);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 24)) == 1)) {
            CC_CREATE[1](71565353, 5, IF_GETNEXTSUBID(71565353));
            CC_SETGRAPHIC[1](1083);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 22)) == 1)) {
            CC_CREATE[1](71565353, 5, IF_GETNEXTSUBID(71565353));
            CC_SETGRAPHIC[1](27107);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        IF_SETGRAPHIC(23045, 71565320);
        IF_SETGRAPHIC(23045, 71565321);
        IF_SETGRAPHIC(23045, 71565323);
        IF_SETGRAPHIC(23045, 71565325);
        IF_SETGRAPHIC(23045, 71565331);
        IF_SETGRAPHIC(23045, 71565337);
        IF_SETGRAPHIC(23045, 71565338);
        IF_SETGRAPHIC(23045, 71565339);
        IF_SETGRAPHIC(23045, 71565340);
        IF_SETGRAPHIC(23045, 71565341);
        IF_SETGRAPHIC(23045, 71565342);
        IF_SETGRAPHIC(23045, 71565343);
        IF_SETGRAPHIC(23045, 71565346);
        IF_SETGRAPHIC(23045, 71565335);
        IF_SETGRAPHIC(23045, 71565336);
        IF_SETGRAPHIC(23045, 71565334);
    } else {
        if ((script13702(1) == 0)) {
            IF_SETGRAPHIC(23033, 71565320);
        };
        if ((script13702(2) == 0)) {
            IF_SETGRAPHIC(23034, 71565321);
        };
        if ((script13702(4) == 0)) {
            IF_SETGRAPHIC(23023, 71565323);
        };
        if ((script13702(6) == 0)) {
            IF_SETGRAPHIC(23026, 71565325);
        };
        if ((script13702(12) == 0)) {
            IF_SETGRAPHIC(23027, 71565331);
        };
        if ((script13702(15) == 0)) {
            IF_SETGRAPHIC(23030, 71565337);
        };
        if ((script13702(16) == 0)) {
            IF_SETGRAPHIC(23035, 71565338);
        };
        if ((script13702(17) == 0)) {
            IF_SETGRAPHIC(23036, 71565339);
        };
        if ((script13702(18) == 0)) {
            IF_SETGRAPHIC(23038, 71565340);
        };
        if ((script13702(19) == 0)) {
            IF_SETGRAPHIC(23039, 71565341);
        };
        if ((script13702(20) == 0)) {
            IF_SETGRAPHIC(23037, 71565342);
        };
        if ((script13702(21) == 0)) {
            IF_SETGRAPHIC(23040, 71565343);
        };
        if ((script13702(24) == 0)) {
            IF_SETGRAPHIC(24252, 71565346);
        };
        if ((script13702(26) == 0)) {
            IF_SETGRAPHIC(31133, 71565335);
        };
        if ((script13702(27) == 0)) {
            IF_SETGRAPHIC(1083, 71565336);
        };
        if ((script13702(28) == 0)) {
            IF_SETGRAPHIC(27107, 71565334);
        };
        if ((script13702(29) == 0)) {
            IF_SETGRAPHIC(31780, 71565347);
        };
    };
    if ((script18376() == 0)) {
        IF_SETHIDE(1, 71565349);
    } else {
        IF_SETHIDE(0, 71565349);
    };
    if ((script18797() == 0)) {
        IF_SETHIDE(1, 71565350);
    } else {
        IF_SETHIDE(0, 71565350);
    };
    if ((script17140() == 0)) {
        IF_SETHIDE(1, 71565351);
    } else {
        IF_SETHIDE(0, 71565351);
    };
    script8841(30, 1);
    script11676();
    var int0 = ENUM_GETOUTPUTCOUNT(13483);
    var int1 = comp(-1, 65535);
    while ((--int0 >= 0)) {
        int1 = enum_getvalue(0, 9, 13483 as cs2enum, int0);
        if ((IF_FIND(int1) == 1)) {
            cc_setparam(7215, int1);
        };
    };
    return;
}