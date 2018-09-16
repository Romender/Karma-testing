describe('calculator testing',()=>{
    it('summation testing',()=>{
        let sum = summation(4,5);
        console.log(sum);
        expect(sum).toEqual(9);
    });

    it('subtraction testing',()=> {
        let result = subtraction(5,4);
        console.log(result);
        expect(result).toEqual(1);
    });

    it('multiplication testing',()=>{
        let result = multiplication(4,5);
        console.log(result);
        expect(result).toEqual(20);
    });

    it('division testing',()=>{
        let result = division(5,5);
        console.log(result);
        expect(result).toEqual(2);
    });
});