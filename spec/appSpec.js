

describe('.sortHat', function(){
    beforeEach(function(){
        spyOn(window,'fetch').and.callThrough;
        sortHat();
    });

   it('fetches from the potterapi.com', function(){
        expect(window.fetch).toHaveBeenCalledWith('https://www.potterapi.com/v1/sortingHat');
   });
});
    
