//
function script17490(int0: dbrow): [unknown_int, string] {
    var int1 = 1;
    var string0 = "";
    var int2 = dbrow_getfield(int0, 954496, 0);
    switch (dbrow_getfield(int0, 954400, 0)) {
        case 1: {
            if ((struct_getparam(int2, 2807) > 1)) {
                string0 = `${string0}<br>- Level <col=ffffff>${inttostring(struct_getparam(int2, 2807), 10)}</col> ${enum_getvalue(0, 36, 108 as cs2enum, struct_getparam(int2, 2806))}`;
                if ((STAT_BASE(script2179(struct_getparam(int2, 2806))) < struct_getparam(int2, 2807))) {
                    int1 = 0;
                };
            };
            break;
        }
    };
    var string1 = "";
    switch (int0) {
        case 7608: {
            string0 = `${string0}<br>- Unlocked '<col=ffffff>${script17486(7607 as dbrow)}</col>'`;
            if ((script17492(7607 as dbrow) == false)) {
                int1 = 0;
            };
            break;
        }
        case 7610: {
            string0 = `${string0}<br>- Unlocked '<col=ffffff>${script17486(7609 as dbrow)}</col>'`;
            if ((script17492(7609 as dbrow) == false)) {
                int1 = 0;
            };
            break;
        }
        case 7612: {
            string0 = `${string0}<br>- Unlocked '<col=ffffff>${script17486(7611 as dbrow)}</col>'`;
            if ((script17492(7611 as dbrow) == false)) {
                int1 = 0;
            };
            break;
        }
        case 13945: {
            string0 = `${string0}<br>- Unlocked '<col=ffffff>${script17486(13886 as dbrow)}</col>'`;
            if ((script17492(13886 as dbrow) == false)) {
                int1 = 0;
            };
            break;
        }
        case 7619: {
            string1 = script2103(497 as quest);
            string0 = `${string0}<br>- Completed '<col=ffffff>${string1}</col>' quest`;
            if ((varbitplayer_53555 < 31)) {
                int1 = 0;
            };
            break;
        }
        case 7618: {
            string1 = script2103(497 as quest);
            string0 = `${string0}<br>- Completed '<col=ffffff>${string1}</col>' quest`;
            if ((varbitplayer_53555 < 31)) {
                int1 = 0;
            };
            break;
        }
        case 7621: {
            string1 = script2103(497 as quest);
            string0 = `${string0}<br>- Completed '<col=ffffff>${string1}</col>' quest`;
            if ((varbitplayer_53555 < 31)) {
                int1 = 0;
            };
            break;
        }
        case 7622: {
            string1 = script2103(497 as quest);
            string0 = `${string0}<br>- Completed '<col=ffffff>${string1}</col>' quest`;
            if ((varbitplayer_53555 < 31)) {
                int1 = 0;
            };
            break;
        }
        case 7623: {
            string1 = script2103(333 as quest);
            string0 = `${string0}<br>- Completed '<col=ffffff>${string1}</col>' quest`;
            if (((varbitplayer_11105 < 90) && (script20162() == 0))) {
                int1 = 0;
            };
            break;
        }
        case 7626: {
            string0 = `${string0}<br>- Unlocked '<col=ffffff>${script17486(7625 as dbrow)}</col>'`;
            if ((script17492(7625 as dbrow) == false)) {
                int1 = 0;
            };
            break;
        }
        case 7625: {
            string0 = `${string0}<br>- Unlocked '<col=ffffff>${script17486(7624 as dbrow)}</col>'`;
            if ((script17492(7624 as dbrow) == false)) {
                int1 = 0;
            };
            break;
        }
        case 7615: {
            string0 = `${string0}<br>- Unlocked '<col=ffffff>${script17486(7614 as dbrow)}</col>'`;
            if ((script17492(7614 as dbrow) == false)) {
                int1 = 0;
            };
            break;
        }
        case 7614: {
            string0 = `${string0}<br>- Unlocked '<col=ffffff>${script17486(7613 as dbrow)}</col>'`;
            if ((script17492(7613 as dbrow) == false)) {
                int1 = 0;
            };
            break;
        }
    };
    return [int1, string0];
}