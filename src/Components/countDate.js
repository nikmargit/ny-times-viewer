var d = new Date();

export const currentMonthName = () => {
    var mnth = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    return mnth[d.getMonth()];
};

export const currentMonthNumber = () => {
    return d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
};

export const currentYear = () => {
    return d.getFullYear();
};
