const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('it should generate correct message object', () => {
        const result = generateMessage('admin', 'test');
        
        expect(result.from).toBe('admin');
        expect(result.text).toBe('test');
        expect(typeof result.createdAt).toBe('number');
    });
});