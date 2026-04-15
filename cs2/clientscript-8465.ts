//
function script8465(int0: component): void {
    var int1 = 0;
    var int2 = 94 as inv;
    var int3 = varplayer_711;
    var int4 = varplayer_3563;
    var int5 = varplayer_712;
    var int6 = varplayer_713;
    var int7 = varplayer_714;
    var int8 = varplayer_11217;
    var int9 = varplayer_3596;
    var int10 = varbitplayer_22841;
    var int11 = varbitplayer_22842;
    var int12 = varplayer_4500;
    var int13 = varclient_2760;
    if ((int0 == comp(1559, 25))) {
        int1 = 1;
        int2 = 742 as inv;
        int3 = varplayer_4975;
        int4 = varplayer_4976;
        int5 = varplayer_4977;
        int6 = varplayer_4978;
        int7 = varplayer_4979;
        int8 = varplayer_11209;
        int9 = varplayer_4980;
        int10 = varbitplayer_26126;
        int11 = varbitplayer_26127;
        int12 = varplayer_4981;
    };
    var int14 = SCALE(int13, 100, 50);
    var int15 = SCALE(enum_getvalue(0, 0, 7339 as cs2enum, int14), 100, (100 + (40 / 2)));
    var int16 = (int3 + int4);
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    if ((int16 > 0)) {
        int17 = MAX(0, MIN(10000, (10000 - (SCALE(int15, int16, 100) * int5))));
        int18 = MAX(0, MIN(10000, (10000 - (SCALE(int15, int16, 100) * int6))));
        int19 = MAX(0, MIN(10000, (10000 - (SCALE(int15, int16, 100) * int7))));
    };
    var int20 = INV_TOTALPARAM(int2, 2946);
    if ((script5839() == 1)) {
        int20 = (int20 + 2);
    };
    if ((INV_GETOBJ(int2, 17) == 31925 as obj)) {
        int20 = (int20 + 10);
    };
    var int21 = (STAT(3 as stat) * 100);
    if ((varbitplayer_27168 == 1)) {
        int21 = (int21 / 10);
    };
    var int22 = int9;
    var int23 = -1;
    var string0 = "";
    var string1 = "";
    if ((int1 == 1)) {
        IF_SETTEXT(inttostring(int16, 10), comp(1559, 119));
        int23 = (SCALE(int16, 100, (100 - int5)) - SCALE(int16, 100, 45));
        string0 = inttostring(int23, 10);
        if ((int23 > 0)) {
            string0 = `+${string0}`;
        };
        IF_SETTEXT(string0, comp(1559, 117));
        int23 = (SCALE(int16, 100, (100 - int6)) - SCALE(int16, 100, 45));
        string0 = inttostring(int23, 10);
        if ((int23 > 0)) {
            string0 = `+${string0}`;
        };
        IF_SETTEXT(string0, comp(1559, 121));
        int23 = (SCALE(int16, 100, (100 - int7)) - SCALE(int16, 100, 45));
        string0 = inttostring(int23, 10);
        if ((int23 > 0)) {
            string0 = `+${string0}`;
        };
        IF_SETTEXT(string0, comp(1559, 123));
        int23 = (SCALE(int16, 100, (100 - int8)) - SCALE(int16, 100, 45));
        string0 = inttostring(int23, 10);
        if ((int23 > 0)) {
            string0 = `+${string0}`;
        };
        IF_SETTEXT(string0, comp(1559, 156));
        IF_SETTEXT(`${script10006((10 * ((int10 + int11) + MIN(99, script10781(1 as stat)))))}%`, comp(1559, 80));
        string1 = `Defence level : <col=00FF00>${script10006(MIN(990, (10 * script10781(1 as stat))))}%</col><br>Tank armour : <col=00FF00>${script10006((10 * int10))}%</col><br>Shield : <col=00FF00>${script10006((10 * int11))}%</col>`;
        IF_SETONMOUSEREPEAT(callback(script3876, string1, -2147483645, -2147483643), 102170704);
        IF_SETONMOUSELEAVE(callback(script8805), 102170704);
        IF_SETTEXT(`${script10006((int12 + MIN(990, (10 * script10781(1)))))}%`, 102170706);
        string1 = `Defence level : <col=00FF00>${script10006(MIN(990, (10 * script10781(1))))}%</col><br>PvP armour : <col=00FF00>${script10006(int12)}%</col>`;
        IF_SETONMOUSEREPEAT(callback(script3876, string1, -2147483645, -2147483643), 102170706);
        IF_SETONMOUSELEAVE(callback(script8805), 102170706);
        IF_SETTEXT(inttostring(int20, 10), 102170725);
        string1 = `Armour : <col=00FF00>${inttostring(int3, 10)}</col><br>Skill Bonus : <col=00FF00>${inttostring(int4, 10)}</col>`;
        IF_SETONMOUSEREPEAT(callback(script3876, string1, -2147483645, -2147483643), 102170743);
        IF_SETONMOUSELEAVE(callback(script8805), 102170743);
        string1 = `<col=F3B13F>Life Points</col><br>Base : <col=00FF00>${inttostring(int21, 10)}</col><br>Armour Bonus : <col=00FF00>${inttostring(int22, 10)}</col>`;
        IF_SETONMOUSEREPEAT(callback(script3876, string1, -2147483645, -2147483643), 102170643);
        IF_SETONMOUSELEAVE(callback(script8805), 102170643);
        string1 = "<col=F3B13F>Prayer Points</col>";
        IF_SETONMOUSEREPEAT(callback(script3876, string1, -2147483645, -2147483643), 102170644);
        IF_SETONMOUSELEAVE(callback(script8805), 102170644);
    } else {
        IF_SETTEXT(inttostring(int16, 10), comp(1463, 197));
        int23 = (SCALE(int16, 100, (100 - int5)) - SCALE(int16, 100, 45));
        string0 = inttostring(int23, 10);
        if ((int23 > 0)) {
            string0 = `+${string0}`;
        };
        IF_SETTEXT(string0, comp(1463, 8));
        int23 = (SCALE(int16, 100, (100 - int6)) - SCALE(int16, 100, 45));
        string0 = inttostring(int23, 10);
        if ((int23 > 0)) {
            string0 = `+${string0}`;
        };
        IF_SETTEXT(string0, comp(1463, 6));
        int23 = (SCALE(int16, 100, (100 - int7)) - SCALE(int16, 100, 45));
        string0 = inttostring(int23, 10);
        if ((int23 > 0)) {
            string0 = `+${string0}`;
        };
        IF_SETTEXT(string0, comp(1463, 3));
        int23 = (SCALE(int16, 100, (100 - int8)) - SCALE(int16, 100, 45));
        string0 = inttostring(int23, 10);
        if ((int23 > 0)) {
            string0 = `+${string0}`;
        };
        IF_SETTEXT(string0, comp(1463, 231));
        IF_SETTEXT(`${inttostring(SCALE(int17, 1000, 10), 10)}%`, comp(1463, 148));
        IF_SETTEXT(`${inttostring(SCALE(int18, 1000, 10), 10)}%`, comp(1463, 152));
        IF_SETTEXT(`${inttostring(SCALE(int19, 1000, 10), 10)}%`, comp(1463, 156));
        IF_SETTEXT(`${script10006((10 * ((int10 + int11) + MIN(99, STAT(1 as stat)))))}%`, comp(1463, 160));
        string1 = `Defence level : <col=00FF00>${script10006(MIN(990, (10 * STAT(1 as stat))))}%</col><br>Tank armour : <col=00FF00>${script10006((10 * int10))}%</col><br>Shield : <col=00FF00>${script10006((10 * int11))}%</col>`;
        IF_SETONMOUSEREPEAT(callback(script3876, string1, -2147483645, -2147483643), 95879328);
        IF_SETONMOUSELEAVE(callback(script8805), 95879328);
        IF_SETTEXT(`${script10006((int12 + MIN(990, (10 * STAT(1)))))}%`, 95879330);
        string1 = `Defence level : <col=00FF00>${script10006(MIN(990, (10 * STAT(1))))}%</col><br>PvP armour : <col=00FF00>${script10006(int12)}%</col>`;
        IF_SETONMOUSEREPEAT(callback(script3876, string1, -2147483645, -2147483643), 95879330);
        IF_SETONMOUSELEAVE(callback(script8805), 95879330);
        IF_SETTEXT(inttostring(int20, 10), 95879349);
        string1 = `Armour : <col=00FF00>${inttostring(int3, 10)}</col><br>Skill Bonus : <col=00FF00>${inttostring(int4, 10)}</col>`;
        IF_SETONMOUSEREPEAT(callback(script3876, string1, -2147483645, -2147483643), 95879365);
        IF_SETONMOUSELEAVE(callback(script8805), 95879365);
        string1 = `Base : <col=00FF00>${inttostring(int21, 10)}</col><br>Armour Bonus : <col=00FF00>${inttostring(int22, 10)}</col>`;
        IF_SETONMOUSEREPEAT(callback(script3876, string1, -2147483645, -2147483643), 95879192);
        IF_SETONMOUSELEAVE(callback(script8805), 95879192);
    };
    return;
}