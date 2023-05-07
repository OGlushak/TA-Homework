const currentDate = new Date();
module.exports.date = currentDate;

module.exports.Message = function (name) {
    const hour = currentDate.getHours();

    switch (true) {
        case hour < 11:
            return 'Good morning, ${name}';
        case hour >= 11 && hour < 17:
            return 'Good day, ${name}';
        case hour > 17 && hour <= 23:
            return 'Good night, ${name}'
    }
}