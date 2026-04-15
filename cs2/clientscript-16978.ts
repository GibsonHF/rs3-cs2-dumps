//
function script16978(int0: int): void {
    var int1 = script13383(int0);
    var int2 = script16947(int0);
    switch (int1) {
        case 0: {
            stack(22106);
            stack(script16991(int0));
            IF_SETGRAPHIC();
            IF_SETHIDE(1, script16992(int0));
            if ((script16998(int0) != -1)) {
                IF_SETHIDE(false, script16998(int0));
            };
            script16979(int2, int0);
            IF_SETHIDE(false, script16993(int0));
            IF_SETTEXT(inttostring(dbrow_getfield(int2, 843840, 0), 10), script16993(int0));
            stack(22110);
            stack(script16995(int0));
            IF_SETGRAPHIC();
            IF_SETHIDE(0, script16994(int0));
            stack(int2);
            stack(843856);
            stack(0);
            dbrow_getfield();
            IF_SETTEXT(inttostring(stack(), 10), script16994(int0));
            stack(22113);
            stack(script16996(int0));
            IF_SETGRAPHIC();
            IF_SETTEXT("Ready to brew!", script16999(int0));
            stack(22116);
            stack(script16990(int0));
            IF_SETGRAPHIC();
            IF_SETHIDE(1, script17000(int0));
            IF_SETHIDE(1, script17001(int0));
            break;
        }
        case 1: {
            stack(22105);
            stack(script16991(int0));
            IF_SETGRAPHIC();
            IF_SETHIDE(1, script16992(int0));
            script16979(int2, int0);
            IF_SETHIDE(0, script16993(int0));
            stack(int2);
            stack(843840);
            stack(0);
            dbrow_getfield();
            IF_SETTEXT(inttostring(stack(), 10), script16993(int0));
            stack(22112);
            stack(script16995(int0));
            IF_SETGRAPHIC();
            IF_SETHIDE(1, script16994(int0));
            stack(22114);
            stack(script16996(int0));
            IF_SETGRAPHIC();
            IF_SETTEXT("In the pot!", script16999(int0));
            stack(22123);
            stack(script16990(int0));
            IF_SETGRAPHIC();
            IF_SETHIDE(0, script17000(int0));
            stack(22108);
            stack(script17000(int0));
            IF_SETGRAPHIC();
            IF_SETHIDE(0, script17001(int0));
            IF_SETTEXT(inttostring(script16940(int0), 10), script17001(int0));
            break;
        }
        case 2: {
            stack(22106);
            stack(script16991(int0));
            IF_SETGRAPHIC();
            IF_SETHIDE(0, script16992(int0));
            IF_SETHIDE(1, script16997(int0));
            if ((script16998(int0) != -1)) {
                IF_SETHIDE(true, script16998(int0));
            };
            if ((int0 == 3)) {
                IF_SETTEXT("", comp(1068, 95));
            };
            IF_SETHIDE(true, script16993(int0));
            stack(22111);
            stack(script16995(int0));
            IF_SETGRAPHIC();
            IF_SETHIDE(0, script16994(int0));
            stack(int2);
            stack(843856);
            stack(0);
            dbrow_getfield();
            IF_SETTEXT(inttostring(stack(), 10), script16994(int0));
            stack(22115);
            stack(script16996(int0));
            IF_SETGRAPHIC();
            IF_SETTEXT("Refilling...", script16999(int0));
            stack(22124);
            stack(script16990(int0));
            IF_SETGRAPHIC();
            IF_SETHIDE(0, script17000(int0));
            stack(22109);
            stack(script17000(int0));
            IF_SETGRAPHIC();
            IF_SETHIDE(0, script17001(int0));
            IF_SETTEXT(inttostring(script16941(int0), 10), script17001(int0));
            break;
        }
    };
    script3536(script16954(int0), script16945(int0), -1);
    return;
}