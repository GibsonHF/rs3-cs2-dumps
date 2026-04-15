//
function script10580(int0: int): [int, int, int] {
    var int1 = (script16024(int0) - script12477());
    var int2 = (DATE_MINUTES_FROMRUNEDAY(script16025(int0)) / 60);
    var int3 = DATE_MINUTES_FROMRUNEDAY(script16025(int0));
    return [int1, int2, int3];
}