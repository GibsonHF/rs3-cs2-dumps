//
function script6001(): void {
    if ((script13702(3) == 0)) {
        IF_SETGRAPHIC(23032 as graphic, comp(1092, 10));
    };
    if ((script13702(5) == 0)) {
        IF_SETGRAPHIC(23025 as graphic, comp(1092, 12));
    };
    if ((script13702(7) == 0)) {
        IF_SETGRAPHIC(23029 as graphic, comp(1092, 14));
    };
    if ((script13702(8) == 0)) {
        IF_SETGRAPHIC(23031 as graphic, comp(1092, 15));
    };
    if ((script13702(9) == 0)) {
        IF_SETGRAPHIC(23022 as graphic, comp(1092, 16));
    };
    if ((script13702(10) == 0)) {
        IF_SETGRAPHIC(23020 as graphic, comp(1092, 17));
    };
    if ((script13702(11) == 0)) {
        IF_SETGRAPHIC(23028 as graphic, comp(1092, 18));
    };
    if ((script13702(13) == 0)) {
        IF_SETGRAPHIC(23024 as graphic, comp(1092, 20));
    };
    if ((script13702(14) == 0)) {
        IF_SETGRAPHIC(23021 as graphic, comp(1092, 21));
    };
    if ((script13702(22) == 0)) {
        IF_SETGRAPHIC(23041 as graphic, comp(1092, 32));
    };
    if ((script13702(23) == 0)) {
        IF_SETGRAPHIC(23042 as graphic, comp(1092, 33));
    };
    if ((script13702(29) == 0)) {
        IF_SETGRAPHIC(31780 as graphic, comp(1092, 35));
    };
    if ((script13702(33) == 0)) {
        IF_SETGRAPHIC(35679 as graphic, comp(1092, 40));
    };
    if (((MAP_MEMBERS() == 0) && (PLAYERMEMBER() == true))) {
        IF_SETGRAPHIC(23033 as graphic, comp(1092, 8));
        IF_SETGRAPHIC(23034 as graphic, comp(1092, 9));
        IF_SETGRAPHIC(23023 as graphic, comp(1092, 11));
        IF_SETGRAPHIC(23026 as graphic, comp(1092, 13));
        IF_SETGRAPHIC(23027 as graphic, comp(1092, 19));
        IF_SETGRAPHIC(23030 as graphic, comp(1092, 25));
        IF_SETGRAPHIC(23035 as graphic, comp(1092, 26));
        IF_SETGRAPHIC(23036 as graphic, comp(1092, 27));
        IF_SETGRAPHIC(23038 as graphic, comp(1092, 28));
        IF_SETGRAPHIC(23039 as graphic, comp(1092, 29));
        IF_SETGRAPHIC(23037 as graphic, comp(1092, 30));
        IF_SETGRAPHIC(23040 as graphic, comp(1092, 31));
        IF_SETGRAPHIC(24252 as graphic, comp(1092, 34));
        IF_SETGRAPHIC(31133 as graphic, comp(1092, 23));
        IF_SETGRAPHIC(1083 as graphic, comp(1092, 24));
        IF_SETGRAPHIC(27107 as graphic, comp(1092, 22));
    } else if ((MAP_MEMBERS() == 0)) {
        if ((IF_FIND(comp(1092, 8)) == 1)) {
            CC_CREATE[1](comp(1092, 41), 5, IF_GETNEXTSUBID(comp(1092, 41)));
            CC_SETGRAPHIC[1](23033 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 9)) == 1)) {
            CC_CREATE[1](comp(1092, 41), 5, IF_GETNEXTSUBID(comp(1092, 41)));
            CC_SETGRAPHIC[1](23034 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 11)) == 1)) {
            CC_CREATE[1](comp(1092, 41), 5, IF_GETNEXTSUBID(comp(1092, 41)));
            CC_SETGRAPHIC[1](23023 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 13)) == 1)) {
            CC_CREATE[1](comp(1092, 41), 5, IF_GETNEXTSUBID(comp(1092, 41)));
            CC_SETGRAPHIC[1](23026 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 19)) == 1)) {
            CC_CREATE[1](comp(1092, 41), 5, IF_GETNEXTSUBID(comp(1092, 41)));
            CC_SETGRAPHIC[1](23027 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 25)) == 1)) {
            CC_CREATE[1](comp(1092, 41), 5, IF_GETNEXTSUBID(comp(1092, 41)));
            CC_SETGRAPHIC[1](23030 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 26)) == 1)) {
            CC_CREATE[1](comp(1092, 41), 5, IF_GETNEXTSUBID(comp(1092, 41)));
            CC_SETGRAPHIC[1](23035 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 27)) == 1)) {
            CC_CREATE[1](comp(1092, 41), 5, IF_GETNEXTSUBID(comp(1092, 41)));
            CC_SETGRAPHIC[1](23036 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 28)) == 1)) {
            CC_CREATE[1](comp(1092, 41), 5, IF_GETNEXTSUBID(comp(1092, 41)));
            CC_SETGRAPHIC[1](23038 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 29)) == 1)) {
            CC_CREATE[1](comp(1092, 41), 5, IF_GETNEXTSUBID(comp(1092, 41)));
            CC_SETGRAPHIC[1](23039 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 30)) == 1)) {
            CC_CREATE[1](comp(1092, 41), 5, IF_GETNEXTSUBID(comp(1092, 41)));
            CC_SETGRAPHIC[1](23037 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 31)) == 1)) {
            CC_CREATE[1](comp(1092, 41), 5, IF_GETNEXTSUBID(comp(1092, 41)));
            CC_SETGRAPHIC[1](23040 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 34)) == 1)) {
            CC_CREATE[1](comp(1092, 41), 5, IF_GETNEXTSUBID(comp(1092, 41)));
            CC_SETGRAPHIC[1](24252 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 23)) == 1)) {
            CC_CREATE[1](comp(1092, 41), 5, IF_GETNEXTSUBID(comp(1092, 41)));
            CC_SETGRAPHIC[1](31133 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 24)) == 1)) {
            CC_CREATE[1](comp(1092, 41), 5, IF_GETNEXTSUBID(comp(1092, 41)));
            CC_SETGRAPHIC[1](1083 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 22)) == 1)) {
            CC_CREATE[1](comp(1092, 41), 5, IF_GETNEXTSUBID(comp(1092, 41)));
            CC_SETGRAPHIC[1](27107 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 8));
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 9));
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 11));
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 13));
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 19));
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 25));
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 26));
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 27));
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 28));
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 29));
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 30));
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 31));
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 34));
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 23));
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 24));
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 22));
    } else {
        if ((script13702(1) == 0)) {
            IF_SETGRAPHIC(23033 as graphic, comp(1092, 8));
        };
        if ((script13702(2) == 0)) {
            IF_SETGRAPHIC(23034 as graphic, comp(1092, 9));
        };
        if ((script13702(4) == 0)) {
            IF_SETGRAPHIC(23023 as graphic, comp(1092, 11));
        };
        if ((script13702(6) == 0)) {
            IF_SETGRAPHIC(23026 as graphic, comp(1092, 13));
        };
        if ((script13702(12) == 0)) {
            IF_SETGRAPHIC(23027 as graphic, comp(1092, 19));
        };
        if ((script13702(15) == 0)) {
            IF_SETGRAPHIC(23030 as graphic, comp(1092, 25));
        };
        if ((script13702(16) == 0)) {
            IF_SETGRAPHIC(23035 as graphic, comp(1092, 26));
        };
        if ((script13702(17) == 0)) {
            IF_SETGRAPHIC(23036 as graphic, comp(1092, 27));
        };
        if ((script13702(18) == 0)) {
            IF_SETGRAPHIC(23038 as graphic, comp(1092, 28));
        };
        if ((script13702(19) == 0)) {
            IF_SETGRAPHIC(23039 as graphic, comp(1092, 29));
        };
        if ((script13702(20) == 0)) {
            IF_SETGRAPHIC(23037 as graphic, comp(1092, 30));
        };
        if ((script13702(21) == 0)) {
            IF_SETGRAPHIC(23040 as graphic, comp(1092, 31));
        };
        if ((script13702(24) == 0)) {
            IF_SETGRAPHIC(24252 as graphic, comp(1092, 34));
        };
        if ((script13702(26) == 0)) {
            IF_SETGRAPHIC(31133 as graphic, comp(1092, 23));
        };
        if ((script13702(27) == 0)) {
            IF_SETGRAPHIC(1083 as graphic, comp(1092, 24));
        };
        if ((script13702(28) == 0)) {
            IF_SETGRAPHIC(27107 as graphic, comp(1092, 22));
        };
        if ((script13702(29) == 0)) {
            IF_SETGRAPHIC(31780 as graphic, comp(1092, 35));
        };
    };
    if ((script18376() == 0)) {
        IF_SETHIDE(true, comp(1092, 37));
    } else {
        IF_SETHIDE(false, comp(1092, 37));
    };
    if ((script18797() == 0)) {
        IF_SETHIDE(true, comp(1092, 38));
    } else {
        IF_SETHIDE(false, comp(1092, 38));
    };
    if ((script17140() == 0)) {
        IF_SETHIDE(true, comp(1092, 39));
    } else {
        IF_SETHIDE(false, comp(1092, 39));
    };
    script8841(30, 1);
    script11676();
    var int0 = ENUM_GETOUTPUTCOUNT(13483 as cs2enum);
    var int1 = comp(-1, 65535);
    while ((--int0 >= 0)) {
        int1 = enum_getvalue(0, 9, 13483 as cs2enum, int0);
        if ((IF_FIND(int1) == 1)) {
            cc_setparam(7215, int1);
        };
    };
    return;
}