<template>
    <div class="me-container">
        
        <van-cell-group 
            class="my-info"
            v-if="user"
        >
            <van-cell center 
                class="base-info"
                :border="false"
                >
                <template #icon>
                    <van-image
                        slot="icon"
                        class="avatar"
                        round
                        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                        fit="cover"
                    />
                </template>

                <template #title>
                    <span class="name">Daniel</span>
                </template>
        
                <van-button 
                    size="small" 
                    round 
                    class="update-btn"
                >Edit
                </van-button>
            </van-cell>

            <van-grid class="data-info mb-4" :border="false">
                <van-grid-item text="lala" class="data-info-item">
                    <template #icon>
                        <span >123</span>
                    </template>
                </van-grid-item>
                <van-grid-item text="Following" class="data-info-item">
                    <template #icon>
                        <span >226</span>
                    </template>
                </van-grid-item>
                <van-grid-item text="Follower" class="data-info-item">
                    <template #icon>
                        <span >14</span>
                    </template>
                </van-grid-item>
                <van-grid-item text="Likess & Col" class="data-info-item">
                    <template #icon>
                        <span >18</span>
                    </template>
                </van-grid-item>
            </van-grid>
        </van-cell-group>

        <div class="not-login" v-else>
            <div @click="$router.push ('/login')">
                <img class="mobile" src="./images/unlogin-img.png" alt="">
            </div>
            <div class="text">
                Login / SignUp
            </div>
        </div>

        <van-grid class="nav-grid" clickable :column-num="2">
        <van-grid-item class="nav-grid-item" icon="star-o" text="Collections" to="/" />
        <van-grid-item class="nav-grid-item" icon="browsing-history-o" text="History" to="/"  />
        </van-grid>

        <van-cell title="Messages" url="" is-link />
        <van-cell title="AI Chatbot" class="mb-4" url="" is-link />
        <van-cell v-if="user" class="logout-cell" title="Log out" url="" />
        <!-- <van-button type="primary" block>块级Log out元素</van-button> -->



         
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    computed: {
        localcomput(){

        },
        ...mapState({
            user: 'user',
        })
    }
}
</script>
<style scoped lang="less">
    .me-container {
        .my-info {
            // background: url("./banner.png") no-repeat;
            background: url("./images/banner.png") no-repeat;
            .base-info {
                background-color: unset;
                box-sizing: border-box;
                height: 115px;
                padding-top: 38px;
                padding-bottom: 11px;

                .avatar {
                    width: 66px;
                    height: 66px;
                    border: 1px solid white;
                    box-sizing: border-box;
                    margin-right: 11px;
                }

                .name {
                    font-size: 15px;
                    color: #fff;
                }

                .update-btn {
                    height: 16px;
                    color: #666666;
                    font-size: 10px;
                }
            }

            :deep(.van-grid-item__content) {
                background-color: unset !important;
            }

            .data-info {
                .data-info-item {
                    height: 65px;
                    color: #fff;
                    font-size: 18px;

                    :deep(.van-grid-item__text){
                        color: unset;
                        font-size: 11px;
                    }
                }
            }

            
        }

        :deep(.nav-grid) {
            .nav-grid-item {
                height: 70px;
                .van-grid-item__icon{
                    font-size: 22px
                }
            }
        }

        .logout-cell{
            text-align: center;
            color: #d86262;
        }

        .mb-4 {
            margin-bottom: 4px;
        }

        .not-login {
            background: url("./images/banner.png") no-repeat;
            background-size: cover;
            height: 180px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .mobile {
                width: 66px;
                height: 66px;
            }

            .text {
                font-size: 14px;
                color: #fff;
            }
        }
        
    }
    
    
    
</style>
<!-- 
    deep深度选择器
        在vue中，我们为了避免父组件的样式影响到子组件的样式，会在style中加<style scoped>，
        这样父组件中如果有跟子组件相同的class名称或者使用选择器的时候，就不会影响到子组件的样式。
        但是这样存在着一个问题，比如你使用了别人的组件或者自己开发一个组件，有时候你修改一处就可能影响到别的地方，
        所以就需要有一个方法或者方式，既不影响到别的地方，又能修改子组件在当前的样式，可以使用 /deep/ 深度选择器。

 -->