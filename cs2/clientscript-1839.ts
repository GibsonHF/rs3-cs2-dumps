//[proc,worldmap_key_build]
function script1839(int0: int, int1: component, int2: component, int3: component): void {
    CC_DELETEALL(int1);
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 5;
    CC_CREATE(int1, 5, IF_GETNEXTSUBID(int1));
    CC_SETHIDE(true);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETSIZE(0, 23, 1, 0);
    CC_SETTILING(true);
    CC_SETGRAPHIC(20331 as graphic);
    CC_CREATE[1](int1, 5, IF_GETNEXTSUBID(int1));
    CC_SETPOSITION[1]((3 / 2), ((int8 + (18 / 2)) - (14 / 2)), 0, 0);
    CC_SETSIZE[1](14, 14, 0, 0);
    CC_SETGRAPHIC[1](20735 as graphic);
    CC_CREATE(int1, 4, IF_GETNEXTSUBID(int1));
    CC_SETTEXT("Select/deselect all");
    CC_SETPOSITION(((CC_GETX[1]() + CC_GETWIDTH[1]()) + 3), int8, 0, 0);
    CC_SETSIZE(((CC_GETX() + 16) + (3 / 2)), 18, 1, 0);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTFONT(28 as fontmetrics);
    CC_SETTEXTSHADOW(true);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_CREATE[1](int1, 3, IF_GETNEXTSUBID(int1));
    CC_SENDTOBACK[1]();
    CC_SETPOSITION[1](0, int8, 0, 0);
    CC_SETSIZE[1](0, 18, 1, 0);
    CC_SETFILL[1](1);
    CC_SETCOLOUR[1](script10495(9));
    CC_CREATE[1](int1, 3, IF_GETNEXTSUBID(int1));
    CC_SENDTOBACK[1]();
    CC_SETPOSITION[1](0, int8, 0, 0);
    CC_SETSIZE[1](0, 18, 1, 0);
    CC_SETTRANS[1](255);
    CC_SETONMOUSELEAVE[1](callback(script9624, int1, CC_GETID(), script10495(3)));
    CC_SETOPBASE[1]("<col=ff9040>All</col>");
    CC_SETOP[1](1, "Select/deselect");
    CC_SETONMOUSEOVER[1](callback(script9623, int1, CC_GETID(), script10495(4)));
    CC_SETONMOUSELEAVE[1](callback(script9624, int1, CC_GETID(), script10495(3)));
    CC_SETONOP[1](callback(script9637, int1, int2, int3, 7));
    int8 = ((int8 + 18) + 5);
    CC_CREATE(int1, 9, IF_GETNEXTSUBID(int1));
    CC_SETPOSITION(0, int8, 0, 0);
    CC_SETSIZE(0, 0, 1, 0);
    CC_SETCOLOUR(script10495(7));
    CC_CREATE(int1, 9, IF_GETNEXTSUBID(int1));
    CC_SETPOSITION(0, (int8 - 1), 0, 0);
    CC_SETSIZE(0, 0, 1, 0);
    CC_SETCOLOUR(script10495(8));
    int8 = (int8 + 5);
    define_array((ENUM_GETOUTPUTCOUNT(1805) + 1));
    var int9 = -1;
    define_array[65536]((ENUM_GETOUTPUTCOUNT(1805) + 1));
    var int10 = -1;
    var int11 = -1;
    var int12 = -1;
    var int13 = 0;
    var int14 = 0;
    var int15 = 1;
    var int16 = 1;
    var int17 = -1;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var int21 = -1;
    var int22 = 0;
    var int23 = 0;
    var int24 = 0;
    var int25 = -1;
    if ((int0 == 0)) {
        while ((int4 <= ENUM_GETOUTPUTCOUNT(1805 as cs2enum))) {
            int9 = enum_getvalue(0, 73, 1805 as cs2enum, int4);
            if (((int9 != -1 as struct) && ((MAP_MEMBERS() == 1) || (struct_getparam(int9, 478) == false)))) {
                pop_array(int7, int4);
                pop_array[1](int7, ((((struct_getparam(int9, 597) + 1) * 100) + struct_getparam(int9, 4031)) + 1));
                int7 = (int7 + 1);
            };
            int4 = (int4 + 1);
        };
    } else {
        while ((int4 <= ENUM_GETOUTPUTCOUNT(1805 as cs2enum))) {
            int9 = enum_getvalue(0, 73, 1805 as cs2enum, int4);
            if (((int9 != -1 as struct) && ((MAP_MEMBERS() == 1) || (struct_getparam(int9, 478) == false)))) {
                pop_array(int7, int4);
                int7 = (int7 + 1);
            };
            int4 = (int4 + 1);
        };
    };
    int7 = (int7 - 1);
    int4 = 0;
    if ((int0 == 1)) {
        script1842(0, 0, int7);
        while ((int4 <= int7)) {
            [int8, int25] = script1840(int1, push_array(int4), int8, 0, 0, 1);
            int4 = (int4 + 1);
        };
        IF_SETTEXT("Key order:<br>Alphabetical", int3);
    } else if ((int0 == 0)) {
        ARRAY_SORT((int7 + 1), 1, 0);
        while ((int10 < ENUM_GETOUTPUTCOUNT(1806 as cs2enum))) {
            int17 = IF_GETNEXTSUBID(int1);
            int18 = 0;
            int19 = 0;
            int20 = 0;
            int15 = script9640(int14);
            int8 = script1841(int1, int2, int10, int8, int14, int15);
            int14 = (int14 + 1);
            while ((struct_getparam(enum_getvalue(0, 73, 1805 as cs2enum, push_array(int5)), 597) == int10)) {
                int5 = (int5 + 1);
            };
            int11 = -1;
            int12 = enum_getvalue(0, 26, 8351 as cs2enum, int10);
            if ((int12 != -1 as cs2enum)) {
                while ((int11 < ENUM_GETOUTPUTCOUNT(int12))) {
                    int21 = IF_GETNEXTSUBID(int1);
                    int22 = 0;
                    int23 = 0;
                    int24 = 0;
                    if ((int11 != -1)) {
                        int13 = 2;
                        int16 = script9640(int14);
                        int8 = script9625(int1, int2, int12, int11, int8, int14, int15, int16);
                        int14 = (int14 + 1);
                    } else {
                        int13 = 1;
                        script9626(int1);
                    };
                    while ((struct_getparam(enum_getvalue(0, 73, 1805 as cs2enum, push_array(int6)), 4031) == int11)) {
                        int6 = (int6 + 1);
                    };
                    if (((int4 + 1) < int6)) {
                        script1842(0, int4, (int6 - 1));
                    };
                    while ((int4 < int6)) {
                        [int8, int25] = script1840(int1, push_array(int4), int8, int13, 1, AND(int15, int16));
                        if ((int25 == 1)) {
                            int22 = (int22 + 1);
                            int23 = (int23 + 1);
                        } else if ((int25 == 0)) {
                            int22 = (int22 + 1);
                            int24 = (int24 + 1);
                        };
                        int4 = (int4 + 1);
                    };
                    if ((CC_FIND(int1, int21) == 1)) {
                        if ((int22 > 0)) {
                            int18 = (int18 + 1);
                            if ((int22 == int23)) {
                                int19 = (int19 + 1);
                                CC_SETGRAPHIC(20326 as graphic);
                            } else if ((int22 == int24)) {
                                int20 = (int20 + 1);
                                CC_SETGRAPHIC(20268 as graphic);
                            } else {
                                CC_SETGRAPHIC(20328 as graphic);
                            };
                        } else {
                            CC_SETPARAM_INT(4033, 1);
                        };
                    };
                    int11 = (int11 + 1);
                };
            } else {
                int6 = int5;
                if (((int4 + 1) < int6)) {
                    script1842(0, int4, (int6 - 1));
                };
                while ((int4 < int6)) {
                    [int8, int25] = script1840(int1, push_array(int4), int8, 1, 1, int15);
                    if ((int25 == 1)) {
                        int18 = (int18 + 1);
                        int19 = (int19 + 1);
                    } else if ((int25 == 0)) {
                        int18 = (int18 + 1);
                        int20 = (int20 + 1);
                    };
                    int4 = (int4 + 1);
                };
            };
            if ((CC_FIND(int1, int17) == 1)) {
                if ((int18 > 0)) {
                    if ((int18 == int19)) {
                        CC_SETGRAPHIC(20326 as graphic);
                    } else if ((int18 == int20)) {
                        CC_SETGRAPHIC(20268 as graphic);
                    } else {
                        CC_SETGRAPHIC(20328 as graphic);
                    };
                } else {
                    CC_SETPARAM_INT(4033, 1);
                };
            };
            int10 = (int10 + 1);
        };
        IF_SETTEXT("Key order:<br>Categorised", int3);
    };
    IF_SETSCROLLSIZE(0, int8, int1);
    script9622(int1, int2);
    IF_SETONRESIZE(callback(script9621, int1, int2), IF_GETPARENTLAYER(IF_GETPARENTLAYER(int1)));
    return;
}