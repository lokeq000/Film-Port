<template>
    <div class="m-film-page">
        <div class="m-film-page-inner">
             <div class="m-film-list-img"> <img :src="require('../images/'+ filmFiend.filmImg)" class="m-film-list-img-main" alt="img"> </div>
            <div class="m-film-list-title"><h2>{{filmFiend.filmTitle}}</h2></div>
            <div class="m-film-list-description"> <p>{{filmFiend.filmFullDescription}}</p></div>
        </div>
         
    </div>
</template>

<script>
    import  {mapGetters} from 'vuex'
    export default {
        props:{
            filmArticle:{
                type:String,
                default:''
            }
        },
        name:'m-film-page',
        data(){
            return {
            
 
            }
        },
        methods:{
    
        },
         computed:{
            ...mapGetters(['FILMLIST']),
            filmFiend(){
                let result = {}
                this.FILMLIST.forEach((film)=>{
                    if (film.filmArticle === this.$route.query.filmA){
                        result = film
                    }
                   
                })
                 return result
            }
       
        },
    }
</script>

<style>
.m-film-page{
    color:#fff;
}
.m-film-page-inner{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>