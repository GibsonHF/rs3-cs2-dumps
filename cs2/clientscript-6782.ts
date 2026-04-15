//
function script6782(): void {
    var int0 = comp(1253, 320);
    CC_DELETEALL(int0);
    script10026(int0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0);
    var int1 = 0;
    var int2 = -1 as graphic;
    DB_LISTALL(162);
    dbrow_findnext();
    var int3 = stack();
    var int4 = -1;
    var int5 = 0;
    var string0 = "";
    while ((int3 != -1 as dbrow)) {
        if (((DB_GETFIELDCOUNT(int3, 663648) > 0) && (script6734(int3) == 1))) {
            int1 = (int1 + 1);
            [int4, int5] = dbrow_getfield(int3, 663648, 0);
            script15939(int0, int1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1);
            script7920(int0, int1, 1, int1, 0, 0, 0, 1, 1, 40, 40, 0, 0, 2022 as graphic);
            script10024(int0, int1, 2, int1, 0, 0, 0, 1, 1, 32, 32, 0, 0, int4, int5, 2, 0);
            string0 = `${inttostring(int5, 10)} x ${OC_NAME(int4)}<br>${item_getparam(int4, 4085)}`;
            if ((item_getparam(int4, 6799) == 1)) {
                int2 = 23772 as graphic;
                string0 = `${string0}<br>This item gets sent to your currency pouch.`;
            } else {
                switch (script14479(int4, 1)) {
                    case 93: {
                        int2 = 4679 as graphic;
                        string0 = `${string0}<br>This item gets sent to your backpack.`;
                        break;
                    }
                    case 95: {
                        int2 = 22458 as graphic;
                        string0 = `${string0}<br>This item gets sent to the bank.`;
                        break;
                    }
                };
            };
            script7920(int0, int1, 3, int1, 0, 0, 35, 1, 1, 20, 20, 0, 0, int2);
            script15939(int0, int1, 4, int1, 0, 0, 10, 1, 1, 50, 80, 0, 0);
            if ((script13749() == true)) {
                CC_SETOP(1, "Information");
                CC_SETONOP(callback(script7774, string0, -2147483645, -2147483643, 2));
            } else {
                CC_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643));
            };
        };
        dbrow_findnext();
        int3 = stack();
    };
    IF_SETTEXT(`Bonus Prizes  <col=FFFFFF>(${inttostring(int1, 10)})</col>`, comp(1253, 317));
    if ((CC_FIND(int0, 0) == 1)) {
        CC_SETSIZE((80 * int1), 0, 0, 1);
        if ((int1 <= 8)) {
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
    IF_SETTEXT(`(${inttostring(int1, 10)})`, comp(1253, 318));
    return;
}