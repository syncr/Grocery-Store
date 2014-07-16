describe('groceryStore', function() {
  it('will tell us how many calories have', function(){
    groceryStore("bananas").should.equal(80);
  });
  it('will tell us how many calories bananas and chocolate have', function(){
    groceryStore('bananas, chocolate').should.equal(320);
  });
});
