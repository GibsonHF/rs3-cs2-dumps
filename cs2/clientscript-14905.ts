//
function script14905(int0: number): void {
    var int1 = -1 as dbrow;
    var string0 = "";
    var int2 = -1 as graphic;
    var string1 = "";
    var string2 = "Assign";
    if ((int0 != -1 as dbrow)) {
        IF_SETHIDE(1, 45416545);
        IF_SETHIDE(0, 45416544);
        int1 = script14589(dbrow_getfield(int0, 372752, 0));
        string0 = dbrow_getfield(int0, 372768, 0);
        int2 = dbrow_getfield(int0, 372816, 0);
        string1 = dbrow_getfield(int1, 380944, 0);
        switch (script14670(int0)) {
            case 1: {
                string2 = "Unassign";
                break;
            }
            case 2: {
                string2 = "";
                break;
            }
            case 3: {
                string0 = "Unknown";
                int2 = -1 as graphic;
                string1 = "-";
                string2 = "";
                break;
            }
        };
        IF_SETTEXT(string0, 45416546);
        IF_SETTEXT(string1, 45416547);
        IF_SETGRAPHIC(int2, 45416564);
        IF_SETTEXT(`+${TOSTRING_LOCALISED(script14675(int0), 1)}%`, 45416553);
        IF_SETTEXT(`+${TOSTRING_LOCALISED(script14676(int0), 1)}%`, 45416633);
        IF_SETTEXT(dbrow_getfield(int0, 372784, 0), 45416560);
        IF_SETTEXT(script14681(dbrow_getfield(int0, 372864, 0)), 45416561);
        IF_SETTEXT(script14682(dbrow_getfield(int0, 372864, 0)), 45416562);
        if ((STRING_LENGTH(string2) > 0)) {
            IF_SETHIDE(0, 45416558);
            IF_SETHIDE(1, 45416557);
            script13969(45416634, 45416635, 28553, string2);
        } else {
            IF_SETHIDE(1, 45416558);
            IF_SETHIDE(0, 45416557);
            IF_SETTEXT(script14677(int0), 45416557);
        };
    } else {
        IF_SETHIDE(0, 45416545);
        IF_SETHIDE(1, 45416544);
    };
    return;
}