//
function script4760(int0: component): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    var int1 = script3934(int0);
    if ((IF_FIND(int0) == 1)) {
        CC_SETPOSITION(0, 0, 1, 1);
        CC_SETSIZE(0, 0, 1, 1);
    };
    CC_DELETEALL(int0);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(32, 8, 1, 0);
    CC_SETPOSITION(0, 0, 1, 0);
    CC_SETGRAPHIC(21002 as graphic);
    CC_SETTILING(true);
    CC_SETVFLIP(true);
    if ((int1 != -1)) {
        script3927(int1);
    };
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(16, 16, 0, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETGRAPHIC(21001 as graphic);
    CC_SETVFLIP(true);
    if ((int1 != -1)) {
        script3927(int1);
    };
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(16, 16, 0, 0);
    CC_SETPOSITION(0, 0, 2, 0);
    CC_SETGRAPHIC(21001 as graphic);
    CC_SETHFLIP(true);
    CC_SETVFLIP(true);
    if ((int1 != -1)) {
        script3927(int1);
    };
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(32, 8, 1, 0);
    CC_SETPOSITION(0, 0, 1, 2);
    CC_SETGRAPHIC(21002 as graphic);
    CC_SETTILING(true);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(16, 16, 0, 0);
    CC_SETPOSITION(0, 0, 0, 2);
    CC_SETGRAPHIC(21001 as graphic);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(16, 16, 0, 0);
    CC_SETPOSITION(0, 0, 2, 2);
    CC_SETGRAPHIC(21001 as graphic);
    CC_SETHFLIP(true);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(8, 16, 0, 1);
    CC_SETPOSITION(0, 8, 0, 0);
    CC_SETGRAPHIC(21000 as graphic);
    CC_SETTILING(true);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(8, 16, 0, 1);
    CC_SETPOSITION(0, 8, 2, 0);
    CC_SETGRAPHIC(21000 as graphic);
    CC_SETTILING(true);
    CC_SETHFLIP(true);
    return;
}