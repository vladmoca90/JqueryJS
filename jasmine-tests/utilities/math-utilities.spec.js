describe('textUtilities()', function () {

     it('returns 0 if text is empty', function () {

        var textUtils = new textUtilities();

        expect(textUtils.countLetters(' ', 'e')).toBe(0);
    });

    it('throws error if letter is null', function () {

        var textUtils = new textUtilities();

        expect(textUtils.countLetters('Vlad', null)).toThrowError;
    });

    it('throws error if letter is empty', function () {

        var textUtils = new textUtilities();

        expect(textUtils.countLetters('Vlad', ' ')).toThrowError;
    }); 

    it('returns how many times a letter appears if text not empty', function () {

        var textUtils = new textUtilities();

        expect(textUtils.countLetters('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eanean sodales justo et Enim ornare, a congue lacus commodo.', 'e')).toBe(10);
    });
});

describe('mathUtilities()', function () {

    it('returns the sum of two numbers', function () {

        var mathUtils = new mathUtilities();

        expect(mathUtils.add(7, 5)).toBe(12);
    });

    it('throws an error is the number is null', function () {

         var textUtils = new textUtilities();

        expect(textUtils.countLetters(null, 1)).toThrowError;
    });

    it('throws an error if the digit is null', function () {

         var textUtils = new textUtilities();

        expect(textUtils.countLetters('17272838119191929838299111', null)).toThrowError;
    });

    it('throws error is the digit value is negative', function () {

        var textUtils = new textUtilities();

        expect(textUtils.countLetters('17272838119191929838299111', -1)).toThrowError;
    });

    it('throws error is the digit value is greater than 9', function () {

        var textUtils = new textUtilities();

        expect(textUtils.countLetters('17272838119191929838299111', 11)).toThrowError;
    });
});