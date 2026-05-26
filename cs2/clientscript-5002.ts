//
function script5002(int0: number): void {
    script4408(int0);
    CC_DELETEALL(int0);
    CC_CREATE(int0, 5, 0);
    CC_SETSIZE(18, 18, 0, 0);
    CC_SETPOSITION(0, 0, 1, 1);
    var int1 = script4964(int0);
    var int2 = 0;
    if ((CLANPROFILE_FIND() == 1)) {
        int2 = script4949(int1);
        switch (int2) {
            case 17: {
                CC_SETGRAPHIC(7431);
                break;
            }
            case 18: {
                CC_SETGRAPHIC(7430);
                break;
            }
            case 19: {
                CC_SETGRAPHIC(7433);
                break;
            }
            case 1: {
                CC_SETGRAPHIC(7422);
                break;
            }
            case 2: {
                CC_SETGRAPHIC(7423);
                break;
            }
            case 3: {
                CC_SETGRAPHIC(7424);
                break;
            }
            case 4: {
                CC_SETGRAPHIC(7425);
                break;
            }
            case 5: {
                CC_SETGRAPHIC(7426);
                break;
            }
            case 6: {
                CC_SETGRAPHIC(7427);
                break;
            }
            case 7: {
                CC_SETGRAPHIC(7428);
                break;
            }
        };
    };
    return;
}