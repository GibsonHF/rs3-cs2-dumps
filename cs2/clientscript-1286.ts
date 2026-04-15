//
function script1286(int0: unknown_int, int1: unknown_int): [int, unknown_string] {
    var int2 = 0;
    var string0 = "<col=FF0000>";
    switch (MAX(1, varbitplayer_39986)) {
        case 1: {
            string0 = "<col=FF0000>";
            break;
        }
        case 2: {
            string0 = "<col=FF7F00>";
            break;
        }
        case 3: {
            string0 = "<col=FFFF00>";
            break;
        }
        case 4: {
            string0 = "<col=00FF00>";
            break;
        }
    };
    return [MAX(1, varbitplayer_39986), string0];
}