//
function script10109(int0: unknown_int, int1: component, int2: int): void {
    var string0 = "The spider is buffed!";
    switch (int0) {
        case 1: {
            string0 = `Spider minions will back up their leader: ${inttostring(varclient_4276, 10)} left.`;
            break;
        }
        case 2: {
            string0 = `${inttostring(varclient_4277, 10)} acid is in the pool and should be dealt with via absorption.`;
            break;
        }
        case 3: {
            string0 = `Spider minons on the roof can still heal Araxxor for ${inttostring(varclient_4278, 10)} health points.`;
            break;
        }
    };
    script8800(string0, int1, int2);
    return;
}