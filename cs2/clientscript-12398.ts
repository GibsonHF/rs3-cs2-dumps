//
function script12398(int0: dbrow): string {
    var int1 = script12399(int0);
    var int2 = script12401(int0);
    var int3 = 0;
    var string0 = "";
    var string1 = "";
    while ((++int3 <= int2)) {
        switch (int3) {
            case 1: {
                string1 = dbrow_getfield(dbrow_getfield(int0, 495696, 0), 495648, 0);
                break;
            }
            case 2: {
                string1 = dbrow_getfield(dbrow_getfield(int0, 495712, 0), 495648, 0);
                break;
            }
            case 3: {
                string1 = dbrow_getfield(dbrow_getfield(int0, 495728, 0), 495648, 0);
                break;
            }
            case 4: {
                string1 = dbrow_getfield(dbrow_getfield(int0, 495744, 0), 495648, 0);
                break;
            }
        };
        if ((int3 < int1)) {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = strconcat(string0, string1);
            } else {
                string0 = strconcat(string0, `    ${string1}`);
            };
        } else if ((int3 == int1)) {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = strconcat(string0, `<col=ffffff>${string1}</col>`);
            } else {
                string0 = strconcat(string0, `    <col=ffffff>${string1}</col>`);
            };
        } else if ((STRING_LENGTH(string0) == 0)) {
            string0 = strconcat(string0, "? ? ?");
        } else {
            string0 = strconcat(string0, "    ? ? ?");
        };
    };
    return string0;
}