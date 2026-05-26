//
function script4531(int0: number): void {
    if ((int0 == -1)) {
        return;
    };
    var int1 = script3934(int0);
    if ((IF_FIND(int0) == 1)) {
        CC_SETPOSITION(0, 0, 1, 1);
        CC_SETSIZE(0, 0, 1, 1);
    };
    CC_DELETEALL(int0);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(92, 32, 1, 0);
    CC_SETPOSITION(28, 0, 0, 0);
    CC_SETGRAPHIC(20998);
    CC_SETTILING(1);
    if ((int1 != -1)) {
        script3927(int1);
    };
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(28, 32, 0, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETGRAPHIC(20995);
    if ((int1 != -1)) {
        script3927(int1);
    };
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(64, 32, 0, 0);
    CC_SETPOSITION(0, 0, 2, 0);
    CC_SETGRAPHIC(20999);
    if ((int1 != -1)) {
        script3927(int1);
    };
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(32, 8, 1, 0);
    CC_SETPOSITION(0, 0, 1, 2);
    CC_SETGRAPHIC(21002);
    CC_SETTILING(1);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(16, 16, 0, 0);
    CC_SETPOSITION(0, 0, 0, 2);
    CC_SETGRAPHIC(21001);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(16, 16, 0, 0);
    CC_SETPOSITION(0, 0, 2, 2);
    CC_SETGRAPHIC(21001);
    CC_SETHFLIP(1);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(8, 40, 0, 1);
    CC_SETPOSITION(0, 32, 0, 0);
    CC_SETGRAPHIC(21000);
    CC_SETTILING(1);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(8, 40, 0, 1);
    CC_SETPOSITION(0, 32, 2, 0);
    CC_SETGRAPHIC(21000);
    CC_SETTILING(1);
    CC_SETHFLIP(1);
    return;
}