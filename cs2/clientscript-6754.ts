//
function script6754(int0: struct): void {
    var int1 = comp(1253, 320);
    CC_DELETEALL(int1);
    script10026(int1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0);
    var int2 = 0;
    var int3 = -1 as graphic;
    var int4 = -1;
    switch (int0) {
        case 39801: {
            int4 = 168;
            break;
        }
        case 21098: {
            int4 = 162;
            break;
        }
        case 51131: {
            int4 = 313;
            break;
        }
    };
    DB_LISTALL(int4);
    dbrow_findnext();
    var int5 = stack();
    var int6 = -1;
    var int7 = 0;
    var string0 = "";
    while ((int5 != -1 as dbrow)) {
        if (((script6763(int0, int5) > 0) && (script6764(int0, int5) == 1))) {
            int2 = (int2 + 1);
            [int6, int7] = script6762(int0, int5);
            script15939(int1, int2, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1);
            script7920(int1, int2, 1, int2, 0, 0, 0, 1, 1, 40, 40, 0, 0, 2022 as graphic);
            script10024(int1, int2, 2, int2, 0, 0, 0, 1, 1, 32, 32, 0, 0, int6, int7, 2, 0);
            string0 = `${inttostring(int7, 10)} x ${OC_NAME(int6)}<br>${item_getparam(int6, 4085)}`;
            if ((item_getparam(int6, 6799) == 1)) {
                int3 = 23772 as graphic;
                string0 = `${string0}<br>This item gets sent to your currency pouch.`;
            } else if ((item_getparam(int6, 8963) == 1)) {
                int3 = -1 as graphic;
            } else {
                switch (script14479(int6, 1)) {
                    case 93: {
                        int3 = 4679 as graphic;
                        string0 = `${string0}<br>This item gets sent to your backpack.`;
                        break;
                    }
                    case 95: {
                        int3 = 22458 as graphic;
                        string0 = `${string0}<br>This item gets sent to the bank.`;
                        break;
                    }
                };
            };
            script7920(int1, int2, 3, int2, 0, 0, 35, 1, 1, 20, 20, 0, 0, int3);
            script15939(int1, int2, 4, int2, 0, 0, 10, 1, 1, 50, 80, 0, 0);
            if ((script13749() == true)) {
                CC_SETOP(1, "Information");
                CC_SETONOP(callback(script7774, string0, -2147483645, -2147483643, 2));
            } else {
                CC_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643));
            };
        };
        dbrow_findnext();
        int5 = stack();
    };
    IF_SETTEXT(`Bonus Prizes  <col=FFFFFF>(${inttostring(int2, 10)})</col>`, comp(1253, 317));
    if ((CC_FIND(int1, 0) == 1)) {
        CC_SETSIZE((80 * int2), 0, 0, 1);
        if ((int2 <= 8)) {
            script13959(comp(1253, 322), 37674 as struct, true);
            script13959(comp(1253, 324), 37674 as struct, true);
            IF_SETHIDE(true, comp(1253, 321));
            IF_SETHIDE(true, comp(1253, 323));
        } else {
            IF_SETSCROLLSIZE(CC_GETWIDTH(), 0, comp(1253, 319));
            IF_SETSCROLLPOS(0, 0, comp(1253, 319));
            script13959(comp(1253, 322), 37674 as struct, true);
            IF_SETHIDE(false, comp(1253, 321));
            IF_SETHIDE(false, comp(1253, 323));
        };
    };
    IF_SETTEXT(`(${inttostring(int2, 10)})`, comp(1253, 318));
    return;
}