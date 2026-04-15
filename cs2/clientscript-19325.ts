//
function script19325(int0: int): string {
    if ((int0 < (60 * 2))) {
        if ((int0 == 0)) {
            return "<lt>1 minute ago";
        };
        if ((int0 == 1)) {
            return `${inttostring(int0, 10)} minute ago`;
        };
        return `${inttostring(int0, 10)} minutes ago`;
    };
    if ((int0 < (1440 * 2))) {
        return `${inttostring((int0 / 60), 10)} hours ago`;
    };
    if ((int0 < (10080 * 2))) {
        return `${inttostring((int0 / 1440), 10)} days ago`;
    };
    if ((int0 < (43200 * 2))) {
        return `${inttostring((int0 / 10080), 10)} weeks ago`;
    };
    if ((int0 < (525600 * 2))) {
        return `${inttostring((int0 / 43200), 10)} months ago`;
    };
    return `${inttostring((int0 / 525600), 10)} years ago`;
}