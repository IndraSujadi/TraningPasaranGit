// perlu import file yagn memiliki fungsi yang dimaksud("pluck") untuk menjalsankan test case
import pluck from '../B'; // from ../B karena fungsi pluck ada di B.js

// tidak dapat dijalankan karena belum punya library jest untuk testing javascript

it('should pluck values', () => {
    let people = [
        {name: 'Simon', age: 36},
        {name: 'Paul', age: 33},
        {name: 'Nixon', age: 35}
    ];
    expect(pluck(people, 'name')).toEqual(['Simon', 'Paul', 'Nixon']);
});