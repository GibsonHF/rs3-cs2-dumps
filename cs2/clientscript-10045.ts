//
function script10045(int0: component, int1: component, int2: component, int3: component, int4: int): void {
    var string0 = "";
    IF_SETHIDE(false, int3);
    IF_CLEAROPS(int0);
    IF_SETONOP(callback(), int0);
    IF_SETONCLICK(callback(), int0);
    script13264(-1, 0, int4);
    var int5 = 9861;
    if ((int4 == 2)) {
        int5 = 9862 as cs2enum;
    };
    var int6 = ENUM_GETOUTPUTCOUNT(int5);
    define_array[73](MAX(int6, ENUM_GETOUTPUTCOUNT(13727 as cs2enum)));
    var int7 = -1 as struct;
    var int8 = 0;
    var int9 = 0;
    var string1 = "";
    var string2 = "";
    var string3 = "";
    define_array[65536](4);
    var int10 = 0;
    while ((int8 < int6)) {
        int7 = enum_getvalue(0, 73, int5, int8);
        if ((script17266(int7) == true)) {
            pop_array(int9, int7);
            int9 = (int9 + 1);
        };
        int8 = (int8 + 1);
    };
    if ((int9 == 0)) {
        int6 = ENUM_GETOUTPUTCOUNT(13727 as cs2enum);
        int8 = 0;
        while ((int8 < int6)) {
            int7 = enum_getvalue(0, 73, 13727 as cs2enum, int8);
            if ((script17266(int7) == true)) {
                pop_array(int9, int7);
                int9 = (int9 + 1);
            };
            int8 = (int8 + 1);
        };
        if ((int9 == 0)) {
            int7 = enum_getvalue(0, 73, 13727 as cs2enum, -1);
        } else {
            int7 = push_array(MODULO(varplayer_6601, int9));
        };
    } else {
        int7 = push_array(RANDOM(int9));
    };
    if (((script17266(52316 as struct) == true) && (RANDOM(2) == 0))) {
        int7 = 52316 as struct;
    };
    switch (MAP_LANG()) {
        case 1: {
            string2 = struct_getparam(int7, 6962);
            string3 = struct_getparam(int7, 5558);
            string1 = struct_getparam(int7, 7961);
            break;
        }
        case 2: {
            string2 = struct_getparam(int7, 6963);
            string3 = struct_getparam(int7, 7892);
            string1 = struct_getparam(int7, 7962);
            break;
        }
        case 3: {
            string2 = struct_getparam(int7, 6964);
            string3 = struct_getparam(int7, 7893);
            string1 = struct_getparam(int7, 7963);
            break;
        }
    };
    if ((STRING_LENGTH(string2) == 0)) {
        string2 = struct_getparam(int7, 6394);
    };
    if ((STRING_LENGTH(string3) == 0)) {
        string3 = struct_getparam(int7, 65);
    };
    if ((STRING_LENGTH(string1) == 0)) {
        string1 = struct_getparam(int7, 6393);
    };
    string0 = struct_getparam(int7, 6391);
    int9 = 0;
    switch (int7) {
        case 39677: {
            if ((varbitplayer_31201 == 0)) {
                pop_array[1](int9++, 1);
            };
            if ((varbitplayer_31202 == 0)) {
                pop_array[1](int9++, 2);
            };
            if ((varbitplayer_31203 == 0)) {
                pop_array[1](int9++, 3);
            };
            if ((varbitplayer_31204 == 0)) {
                pop_array[1](int9++, 4);
            };
            switch (push_array[1](RANDOM(int9))) {
                case 1: {
                    string2 = "index?category=Packs&package=OrnateLightWeaponPack";
                    break;
                }
                case 2: {
                    string2 = "index?category=Packs&package=OrnateHeavyWeaponPack";
                    break;
                }
                case 3: {
                    string2 = "index?category=Packs&package=OrnateMagicWeaponPack";
                    break;
                }
                case 4: {
                    string2 = "index?category=Packs&package=OrnateRangedWeaponPack";
                    break;
                }
            };
            break;
        }
        case 39679: {
            if ((varbitplayer_33770 == 0)) {
                pop_array[1](int9++, 1);
            };
            if ((varbitplayer_33771 == 0)) {
                pop_array[1](int9++, 2);
            };
            if ((varbitplayer_33772 == 0)) {
                pop_array[1](int9++, 3);
            };
            if ((varbitplayer_33773 == 0)) {
                pop_array[1](int9++, 4);
            };
            switch (push_array[1](RANDOM(int9))) {
                case 1: {
                    string2 = "index?category=Packs&package=FaeLightWeaponPack";
                    break;
                }
                case 2: {
                    string2 = "index?category=Packs&package=FaeHeavyWeaponPack";
                    break;
                }
                case 3: {
                    string2 = "index?category=Packs&package=FaeMagicWeaponPack";
                    break;
                }
                case 4: {
                    string2 = "index?category=Packs&package=FaeRangedWeaponPack";
                    break;
                }
            };
            break;
        }
        case 39685: {
            if ((varbitplayer_32669 == 0)) {
                pop_array[1](int9++, 1);
            };
            if ((varbitplayer_32670 == 0)) {
                pop_array[1](int9++, 2);
            };
            if ((varbitplayer_32671 == 0)) {
                pop_array[1](int9++, 3);
            };
            switch (push_array[1](RANDOM(int9))) {
                case 1: {
                    string2 = "index?category=Packs&package=ManticoreMeleeWeaponPack";
                    break;
                }
                case 2: {
                    string2 = "index?category=Packs&package=ManticoreMagicWeaponPack";
                    break;
                }
                case 3: {
                    string2 = "index?category=Packs&package=ManticoreRangedWeaponPack";
                    break;
                }
            };
            break;
        }
    };
    stack(script19254(int7, MAP_LANG()));
    stack(int0);
    IF_SETGRAPHIC();
    stack(int7);
    stack(6392);
    struct_getparam();
    switch (stack()) {
        case 1: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Treasure Hunter";
            };
            int10 = 1;
            script13264(1, 1, int4);
            break;
        }
        case 2:
        case 18: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Marketplace";
            };
            int10 = 1;
            IF_SETOP(1, "Select", int0);
            IF_SETONOP(callback(script13252), int0);
            break;
        }
        case 3: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Marketplace";
            };
            int10 = 1;
            IF_SETOP(1, "Select", int0);
            IF_SETONOP(callback(script12374, string1, string2, string2, struct_getparam(int7, 6395)), int0);
            IF_SETONCLICK(callback(script9036), int0);
            break;
        }
        case 9: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Marketplace";
            };
            int10 = 1;
            IF_SETOP(1, "Select", int0);
            IF_SETONOP(callback(script2827, string3, 0), int0);
            IF_SETONCLICK(callback(script9036), int0);
            break;
        }
        case 4: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Marketplace";
            };
            int10 = 1;
            IF_SETOP(1, "Select", int0);
            IF_SETONOP(callback(script13252), int0);
            break;
        }
        case 5: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Marketplace";
            };
            int10 = 1;
            script13264(5, 1, int4);
            break;
        }
        case 8: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Runecoins";
            };
            int10 = 1;
            script13264(8, 1, int4);
            break;
        }
        case 10: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Bonds";
            };
            int10 = 1;
            script13264(10, 1, int4);
            break;
        }
        case 12: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Hero Pass";
            };
            int10 = 1;
            script13264(12, 1, int4);
            break;
        }
        case 13: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Marketplace";
            };
            int10 = 1;
            if (((PLATFORMTYPE() != 0) && (PLATFORMTYPE() != 5))) {
                script13264(14, 1, int4);
            } else {
                IF_SETOP(1, "Select", int0);
                IF_SETONOP(callback(script15228, 19), int0);
            };
            IF_SETONCLICK(callback(script9036), int0);
            break;
        }
        case 14: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Marketplace";
            };
            int10 = 1;
            script13264(14, 1, int4);
            break;
        }
        case 19: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Marketplace";
            };
            int10 = 1;
            script13264(19, 1, int4);
            break;
        }
        case 15: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Treasure Hunter";
            };
            int10 = 1;
            script13264(15, 1, int4);
            break;
        }
        case 16: {
            int10 = 1;
            script13264(16, 1, int4);
            break;
        }
        case 17: {
            int10 = 1;
            script13264(17, 1, int4);
            break;
        }
        default: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Marketplace";
            };
            break;
        }
    };
    if ((STRING_LENGTH(string0) > 0)) {
        IF_SETTEXT(string0, int1);
    };
    CC_DELETEALL(int2);
    if ((int10 == 1)) {
        return;
    };
    var int11 = 0;
    var int12 = IF_GETWIDTH(int2);
    var int13 = 50;
    var string4 = "";
    script10047(int2, int11++);
    string4 = "Loyalty Points";
    CC_CREATE(int2, 4, int11++);
    if ((varclient_4660 > -1)) {
        CC_SETTEXT(inttostring(varclient_4660, 10));
    };
    CC_SETONVARCTRANSMIT(callback(script10050, -2147483645, -2147483643, 2, 4660, 1));
    CC_SETPOSITION(int13, 0, 0, 2);
    CC_SETSIZE(((int12 / 2) - int13), 32, 0, 0);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETTEXTFONT(28);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTSHADOW(1);
    CC_CREATE[1](int2, 5, int11++);
    CC_SETGRAPHIC[1](23851);
    CC_SETSIZE[1](34, 35, 0, 0);
    CC_SETPOSITION[1](((CC_GETX() - 20) - (CC_GETWIDTH[1]() / 2)), -1, 0, 2);
    CC_SETONMOUSEREPEAT[1](callback(script8799, string4, -2147483645, -2147483643));
    string4 = "Runecoins";
    CC_CREATE(int2, 4, int11++);
    if ((varclient_4659 > -1)) {
        CC_SETTEXT(inttostring(varclient_4659, 10));
    };
    CC_SETONVARCTRANSMIT(callback(script10050, -2147483645, -2147483643, 3, 4659, 1));
    CC_SETPOSITION(((int12 / 2) + int13), 0, 0, 2);
    CC_SETSIZE(((int12 / 2) - int13), 32, 0, 0);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETTEXTFONT(28);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTSHADOW(1);
    CC_CREATE[1](int2, 5, int11++);
    CC_SETGRAPHIC[1](23852);
    CC_SETSIZE[1](34, 35, 0, 0);
    CC_SETPOSITION[1](((CC_GETX() - 20) - (CC_GETWIDTH[1]() / 2)), -1, 0, 2);
    CC_SETONMOUSEREPEAT[1](callback(script8799, string4, -2147483645, -2147483643));
    return;
}