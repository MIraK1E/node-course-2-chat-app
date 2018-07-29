const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const result = generateMessage('admin', 'test');
        
        expect(result.from).toBe('admin');
        expect(result.text).toBe('test');
        expect(typeof result.createdAt).toBe('number');
    });
});

describe('gerateLocationMessage', () => {
    it('should generate coreet location object', () => {
        const result = generateLocationMessage('admin', 1, 1);

        expect(result.from).toBe('admin');
        expect(result.url).toBe('https://www.google.com/maps?q=1,1');
        expect(typeof result.createdAt).toBe('number');
    });
});