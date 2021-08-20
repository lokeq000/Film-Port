<template>
    <div class="m-film-list">
        <div class="m-film-list-inner" v-for='item in FILMLIST' :key="item.article">
            <div class="m-film-list-img"> <img :src="require('../images/'+ item.filmImg)" class="m-film-list-img-main" alt="img"> </div>
            <div class="m-film-list-title"><h2>{{item.filmTitle}}</h2></div>
            <div class="m-film-list-description"> <p>{{item.filmShortDescription}}</p></div>
     
                <button class="btn-style" @click="btnClick(item.filmArticle)">Перейти к фильму</button>
       
            
        </div>
        
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    export default {
        name:'m-film-list',
        methods:{
            btnClick(article){
               this.$router.push({name: 'Film-page', query: {'filmA':article} })
            },
            ...mapActions([''])
        },
        computed:{
            ...mapGetters(['FILMLIST'])
        }
    }
</script>

<style >
    .m-film-list{
        color:#fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
    .m-film-list-img-main{
        width: 800px;
        height: 4s00px;
    }
    .m-film-list-inner{
         display: flex;
         position: relative;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
    }

    .m-film-list-description{
        max-width: 800px;
        overflow:hidden;
    }
</style>