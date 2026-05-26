//
function script16978(int0: number): void {
    var int1 = script13383(int0);
    var int2 = script16947(int0);
    switch (int1) {
        case 0: {
            IF_SETGRAPHIC(22106, script16991(int0));
            IF_SETHIDE(1, script16992(int0));
            if ((script16998(int0) != -1)) {
                IF_SETHIDE(0, script16998(int0));
            };
            script16979(int2, int0);
            IF_SETHIDE(0, script16993(int0));
            IF_SETTEXT(inttostring(dbrow_getfield(int2, 843840, 0), 10), script16993(int0));
            IF_SETGRAPHIC(22110, script16995(int0));
            IF_SETHIDE(0, script16994(int0));
            IF_SETTEXT(inttostring(dbrow_getfield(int2, 843856, 0), 10), script16994(int0));
            IF_SETGRAPHIC(22113, script16996(int0));
            IF_SETTEXT("Ready to brew!", script16999(int0));
            IF_SETGRAPHIC(22116, script16990(int0));
            IF_SETHIDE(1, script17000(int0));
            IF_SETHIDE(1, script17001(int0));
            break;
        }
        case 1: {
            IF_SETGRAPHIC(22105, script16991(int0));
            IF_SETHIDE(1, script16992(int0));
            script16979(int2, int0);
            IF_SETHIDE(0, script16993(int0));
            IF_SETTEXT(inttostring(dbrow_getfield(int2, 843840, 0), 10), script16993(int0));
            IF_SETGRAPHIC(22112, script16995(int0));
            IF_SETHIDE(1, script16994(int0));
            IF_SETGRAPHIC(22114, script16996(int0));
            IF_SETTEXT("In the pot!", script16999(int0));
            IF_SETGRAPHIC(22123, script16990(int0));
            IF_SETHIDE(0, script17000(int0));
            IF_SETGRAPHIC(22108, script17000(int0));
            IF_SETHIDE(0, script17001(int0));
            IF_SETTEXT(inttostring(script16940(int0), 10), script17001(int0));
            break;
        }
        case 2: {
            IF_SETGRAPHIC(22106, script16991(int0));
            IF_SETHIDE(0, script16992(int0));
            IF_SETHIDE(1, script16997(int0));
            if ((script16998(int0) != -1)) {
                IF_SETHIDE(1, script16998(int0));
            };
            if ((int0 == 3)) {
                IF_SETTEXT("", 69992543);
            };
            IF_SETHIDE(1, script16993(int0));
            IF_SETGRAPHIC(22111, script16995(int0));
            IF_SETHIDE(0, script16994(int0));
            IF_SETTEXT(inttostring(dbrow_getfield(int2, 843856, 0), 10), script16994(int0));
            IF_SETGRAPHIC(22115, script16996(int0));
            IF_SETTEXT("Refilling...", script16999(int0));
            IF_SETGRAPHIC(22124, script16990(int0));
            IF_SETHIDE(0, script17000(int0));
            IF_SETGRAPHIC(22109, script17000(int0));
            IF_SETHIDE(0, script17001(int0));
            IF_SETTEXT(inttostring(script16941(int0), 10), script17001(int0));
            break;
        }
    };
    script3536(script16954(int0), script16945(int0), -1);
    return;
}