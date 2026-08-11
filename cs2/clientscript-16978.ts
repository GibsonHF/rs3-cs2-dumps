//
function script16978(int0: number): void {
    var int1 = script13383(int0);
    var int2 = script16947(int0);
    switch (int1) {
        case 0: {
            IF_SETGRAPHIC(22106 as graphic, script16991(int0));
            IF_SETHIDE(true, script16992(int0));
            if ((script16998(int0) != -1)) {
                IF_SETHIDE(false, script16998(int0));
            };
            script16979(int2, int0);
            IF_SETHIDE(false, script16993(int0));
            IF_SETTEXT(inttostring(dbrow_getfield(int2, 843840, 0), 10), script16993(int0));
            IF_SETGRAPHIC(22110 as graphic, script16995(int0));
            IF_SETHIDE(false, script16994(int0));
            IF_SETTEXT(inttostring(dbrow_getfield(int2, 843856, 0), 10), script16994(int0));
            IF_SETGRAPHIC(22113 as graphic, script16996(int0));
            IF_SETTEXT("Ready to brew!", script16999(int0));
            IF_SETGRAPHIC(22116 as graphic, script16990(int0));
            IF_SETHIDE(true, script17000(int0));
            IF_SETHIDE(true, script17001(int0));
            break;
        }
        case 1: {
            IF_SETGRAPHIC(22105 as graphic, script16991(int0));
            IF_SETHIDE(true, script16992(int0));
            script16979(int2, int0);
            IF_SETHIDE(false, script16993(int0));
            IF_SETTEXT(inttostring(dbrow_getfield(int2, 843840, 0), 10), script16993(int0));
            IF_SETGRAPHIC(22112 as graphic, script16995(int0));
            IF_SETHIDE(true, script16994(int0));
            IF_SETGRAPHIC(22114 as graphic, script16996(int0));
            IF_SETTEXT("In the pot!", script16999(int0));
            IF_SETGRAPHIC(22123 as graphic, script16990(int0));
            IF_SETHIDE(false, script17000(int0));
            IF_SETGRAPHIC(22108 as graphic, script17000(int0));
            IF_SETHIDE(false, script17001(int0));
            IF_SETTEXT(inttostring(script16940(int0), 10), script17001(int0));
            break;
        }
        case 2: {
            IF_SETGRAPHIC(22106 as graphic, script16991(int0));
            IF_SETHIDE(false, script16992(int0));
            IF_SETHIDE(true, script16997(int0));
            if ((script16998(int0) != -1)) {
                IF_SETHIDE(true, script16998(int0));
            };
            if ((int0 == 3)) {
                IF_SETTEXT("", comp(1068, 95));  // trh188:ingredient_3_amount
            };
            IF_SETHIDE(true, script16993(int0));
            IF_SETGRAPHIC(22111 as graphic, script16995(int0));
            IF_SETHIDE(false, script16994(int0));
            IF_SETTEXT(inttostring(dbrow_getfield(int2, 843856, 0), 10), script16994(int0));
            IF_SETGRAPHIC(22115 as graphic, script16996(int0));
            IF_SETTEXT("Refilling...", script16999(int0));
            IF_SETGRAPHIC(22124 as graphic, script16990(int0));
            IF_SETHIDE(false, script17000(int0));
            IF_SETGRAPHIC(22109 as graphic, script17000(int0));
            IF_SETHIDE(false, script17001(int0));
            IF_SETTEXT(inttostring(script16941(int0), 10), script17001(int0));
            break;
        }
    };
    script3536(script16954(int0), script16945(int0), -1);
    return;
}