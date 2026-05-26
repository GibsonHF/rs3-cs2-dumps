//
function script13388(int0: number, int1: number): void {
    var int2 = script13432(int0);
    var string0 = "null";
    var int3 = -1;
    if ((int1 == 0)) {
        switch (int0) {
            case 1: {
                int3 = 122880008;
                string0 = "Worker";
                break;
            }
            case 2: {
                int3 = 122880011;
                string0 = "Imperial";
                break;
            }
            case 3: {
                int3 = 122880020;
                string0 = "Merchant";
                break;
            }
            case 4: {
                int3 = 122880015;
                string0 = "Port";
                break;
            }
        };
    } else {
        switch (int0) {
            case 1: {
                int3 = 122880140;
                break;
            }
            case 2: {
                int3 = 122880143;
                break;
            }
            case 3: {
                int3 = 122880149;
                break;
            }
            case 4: {
                int3 = 122880146;
                break;
            }
        };
        string0 = "";
    };
    CC_DELETEALL(int3);
    CC_CREATE(int3, 4, IF_GETNEXTSUBID(int3));
    CC_SETSIZE(200, 200, 0, 0);
    CC_SETPOSITION(0, -105, 1, 1);
    CC_SETTEXTFONT(56);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETCOLOUR(script10495(0));
    CC_SETTEXT(string0);
    if ((int1 == 0)) {
        switch (int0) {
            case 1: {
                int3 = 122880008;
                break;
            }
            case 2: {
                int3 = 122880011;
                break;
            }
            case 3: {
                int3 = 122880020;
                break;
            }
            case 4: {
                int3 = 122880015;
                break;
            }
        };
    } else {
        switch (int0) {
            case 1: {
                int3 = 122880140;
                break;
            }
            case 2: {
                int3 = 122880143;
                break;
            }
            case 3: {
                int3 = 122880149;
                break;
            }
            case 4: {
                int3 = 122880146;
                break;
            }
        };
    };
    CC_CREATE(int3, 4, IF_GETNEXTSUBID(int3));
    string0 = inttostring(int2, 10);
    CC_SETSIZE(200, 200, 0, 0);
    CC_SETPOSITION(0, 20, 1, 1);
    CC_SETTEXTFONT(60);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETCOLOUR(16777215);
    CC_SETTEXT(string0);
    CC_SETCOLOUR(15777401);
    switch (int0) {
        case 1: {
            CC_SETONVARTRANSMIT(callback(script13388, int0, int1, 6998, 1));
            break;
        }
        case 2: {
            CC_SETONVARTRANSMIT(callback(script13388, int0, int1, 6999, 1));
            break;
        }
        case 3: {
            CC_SETONVARTRANSMIT(callback(script13388, int0, int1, 7000, 1));
            break;
        }
        case 4: {
            CC_SETONVARTRANSMIT(callback(script13388, int0, int1, 7001, 1));
            break;
        }
    };
    return;
}