describe("test", function(){
    it("request", function(done) {
        fetch('/sites/').then((res) => res.text()).then((res) => {
            console.log(res);
            done();
        });
    });
});