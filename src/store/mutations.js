export default{
    changecityName(state, city){
        state.city=city;
        try{
            localStorage.city=city;
        }catch (e){
    
        }
        
    },
    changeGallGayShow(state,val){
        state.GallGayShow=val;
    }
}