// Task 1
describe('Dropdown list activity', () => {
    beforeEach(async () {
        await Browser.get('http://the-internet.herokuapp.com/dropdown');
    });

    it('first option should be inactive and the second option active', async () => {
        const options = element.all(by.css('#dropdown option'));

        const firstOption = options.first();
        const secondOption = options.get(1);

        expect(await firstOption.getAttribute('disabled')).toBe('true');
        expect(await secondOption.getAttribute('disabled')).toBeFalsy();
    });
});

// Task 2
