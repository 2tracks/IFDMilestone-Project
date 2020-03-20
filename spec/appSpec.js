

describe('.sortHat', function(){
    beforeEach(function(){
        spyOn(window,'fetch');
    
    });

   it('fetches from the potterapi.com', function(){
        expect(window.fetch).toHaveBeenCalledWidth('potterapi.com');
   });
});
    
